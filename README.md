# CompTIA A+ Visual Training Lab

## What

This is a hands-on CompTIA A+ training lab for a learner whose strongest learning modes are visual and kinesthetic.

It is designed for:

- ADHD-friendly study sessions
- Autism-friendly structure and predictability
- physical or simulated troubleshooting
- visual diagrams before long reading
- portfolio evidence that shows practical IT support skills

Current exam target:

- CompTIA A+ Core 1: 220-1201
- CompTIA A+ Core 2: 220-1202

Example:

Instead of only reading about DNS, the learner gets a ticket, checks an IP card, traces a diagram, changes one setting in a VM or router simulator, and documents the result.

## Why

CompTIA A+ asks for practical support skills, not just memorized facts.

The lab uses short, repeatable loops:

1. Look at the visual clue.
2. Touch, inspect, or simulate the system.
3. Make one change.
4. Record what changed.
5. Move the ticket to Done.

This reduces hidden instructions and makes progress visible.

## How

Use the lab in five stations:

| Station | Purpose | Example activity |
| --- | --- | --- |
| Hardware Bench | Identify and service parts | Reseat RAM, label ports, match storage types |
| Network Table | Build small networks | Trace router, switch, client, DNS, gateway |
| OS and VM Station | Practice operating systems | Install OS, create users, repair boot issues |
| Security Station | Apply basic protections | Check MFA, firewall, phishing, permissions |
| Troubleshooting Wall | Manage tickets | Diagnose, fix, document, close |

Checklist:

- [ ] Pick one lab.
- [ ] Open the matching checklist.
- [ ] Start a timer for 25 to 35 minutes.
- [ ] Complete one ticket only.
- [ ] Save one evidence artifact.
- [ ] Stop before fatigue turns into guessing.

## Implementation

Folder map:

```text
a-plus-visual-lab/
  README.md
  portfolio-capture.md
  project-mvps.md
  visual-assets.md
  assets/
    generated/
    sourced/
  cards/
    connector-matching-cards.html
    README.md
  checklists/
    lab-complete.md
    safety.md
    session-start.md
    visual-accommodation.md
  datasets/
    device-inventory.csv
    objective-map.csv
    port-matching.csv
    symptom-map.csv
    tickets.json
    card-deck-manifest.csv
    visual-asset-manifest.csv
  diagrams/
    a-plus-study-map.md
    lab-topology.md
    troubleshooting-flow.md
  labs/
    01-hardware-identification.md
    02-build-a-basic-network.md
    03-os-install-and-repair.md
    04-secure-a-workstation.md
    05-troubleshooting-scenarios.md
```

Recommended equipment:

- one Windows computer
- one spare USB drive
- one Ethernet cable
- one router or router simulator
- one virtual machine tool, such as VirtualBox, VMware Workstation Player, Hyper-V, or another safe lab platform
- optional spare desktop parts
- paper labels or sticky notes
- colored cards for cables, symptoms, and ports

Low-equipment version:

- use diagrams instead of physical hardware
- use screenshots instead of real device access
- use VMs instead of spare computers
- use fake ticket data from `datasets/tickets.json`

Checklist:

- [ ] Decide physical, virtual, or hybrid lab mode.
- [ ] Print or copy the checklists.
- [ ] Pick a visible place for the Troubleshooting Wall.
- [ ] Keep personal devices and private networks separate from experiments.

## Assumptions

- The learner is preparing for CompTIA A+ Core 1 and Core 2.
- The learner benefits from seeing the task before reading long text.
- The learner may need predictable session starts and stops.
- The lab should be safe enough for a home setup.
- The lab should create portfolio artifacts.

Checklist:

- [ ] Keep each session predictable.
- [ ] Use the same lab order when possible.
- [ ] Avoid changing multiple settings at once.
- [ ] Replace long lectures with visible examples.

## Threat/Risk Notes

This lab includes security and system administration practice. Keep it safe.

- Do not use real malware.
- Do not scan networks you do not own or have permission to test.
- Do not change a family, school, or work router without permission.
- Do not share screenshots that contain names, emails, IPs, serial numbers, or passwords.
- Do not open power supplies or work inside powered-on computers.

Example:

For a phishing lesson, use printed sample messages or screenshots. Do not send real phishing emails.

Checklist:

- [ ] Use dummy accounts.
- [ ] Use private lab notes.
- [ ] Remove personal data from screenshots.
- [ ] Keep router changes inside a lab network or simulator.
- [ ] Power off and unplug hardware before opening a case.

## Validation Steps

Use these checks to prove the lab is working.

- Each lab maps to at least one A+ domain.
- Each lab has one clear learner action.
- Each lab creates one artifact.
- Each ticket has a success condition.
- Each session has a stop point.

Example artifact:

```text
Ticket: APLUS-002
Problem: Laptop connects to Wi-Fi but websites do not load.
Action: Checked IP address, DNS, and gateway.
Result: DNS setting was wrong.
Evidence: Screenshot of corrected DNS setting.
Reflection: I learned that connected Wi-Fi does not always mean working internet.
```

Checklist:

- [ ] Complete one ticket.
- [ ] Save evidence.
- [ ] Write one sentence about what changed.
- [ ] Mark the lab complete only after documentation is done.

## Study Order

1. Hardware identification
2. Basic networking
3. OS install and repair
4. Workstation security
5. Full troubleshooting scenarios

Official references to cross-check:

- CompTIA A+ certification page: https://www.comptia.org/en-us/certifications/a//
- CompTIA A+ 220-1201 objectives: https://partners.comptia.org/docs/default-source/resources/comptia-a-220-1201-exam-objectives-%282-0%29.pdf
- CompTIA A+ 220-1202 objectives: https://partners.comptia.org/docs/default-source/resources/comptia-a-220-1202-exam-objectives-%282-0%29.pdf

Checklist:

- [ ] Do not skip hardware vocabulary.
- [ ] Practice networking with diagrams before commands.
- [ ] Use VMs before changing a real system.
- [ ] Treat documentation as part of the fix.
