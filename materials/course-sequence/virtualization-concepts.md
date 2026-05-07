# Virtualization Concepts

## What

Virtualization means using software to create a computer inside a computer.

That virtual computer is usually called a virtual machine, or VM.

## Why

This matters because A+ learners need to understand what a VM is, why it helps, and why it is not the same as a full physical machine.

It also helps explain labs, testing, and cloud services without requiring a physical server room.

## How

- A host machine provides the real hardware.
- A hypervisor creates and manages the virtual machines.
- Each VM gets its own operating system and virtual hardware view.
- Many VMs can share one physical host while staying isolated from one another.

Useful ideas:

- Type 1 hypervisors run directly on hardware.
- Type 2 hypervisors run on top of an existing operating system.
- A VM can be made to look like standard hardware so it is easier to test software safely.

Sources:

- Microsoft Hyper-V overview: [Hyper-V virtualization in Windows Server and Windows](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-overview)
- Microsoft terminology and VM generations: [Hyper-V Features and Terminology Overview](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/features-terminology)
- Microsoft Hyper-V architecture overview: [Hyper-V architecture](https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/hyper-v-server/architecture)

Checklist:

- [x] Write the first original virtualization page.
- [x] Define host, hypervisor, and VM in simple terms.
- [x] Add authoritative source links.
- [ ] Add a VM versus physical machine visual.
- [x] Link the virtualization flash-card lab.

Practice

- [Review Visual Cards](../../app/index.html#module=flash)
