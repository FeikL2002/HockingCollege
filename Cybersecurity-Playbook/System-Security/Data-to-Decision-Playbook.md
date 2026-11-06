# Data to Decision Playbook

**Course:** CYBR-2102 — Cisco CCNA Security  
**Semester:** Autumn 2026  
**Knowledge Area:** System Security  
**Crosscutting Concepts:** Confidentiality, Integrity, Availability, Risk, Adversarial Thinking, Systems Thinking, Responsible AI  
**Skills Demonstrated:** Security data selection, time scoping, field validation, SPL interpretation, corroboration, evidence documentation, and AI output verification

## Overview

This procedure helps a beginning SOC analyst or teammate turn a security lead into an evidence-backed handoff. It answers: **Which available records can test the reported activity, what does the search actually include, and what additional evidence is needed before deciding what happened?**

Use only authorized training records or approved organizational evidence. A source inventory identifies where to look; it does not establish that a suspicious event occurred. The method builds on the Week 3 distinction between scenario context, external reputation, and local event evidence. Completion screenshots and scores belong in the private course submission.

## What I Did

**Work record:** Codex reviewed the retained Week 3 source-selection activity, Milestone 1 scope plan, and supplied Week 4 training views on the student's behalf on November 6, 2026. This AI-assisted artifact turns that material into an original reusable method and an invented example. The review checked the source's data format, the effects of narrowing identity filters, and the meaning of grouped endpoint results. It did not execute searches in a live Splunk environment or perform operational response actions.

The procedure retains the Week 3 distinctions between file presence and execution, scan summaries and remediation, and firewall permission and a completed connection. The Week 4 review added two refinements: verify the actual cloud log format before selecting fields, and read the exact aggregation function before describing its results. Vendor walkthrough findings, assessment answers, learner scores, and completion screenshots remain outside this public artifact.

### Choose a source that can answer the question

These are source examples, not claims that every field or source is available in the assigned data. Inspect the actual record and extraction before using a field name in a search.

| Evidence family and example | Useful information | Limitation and next check |
|---|---|---|
| Authentication — Microsoft Entra sign-in logs; the Week 3 scenario used `ms:aad:signin` | Identity, application/resource, result or failure reason, IP/device context, authentication methods, and available request/session identifiers | A shared IP does not identify a person. Check MFA details, managed-device context, known VPN/proxy use, and related requests. [Microsoft sign-in details](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-in-log-activity-details) |
| Endpoint — Windows application/security events or protection-product records | Provider, channel, event ID, computer, event time, and event-specific message; use detection/action fields when the protection record supplies them | Event IDs require provider context; an aggregate event count does not measure impact. Inspect individual records and corroborate with protection actions or file/process evidence. [Windows event system properties](https://learn.microsoft.com/en-us/windows/win32/wes/eventschema-systempropertiestype-complextype) |
| Network — Cisco ASA ACL and connection records; the Week 3 scenario identified `cisco:asa` | Message ID, protocol, addresses/ports, interface, ACL result, and available connection/NAT context | An ACL permit can be logged for a packet that is subsequently dropped. Check connection establishment/teardown, NAT attribution, and endpoint/DNS context. [Cisco ASA ACL logging](https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/217679-asa-access-control-list-configuration-ex.html) |
| Cloud — Amazon S3 server access logs | Request time, requester, remote IP, operation, bucket/object, request ID, HTTP status, and error code | Remote IP can reflect a proxy, fields can be unavailable, and an operation alone does not establish authorization. Check outcome and approved account/change context. Match the actual log format; S3 access logs and CloudTrail records are separate evidence types. [S3 server access log format](https://docs.aws.amazon.com/AmazonS3/latest/userguide/LogFormat.html) |

### Follow the evidence procedure

1. **Define the question and boundary.** Write one testable question, the relevant host/account/object, and the authorized environment. Record the original start/end times and timezone. Explain any expansion of the initial window. For SPL, `earliest` includes its boundary and `latest` excludes it; preserve that convention in the notes. [Splunk time modifiers](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.6/time-format-variables-and-modifiers/time-modifiers)
2. **Inventory available evidence.** Assign each record/export an evidence ID and retain its origin, collection date, coverage, and access restrictions. Preserve originals and work from copies. Mark unavailable sources explicitly. Select the source family that can test the question rather than searching every accessible dataset by default.
3. **Inspect fields before drafting the search.** Distinguish `source`, the file/stream/input origin, from `sourcetype`, the data format that guides parsing. Separately identify the application/provider described by an event. Verify actual field names, value spellings, timestamps, missing values, and host/account attribution using sample raw records. [Splunk default fields](https://help.splunk.com/en/splunk-enterprise/get-started/get-data-in/9.4/configure-indexed-field-extraction/about-default-fields-host-source-sourcetype-and-more)
4. **Explain each filter and transformation.** Select the actual approved dataset and time window first. Explain why each account, host, action, or IP condition belongs. Compare a narrow view with a justified context view. A display table selects fields; an aggregation changes event-level records into summaries. `stats count BY user` counts matching events in each user group. `stats values(Message) BY host` instead lists distinct message values for each host; repeated values collapse. The number of output host rows is a group count, not an event count or severity measurement. Retain underlying record IDs and event-level context. [Splunk stats](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.1/search-commands/stats), [Splunk values function](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.6/statistical-and-charting-functions/multivalue-stats-and-chart-functions)
5. **Record observation and interpretation separately.** Link every factual claim to its evidence ID, fields, and time. Record search text, filters, tool version if available, and whether the search was executed or only inspected. Describe missing telemetry and competing explanations. No matching records in incomplete data does not establish that an event never occurred.
6. **Corroborate and hand off.** Choose the next source that can distinguish the competing explanations. State the exact question for the next analyst and the access or response approval needed. Escalate under the organization's criteria; do not let a shared IP, a reputation label, or a high count alone determine incident severity or containment. Correlation and analysis of scope support the NIST CSF 2.0 Detect outcomes. [NIST CSF 2.0, DE.AE, printed page 21](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)

## Evidence

### Original illustrative example using invented training data

The rows below were invented for this playbook. They are not Cisco walkthrough answers, real sign-ins, or observed Splunk results. All times are UTC on November 4, 2026; the analysis window is `[09:00, 09:05)`. One row represents one event.

| Record | Time UTC | user | action | src_ip |
|---|---|---|---|---|
| E01 | 09:00:00 | demo-red | failure | 198.51.100.44 |
| E02 | 09:01:00 | demo-red | success | 198.51.100.44 |
| E03 | 09:02:00 | demo-blue | failure | 198.51.100.44 |
| E04 | 09:03:00 | demo-green | failure | 198.51.100.88 |
| E05 | 09:05:00 | demo-red | failure | 198.51.100.44 |

The following are **manual fixture comparisons, NOT EXECUTED in Splunk**. Every comparison assumes the same five-row dataset and stated window.

| Question/filter | Matching records | What the view supports and misses |
|---|---|---|
| All in-window events, then count by user | E01–E04; demo-red=2, demo-blue=1, demo-green=1 | Counts all actions. Calling these failure counts would incorrectly include the E02 success. |
| `user="demo-red" action="failure"` | E01 only | Answers the single-user failure question; omits demo-blue's failure at the same IP. |
| `src_ip="198.51.100.44" action="failure"` | E01 and E03 | Shows failures for two users sharing the IP. It does not establish one attacker or rule out shared egress. |
| All in-window `action="failure"`, then count by user | E01, E03, E04; one failure per listed user | Answers per-user failure counts in the fixture. E05 remains excluded at the exact end boundary. |

**Analyst note:** The wider IP-context view adds a lead about a second identity. Request session, MFA, device, and VPN/NAT context before attributing the activity. The success may matter to that separate question, so retain E02 in the timeline even though it does not belong in a failure-only count.

### Reusable claim record

| Claim | Evidence reference and fields | Interpretation | Uncertainty and next check |
|---|---|---|---|
| Two fictional users have a failure from the same IP in the window | E01/E03; `user`, `action`, `src_ip`, UTC time | Possible related activity requiring context | Shared egress is an alternative; compare session/device and approved VPN/NAT records |

## AI Use & Verification

Codex assisted on November 6, 2026 with reviewing supplied training views, organizing the procedure, drafting the original illustrative example, and checking the separate instructor-supplied fictional SPL exercise. The work was AI-assisted; independent student execution or review is not asserted. The full actual prompt and response belong in the private Blackboard appendix. No Splunk search was executed.

Two checks support the disclosed method:

1. **Reference and boundary check:** The proposed UTC time window and grouping were compared with primary Splunk documentation. `earliest` is inclusive, `latest` is exclusive, and `stats count BY user` returns event counts grouped by user. The final notes use an explicit window and distinguish event counts from `values` summaries. [Time modifiers](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.6/time-format-variables-and-modifiers/time-modifiers), [stats](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.1/search-commands/stats), [values](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.6/statistical-and-charting-functions/multivalue-stats-and-chart-functions)
2. **Fixture check:** Matching rows and per-user failures were determined by hand for the supplied practice fixture and compared with the proposed filter/grouping. The success row was excluded. The public example above independently shows the same verification method, including an exact-end-boundary row. These are manual expected results, not observed Splunk output.

**Correction and final analyst judgment:** The review identified that a plausible expression lacked a supplied index or sourcetype. The method now requires the actual authorized dataset selector before execution, rather than inventing one or searching default accessible indexes without qualification. It also requires correct UTC timestamp parsing and verified field extraction. Retain the manually checked counting logic as **NOT EXECUTED — manual fixture check only**. It is a proposed search method, not a validated detection or evidence of compromise.

### Revision after technical feedback

Independent AI technical review raised two documentation gaps: dataset scope was not established, and execution status needed an explicit label. The revised procedure adds a dataset-selection gate, records timezone and field assumptions, and labels manual checks as unexecuted. Review of the endpoint transformation also led to a precise distinction between event counts and distinct-message lists grouped by host. This revision records AI technical feedback; it does not claim instructor or classmate feedback.

## What I Learned

The central lesson is that a defensible conclusion depends on the relationship between the question, the available source, and the search transformation. Choosing an S3 access log requires its own requester, operation, and time interpretation; a cloud-service label alone is insufficient to substitute another log schema. Narrowing to one account answers a focused question but can hide related identities. Grouping endpoint messages can make a review manageable while removing frequency and event-order detail.

A useful habit is to write the expected matches before accepting the search and then explain what the output cannot establish. The original example makes that concrete: one user-only filter misses another identity at the same IP, while a broader count can accidentally include a success. Neither the shared IP nor a larger summary establishes an attacker or severity. These are technical learning points from the AI-assisted review, without a claim about the student's personal feelings or independent execution.

## Cybersecurity Connection

The method supports investigation of authentication abuse, suspicious endpoint activity, and unauthorized cloud changes while preserving uncertainty. It addresses integrity by checking record identity and time, confidentiality by limiting public evidence, and risk by separating an investigative lead from a response decision. A repeatable handoff can help another analyst test an explanation without inheriting an unsupported accusation. These are practical applications of NIST CSF 2.0 adverse-event analysis, including correlation, scope, and incident criteria. [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)

## Professional Connection

A Tier 1 SOC analyst can use this procedure to document the initial question, source choices, matching events, and next check. A Tier 2 analyst can use the preserved record IDs and search boundaries to repeat the analysis and test alternatives. Incident responders and system owners retain authority for containment and remediation. This artifact demonstrates a documentation method; it does not claim professional incident-response experience or operational actions by the student.

## Learning sources and evidence handling

The method draws on Cisco Networking Academy's *Data and Tools for Defense Analysts*, the retained Week 3 source-selection record, the Milestone 1 scope plan, and the supplied Week 4 training views reviewed on November 6, 2026. Those course materials inform the method; the public illustrative rows, tables, and procedure are original. Primary documentation links throughout this page were checked November 6, 2026.

Keep raw course screenshots, learner scores, full private AI transcripts, credentials, and vendor assessment answers in the appropriate private submission. Public evidence should contain only sanitized methods, original illustrative examples, source credit, and accurately labeled verification results.
