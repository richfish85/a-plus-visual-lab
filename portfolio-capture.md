# Portfolio Capture Guide

## What

This guide turns lab work into portfolio evidence.

Portfolio evidence means proof that you can diagnose, fix, and explain real IT support problems.

Example:

A ticket screenshot, a network diagram, and a short repair note can become a practical project entry.

## Why

A finished lab is useful for study.

A documented lab is useful for interviews, resumes, and project pages.

The goal is to show:

- clear thinking
- safe troubleshooting
- basic technical accuracy
- calm documentation
- steady improvement over time

Checklist:

- [ ] Capture the problem.
- [ ] Capture the diagnosis.
- [ ] Capture the fix.
- [ ] Capture the result.
- [ ] Remove private data.

## How

Use this evidence format:

```text
Project title:
CompTIA A+ Visual Troubleshooting Lab

Scenario:
Short description of the ticket.

Tools:
VM, Windows settings, router simulator, diagrams, checklists.

My action:
What I checked and changed.

Result:
What worked after the fix.

What I learned:
One practical lesson.
```

Portfolio entry example:

```text
Scenario:
A simulated user reported that Wi-Fi was connected but websites would not load.

My action:
I checked the IP address, gateway, and DNS settings. The system had an incorrect DNS server.

Result:
After correcting DNS, the browser loaded a test page.

What I learned:
Network connectivity has layers. A device can connect to Wi-Fi but still fail because name resolution is broken.
```

Checklist:

- [ ] Export the in-app evidence summary.
- [ ] Use plain language.
- [ ] Include one diagram or screenshot.
- [ ] Include one ticket ID.
- [ ] Include one clear result.
- [ ] Keep the entry short.

## Implementation

Create one folder per finished lab:

```text
portfolio-evidence/
  lab-01-hardware/
    ticket-note.md
    photo-or-screenshot.png
    reflection.md
  lab-02-networking/
    ticket-note.md
    topology.png
    reflection.md
```

The app can also create a quick evidence summary:

```text
app/index.html -> Evidence -> Refresh Summary
```

Current sample:

```text
portfolio-evidence/sample-networking-ticket/
```

Checklist:

- [ ] Name files clearly.
- [ ] Store only safe screenshots.
- [ ] Keep original lab notes with the matching ticket.
- [x] First safe sample evidence pack exists.

## Assumptions

- The portfolio audience is a recruiter, hiring manager, or IT lead.
- They may not read long explanations.
- They care about practical support behavior.

Checklist:

- [ ] Lead with the result.
- [ ] Avoid inflated claims.
- [ ] Show the troubleshooting path.

## Threat/Risk Notes

Do not expose private information.

Risky screenshot content:

- usernames
- emails
- serial numbers
- public IP addresses
- Wi-Fi names
- license keys
- password hints

Checklist:

- [ ] Blur or crop private details.
- [ ] Use dummy data where possible.
- [ ] Do not publish real customer-style data.

## Validation Steps

Before publishing a portfolio entry:

- [ ] Can someone understand the problem in 15 seconds?
- [ ] Is the fix visible?
- [ ] Is the result measurable?
- [ ] Is private data removed?
- [ ] Does it sound like a learner practicing safely?
