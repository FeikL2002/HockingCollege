/**
 * A+ Core 1 Online Treasure Hunt (Converted) — JavaScript version
 * - Stores the assignment + answers as structured data
 * - Can output Markdown or a simple HTML page
 *
 * Usage (Node):
 *   node treasureHunt.js
 *
 * Usage (Browser):
 *   Include this file in an HTML page, then call:
 *     document.body.innerHTML = TreasureHunt.toHTML();
 */

const TreasureHunt = (() => {
  const data = {
    title: "A+ Core 1 Online Treasure Hunt (Converted)",
    assignmentDetails: {
      studentName: "LewisJosephFeik",
      course: "Cisco I-Intro to Networks",
      goal:
        "Solve 10 interconnected online clues to diagnose and “repair” a failed computer system — entirely using the web, your A+ resources, and your own knowledge.",
      duration: "Full lab (~1 hr 45 min)",
      tools: ["Browser", "Cengage MindTap or TestOut PC Pro", "YouTube", "your GitHub Playbook"],
      howItWorks: [
        "Work solo or in pairs.",
        "Read each clue in order — each tests an A+ Core 1 concept (hardware, networking, virtualization, troubleshooting).",
        "Research, verify, and record your answers in your Playbook.",
        "When finished, submit your Playbook PDF (Treasure Hunt section) to Blackboard before the end of lab.",
      ],
    },

    clues: [
      {
        number: 1,
        title: "The Silent Machine",
        scenario: "The PC won’t power on. You hear no fans, no lights, no beeps.",
        prompt: "Name two possible root causes and the first tool you’d use to test them. (Hint: Think power supply and motherboard.)",
      },
      {
        number: 2,
        title: "The Beeping BIOS",
        scenario: "You finally hear 3 short beeps on startup.",
        prompt: "What does this usually indicate, and what’s your next troubleshooting step?",
      },
      {
        number: 3,
        title: "The Missing Drive",
        scenario: 'BIOS shows “No Boot Device Found.”',
        prompt: "What does this usually indicate, and what’s your next troubleshooting step?",
      },
      {
        number: 4,
        title: "The Hot CPU",
        scenario: "The PC randomly shuts down under load.",
        prompt:
          "List two possible hardware causes and one software fix. What component or feature could prevent overheating, and how can you monitor its performance?",
      },
      {
        number: 5,
        title: "The Slow LAN",
        scenario: "Your workstation connects via Ethernet but speeds are extremely slow.",
        prompt: "What command would you use to test connectivity, and what physical layer issue could cause this?",
      },
      {
        number: 6,
        title: "The Phantom Display",
        scenario: "A monitor powers on but shows no image.",
        prompt: "Provide likely causes and an isolating test.",
      },
      {
        number: 7,
        title: "The Virtual Machine Vanishing Act",
        scenario: "A user reports their VM disappeared.",
        prompt: "List two possible hardware causes and one test you can run to isolate the issue.",
      },
      {
        number: 8,
        title: "The Peripheral Puzzle",
        scenario: "A USB printer is detected but won’t print.",
        prompt: "What troubleshooting tool or setting in Windows can be used to reset or reinstall the driver?",
      },
      {
        number: 9,
        title: "The Cloud Question",
        scenario: "A company moves from local storage to OneDrive.",
        prompt: "Identify one advantage and one risk of cloud storage for businesses.",
      },
      {
        number: 10,
        title: "The Final Fix",
        scenario: "You’ve restored the system!",
        prompt:
          "Take one screenshot of a working Device Manager or Command Prompt (systeminfo) and include it in your Playbook section titled “A+ Core 1 Treasure Hunt.”",
      },
    ],

    deliverable: {
      title: "Deliverable",
      requirements: [
        "Create a section in your GitHub Playbook titled “A+ Core 1 Online Treasure Hunt.”",
        "Include all 10 numbered answers.",
        "Include screenshots or command outputs where relevant.",
        "Include a 2–3 sentence summary of what you learned.",
        "Export to PDF and upload it to Blackboard before the end of lab.",
      ],
    },

    grading: {
      totalPoints: 100,
      categories: [
        { name: "Correct answers (10 × 7 pts)", points: 70 },
        { name: "Playbook documentation (organized, labeled, uploaded)", points: 20 },
        { name: "Professionalism & participation", points: 10 },
      ],
    },

    optionalBonus: {
      points: 5,
      task:
        "Visit PCPartPicker.com and design a system for under $900 that meets the A+ performance standards for a small business. Add your build list and link to your Playbook.",
    },

    answers: [
      {
        clue: 1,
        title: "The Silent Machine",
        response: [
          "Two possible root causes:",
          "• Failed power supply (PSU)",
          "• Failed or shorted motherboard",
          "First tool to test:",
          "• PSU tester or multimeter (also try a known-good outlet/power cable)",
        ],
      },
      {
        clue: 2,
        title: "The Beeping BIOS",
        response: [
          "3 short beeps usually indicate:",
          "• RAM/POST memory error (common on AMI BIOS; exact meaning varies by vendor)",
          "Next step:",
          "• Power off, reseat RAM, test one stick at a time, try different slots, and run a memory diagnostic.",
        ],
      },
      {
        clue: 3,
        title: "The Missing Drive",
        response: [
          "Usually indicates:",
          "• Drive not detected / not bootable, or BIOS/UEFI cannot find a valid boot device.",
          "Next troubleshooting steps (examples):",
          "• Reseat/check SATA or NVMe connections; try another port/cable; confirm the drive is detected in BIOS/UEFI.",
          "• Verify boot order and storage controller settings (AHCI/RAID).",
          "Software fix (example):",
          "• From WinRE, repair boot loader (bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd).",
        ],
      },
      {
        clue: 4,
        title: "The Hot CPU",
        response: [
          "Two possible hardware causes:",
          "• Failed/weak CPU cooler (fan not spinning, clogged heatsink, poor airflow)",
          "• Dried/misapplied thermal paste or heatsink not seated",
          "One software fix:",
          "• Update BIOS/UEFI and/or adjust fan curves/power settings; ensure correct chipset/thermal management drivers",
          "Component/feature that can prevent overheating:",
          "• CPU thermal throttling & automatic thermal shutdown (plus proper heatsink/fan and thermal paste)",
          "How to monitor performance:",
          "• BIOS/UEFI Hardware Monitor for temps; Windows Task Manager → Performance for usage; sensor tools like HWMonitor/Open Hardware Monitor for temperatures.",
        ],
      },
      {
        clue: 5,
        title: "The Slow LAN",
        response: [
          "Command to test connectivity:",
          "• ping <destination> (example: ping -n 20 8.8.8.8)",
          "One physical-layer issue that can cause slowness:",
          "• Damaged/mis-terminated twisted pair causing link speed to downshift (1 Gbps → 100/10 Mbps), e.g., broken pair or old cable.",
        ],
      },
      {
        clue: 6,
        title: "The Phantom Display",
        response: [
          "Two possible hardware causes:",
          "• Bad/loose video cable or wrong input selected on the monitor",
          "• GPU not seated/failed (or using wrong output; try iGPU vs discrete)",
          "One isolating test:",
          "• Swap to a known-good cable/monitor or test the monitor on another PC; confirm monitor OSD/self-test works.",
        ],
      },
      {
        clue: 7,
        title: "The Virtual Machine Vanishing Act",
        response: [
          "Two possible hardware causes:",
          "• Storage failure (bad sectors / failing SSD/HDD) where VM files lived",
          "• RAM instability (faulty RAM) causing crashes/corruption that affects VM registry/config",
          "One test to isolate:",
          "• Check disk health (SMART) + run CHKDSK / vendor SSD tools; also review Hypervisor logs and verify datastore free space.",
        ],
      },
      {
        clue: 8,
        title: "The Peripheral Puzzle",
        response: [
          "Tool/setting to reset or reinstall a USB printer driver:",
          "• Windows Printer Troubleshooter (Settings → Bluetooth & devices → Printers & scanners → Run troubleshooter)",
          "Other valid options:",
          "• Remove printer and reinstall; restart Print Spooler; uninstall device/driver in Device Manager then add it back.",
        ],
      },
      {
        clue: 9,
        title: "The Cloud Question (OneDrive)",
        response: [
          "One advantage:",
          "• Anywhere access + version history/restore and easy collaboration",
          "One risk:",
          "• Data exposure via misconfiguration/over-permissioned apps; account compromise or vendor outages can affect availability.",
        ],
      },
      {
        clue: 10,
        title: "The Final Fix (Screenshot)",
        response: [
          "Requirement:",
          "• Include one screenshot of Device Manager or Command Prompt running systeminfo in the Playbook.",
          "Quick how-to:",
          "• Open Device Manager (devmgmt.msc) OR Command Prompt and run systeminfo.",
          "• Press Win+Shift+S → capture → save as PNG.",
          "• Add the image to your Playbook repo and reference it in the Treasure Hunt section.",
        ],
      },
    ],

    summary: [
      "I used A+ Core 1 skills to diagnose power, POST/beep codes, storage boot issues, cooling/throttling, cabling, display, virtualization files, printers/drivers, and cloud trade-offs.",
      "I practiced using built-in tools like WinRE/Bootrec, Task Manager/Performance, Device Manager, and the printer troubleshooter.",
      "The exercise reinforced a structured troubleshoot → verify → document workflow.",
    ],
  };

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toMarkdown() {
    const lines = [];

    lines.push(`# ${data.title}`);
    lines.push("");
    lines.push(`## ASSIGNMENT DETAILS`);
    lines.push("");
    lines.push(`**${data.assignmentDetails.studentName}**`);
    lines.push("");
    lines.push(`**${data.assignmentDetails.course}**`);
    lines.push("");
    lines.push(`**Goal:** ${data.assignmentDetails.goal}`);
    lines.push("");
    lines.push(`**Duration:** ${data.assignmentDetails.duration}`);
    lines.push("");
    lines.push(`**Tools:** ${data.assignmentDetails.tools.join(", ")}`);
    lines.push("");
    lines.push(`## How It Works`);
    lines.push("");
    for (const item of data.assignmentDetails.howItWorks) lines.push(`• ${item}`);
    lines.push("");
    lines.push(`## Clues`);
    lines.push("");
    for (const c of data.clues) {
      lines.push(`### Clue ${c.number} – ${c.title}`);
      lines.push(`**Scenario:** ${c.scenario}`);
      lines.push(`**Prompt:** ${c.prompt}`);
      lines.push("");
    }

    lines.push(`## Deliverable`);
    lines.push("");
    for (const req of data.deliverable.requirements) lines.push(`• ${req}`);
    lines.push("");

    lines.push(`## Grading (Total: ${data.grading.totalPoints})`);
    lines.push("");
    for (const g of data.grading.categories) lines.push(`• ${g.name}: ${g.points}`);
    lines.push("");

    lines.push(`## Optional Bonus (+${data.optionalBonus.points})`);
    lines.push("");
    lines.push(`• ${data.optionalBonus.task}`);
    lines.push("");

    lines.push(`## Treasure Hunt Answers`);
    lines.push("");
    for (const a of data.answers) {
      lines.push(`### Clue ${a.clue} – ${a.title}`);
      lines.push("");
      for (const r of a.response) lines.push(r);
      lines.push("");
    }

    lines.push(`## Summary (2–3 sentences)`);
    lines.push("");
    for (const s of data.summary) lines.push(`• ${s}`);

    return lines.join("\n");
  }

  function toHTML() {
    const md = toMarkdown();
    // Very simple Markdown-ish to HTML conversion for headings + line breaks
    // (keeps it dependency-free)
    const html = md
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("# ")) return `<h1>${escapeHtml(trimmed.slice(2))}</h1>`;
        if (trimmed.startsWith("## ")) return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`;
        if (trimmed.startsWith("### ")) return `<h3>${escapeHtml(trimmed.slice(4))}</h3>`;
        if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
          return `<p><strong>${escapeHtml(trimmed.slice(2, -2))}</strong></p>`;
        }
        if (trimmed === "") return `<br/>`;
        // preserve bullets and plain lines
        return `<p>${escapeHtml(line)}</p>`;
      })
      .join("\n");

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(data.title)}</title>
  <style>
    body { font-family: system-ui, Arial, sans-serif; margin: 24px; line-height: 1.4; }
    h1 { margin-bottom: 8px; }
    h2 { margin-top: 20px; }
    h3 { margin-top: 16px; }
    p { margin: 6px 0; }
  </style>
</head>
<body>
${html}
</body>
</html>`;
  }

  function getData() {
    // return a deep copy so callers can’t mutate the original accidentally
    return JSON.parse(JSON.stringify(data));
  }

  return {
    getData,
    toMarkdown,
    toHTML,
  };
})();

// Node.js CLI output:
if (typeof process !== "undefined" && process?.argv && process?.stdout) {
  // Print markdown to console by default
  console.log(TreasureHunt.toMarkdown());
}

// Browser global:
if (typeof window !== "undefined") {
  window.TreasureHunt = TreasureHunt;
}
