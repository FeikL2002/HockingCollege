# A+ Core 1 Online Treasure Hunt (Converted)

# **ASSIGNMENT DETAILS**

**LewisJosephFeik**

**Cisco I-Intro to Networks**

Treasure Hunt Details

**Goal:** Solve 10 interconnected online clues to diagnose and “repair” a failed computer system —

entirely using the web, your A+ resources, and your own knowledge.

**Duration:** Full lab (\~1 hr 45 min)

**Tools:** Browser, Cengage MindTap or TestOut PC Pro, YouTube, your GitHub Playbook

🧭

How It Works

Work solo or in pairs.

Read each clue in order — each tests an A+ Core 1 concept (hardware, networking,

virtualization, troubleshooting).

Research, verify, and record your answers in your Playbook.

When finished, submit your Playbook PDF (Treasure Hunt section) to Blackboard before

the end of lab.

🔹

Clues

## 

## **Clue 1 – The Silent Machine**

The PC won’t power on. You hear no fans, no lights, no beeps.

* Name two possible root causes and the first tool you’d use to test them.

(Hint: Think power supply and motherboard.)

## **Clue 2 – The Beeping BIOS**

You finally hear 3 short beeps on startup.

## **Clue 3 – The Missing Drive**

* What does this usually indicate, and what’s your next troubleshooting step?

BIOS shows “No Boot Device Found.”

## **Clue 4 – The Hot CPU**

* List two possible hardware causes and one software fix.

The PC randomly shuts down under load.

* What component or feature could prevent overheating, and how can you monitor its

performance?

## **Clue 5 – The Slow LAN**

Your workstation connects via Ethernet but speeds are extremely slow.

* What command would you use to test connectivity, and what physical layer issue could cause

this?

## **Clue 6 – The Phantom Display**

A monitor powers on but shows no image.

## **Clue 7 – The Virtual Machine Vanishing Act**

* List two possible hardware causes and one test you can run to isolate the issue.

A user reports their VM disappeared.

## **Clue 8 – The Peripheral Puzzle**

* Explain what file type stores a virtual machine and one possible reason for VM corruption.

A USB printer is detected but won’t print.

## **Clue 9 – The Cloud Question**

* What troubleshooting tool or setting in Windows can be used to reset or reinstall the driver?

A company moves from local storage to OneDrive.

## **Clue 10 – The Final Fix**

* Identify one advantage and one risk of cloud storage for businesses.

You’ve restored the system\!

*\[Extracted from PDF page 3\]*

LewisJosephFeik

Cisco I-Intro to Networks

* Take one screenshot of a working Device Manager or Command Prompt (systeminfo) and

include it in your Playbook section titled “A+ Core 1 Treasure Hunt.”

🔹

## **Deliverable**

Create a section in your GitHub Playbook titled “A+ Core 1 Online Treasure Hunt.”

Include:

All 10 numbered answers

Screenshots or command outputs where relevant

A 2–3 sentence summary of what you learned

Export to PDF and upload it to Blackboard before the end of lab.

🔹

## **Grading (100 Points Total)**

Category  Points

Correct answers (10 × 7 pts)  70

Playbook documentation (organized, labeled,  20

uploaded)

Professionalism & participation  10

🔹

## **Optional Bonus**

Finish early?

Visit PCPartPicker.com and design a system for under $900 that meets the A+ performance

standards for a small business.

Add your build list and link to your Playbook for \+5 bonus points.

*\[Extracted from PDF page 4\]*

# **ANSWERS/SCREENSHOTS**

*\[Extracted from PDF page 5\]*

LewisJosephFeik

Cisco I-Intro to Networks

# **Treasure Hunt Answers**

## **Clue 1 – The Silent Machine**

**Two possible root causes:** 

* Failed power supply (PSU)  
* Failed or shorted motherboard

First tool to test \- PSU tester or multimeter (also try a known‑good outlet/power cable)

## **Clue 2 – The Beeping BIOS**

3 short beeps usually indicate \- RAM/POST memory error (common on AMI BIOS; exact

meaning varies by vendor)

Next step \- Power off, reseat RAM, test one stick at a time, try different slots, and run a memory

diagnostic .

## **Clue 3 – The Missing Drive**

**Two possible hardware causes:** 

* Loose/failed SATA or NVMe drive (or bad data cable/port) \-

Incorrect BIOS/UEFI boot order or disabled storage controller

One software fix \- From WinRE, repair the boot loader (e.g., bootrec /fixmbr, bootrec /fixboot,

bootrec /rebuildbcd).

## **Clue 4 – The Hot CPU**

Component/feature that prevents overheating \- CPU thermal throttling & automatic thermal

shutdown (plus proper heatsink/fan and thermal paste)

How to monitor \- UEFI/BIOS Hardware Monitor for temps; in Windows use Task Manager \>

Performance (usage) and a sensor tool (e.g., HWMonitor/Open Hardware Monitor) for

temperatures.

*\[Extracted from PDF page 6\]*

LewisJosephFeik

Cisco I-Intro to Networks

## **Clue 5 – The Slow LAN**

Command to test connectivity \- ping \<destination\> (e.g., ping \-n 20 8.8.8.8)

**One physical‑layer issue that could cause slowness:** 

* Damaged or mis‑terminated twisted pair

causing the link to downshift from 1 Gbps to 100/10 Mbps (e.g., a broken pair or old cable).

## **Clue 6 – The Phantom Display**

**Two possible hardware causes:** 

* Bad/loose video cable or wrong input source on the monitor \-

GPU not seated/failed (or using the wrong output; try iGPU vs. discrete)

**One isolating test:** 

* Swap with a known‑good cable/monitor or test the monitor on another PC;

verify the monitor’s self‑test/OSD works.

## **Clue 7 – The Virtual Machine Vanishing Act**

What file type stores a VM \- The virtual disk file (e.g., .VHDX for Hyper‑V, .VMDK for

VMware; .VDI for VirtualBox) plus a small VM config file (.vmcx/.vmx).

One reason for corruption \- Power loss or abrupt host shutdown while the VM disk is being

written (also: datastore full, bad sectors).

## **Clue 8 – The Peripheral Puzzle**

Tool/setting to reset or reinstall a USB printer driver \- Windows Printer Troubleshooter

(Settings ▸ Bluetooth & devices ▸ Printers & scanners ▸ Run troubleshooter) \- Or remove the

printer and reinstall; optionally restart the Print Spooler (Services ▸ Print Spooler ▸ Restart)

and/or uninstall the device/driver in Device Manager then add it back.

## **Clue 9 – The Cloud Question (OneDrive)**

One advantage \- Anywhere access \+ version history/restore for files and easy collaboration.

*\[Extracted from PDF page 7\]*

LewisJosephFeik

Cisco I-Intro to Networks

One risk \- Data exposure via misconfiguration or over‑permissioned third‑party apps; account

compromise or vendor outages can also impact availability.

## **Clue 10 – The Final Fix (Screenshot)**

Include one screenshot of Device Manager or a Command Prompt running systeminfo.

Quick how‑to 1\. Open Device Manager (devmgmt.msc) or open Command Prompt and run

systeminfo. 2\. Press Win+Shift+S (Snipping Tool) → select the window → save as PNG. 3\. Add

the image to your Playbook repo (e.g., playbook/treasure-hunt/), reference it in this section.

Paste your screenshot below:Device Manager or systeminfo screenshot

## **Summary (2–3 sentences)**

I used A+ Core 1 skills to diagnose power, POST/beep codes, storage boot

issues, cooling/throttling, cabling, display, virtualization files, printers/drivers, and cloud

*\[Extracted from PDF page 8\]*

LewisJosephFeik

Cisco I-Intro to Networks

trade‑offs. I practiced using built‑in tools like WinRE/Bootrec, Task

Manager/Performance graphs, Device Manager, and the printer troubleshooter. The

exercise reinforced a structured troubleshoot‑verify‑document workflow.