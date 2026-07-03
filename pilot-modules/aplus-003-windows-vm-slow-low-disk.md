# Windows VM Slow
# Low Disk Space

## What Happened?

A Windows virtual machine starts slowly and shows low disk space.

Symptoms:

- VM takes a long time to boot
- storage bar is red
- apps open slowly
- updates may fail
- user reports poor performance

Key idea:

Slow startup and low disk space can have more than one cause.

Check path:

```text
Startup -> storage -> updates -> apps -> user impact
```

## Why Did It Happen?

Possible causes:

- too many startup apps
- temporary files are using space
- updates are waiting or stuck
- VM disk is too small
- snapshots are using host storage
- malware or unwanted software is present
- host computer does not have enough resources

Plain meaning:

The VM may be slow because Windows, apps, or storage are overloaded.

## How Do I Diagnose It?

Use safe checks first.

1. Confirm the symptom.

   Restart the VM and note whether startup is still slow.

2. Check disk space.

   Open Storage settings.

   Look for low free space.

3. Check startup apps.

   Open Task Manager.

   Review startup impact.

4. Check updates.

   Open Windows Update.

   Look for pending or failed updates.

5. Check recent changes.

   Ask whether new software was installed.

6. If using a VM, check the host.

   Confirm the host has enough free disk space and memory.

Diagnosis guide:

```text
Low free space -> storage issue
Many high-impact startup apps -> startup issue
Pending updates -> update issue
Host storage low -> VM host issue
```

## How Do I Fix It Safely?

Safe actions:

- take a VM snapshot if available
- remove temporary files using Windows Storage settings
- disable unnecessary startup apps
- install pending updates
- restart and retest
- increase VM disk size only if allowed
- escalate if storage or update errors remain

Do not:

- delete unknown system files
- disable security tools for speed
- test repairs on a work or school computer
- make several changes at once

## How Do I Document It?

Good ticket note:

```text
User reported Windows VM slow to start and low on disk space.
Confirmed storage warning in Windows settings.
Checked startup apps and Windows Update.
Temporary files were using significant space.
Removed temporary files through Storage settings.
Restarted VM and confirmed startup improved.
No security tools disabled.
```

If unresolved:

```text
Windows VM slow and low on disk space.
Storage and startup apps checked.
Temporary cleanup did not restore enough free space.
Host disk space may be limiting the VM.
Escalated for VM disk review.
```
