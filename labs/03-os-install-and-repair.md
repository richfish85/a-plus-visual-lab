# Lab 03: OS Install and Repair

## What

Practice basic operating system setup and repair using a VM.

Focus items:

- installation flow
- user account
- updates
- startup apps
- disk usage
- recovery options

## Why

VMs let the learner practice safely.

Example:

If a Windows VM is slow and low on disk space, the learner can check startup apps and storage without risking a personal computer.

## How

Use ticket `APLUS-003`.

Steps:

1. Start the VM.
2. Take a snapshot if your VM tool supports it.
3. Check disk usage.
4. Check startup apps.
5. Check updates.
6. Choose one safe cleanup or recommendation.
7. Document the result.

Success condition:

```text
I can identify one OS-level cause and one safe repair action.
```

Checklist:

- [ ] VM started.
- [ ] Snapshot or restore point considered.
- [ ] Disk usage checked.
- [ ] Startup apps checked.
- [ ] One action documented.

## Implementation

Materials:

- Windows VM
- optional Linux VM
- `datasets/symptom-map.csv`
- lab completion checklist

Visual activity:

Create a three-column map:

```text
Symptom -> Check -> Result
```

Example:

```text
Slow startup -> Startup apps -> Too many apps enabled
Low disk space -> Storage settings -> Temporary files found
```

Checklist:

- [ ] Use a VM for risky practice.
- [ ] Change one thing at a time.
- [ ] Record before and after.

## Assumptions

- VM setup may differ by machine.
- The learner may use screenshots instead of real settings at first.
- The lab does not require reinstalling an OS on physical hardware.

Checklist:

- [ ] Use virtual practice first.
- [ ] Keep a restore path.

## Threat/Risk Notes

- Do not delete unknown files from a real computer.
- Do not disable security tools for speed.
- Do not practice repairs on a work or school system.

Checklist:

- [ ] Use a VM.
- [ ] Save important data first.
- [ ] Avoid irreversible changes.

## Validation Steps

Evidence to save:

- screenshot of disk usage or startup apps
- ticket note for `APLUS-003`

Validation:

- [ ] The learner can name the symptom.
- [ ] The learner can name the check.
- [ ] The learner can explain whether the result improved.

