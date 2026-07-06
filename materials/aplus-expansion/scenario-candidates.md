# Scenario Candidates

## What

These are candidate scenarios for future field-manual modules.

Each scenario should eventually answer the five module questions:

1. What happened?
2. Why did it happen?
3. How do I diagnose it?
4. How do I fix it safely?
5. How do I document it?

## Why

This lets the project scale toward complete A+ coverage without adding CRUD or bloating the current app.

## Selection Rule

Promote a scenario when it is:

- realistic for a new technician
- easy to test or simulate
- safe to practice at home or in a lab
- useful as portfolio evidence
- not just a definition page

## Core 1: Mobile Devices

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| MOB-011 | Laptop Not Charging | Laptop runs on battery but will not charge. | Bad charger, bad cable, loose port, battery health issue |
| MOB-012 | Dock Connected, No External Display | Laptop dock works for keyboard but not monitor. | Wrong input, dock firmware, cable fault, display setting |
| MOB-013 | Phone Cannot Sync Work Email | Mail app asks for password or stops syncing. | Account lock, MFA prompt, app profile, network restriction |
| MOB-014 | Bluetooth Headset Pairs But No Audio | Headset connected but sound uses laptop speakers. | Output device selection, stale pairing, headset battery, driver issue |
| MOB-015 | Laptop Touchpad Not Working | User can type but cursor will not move. | Touchpad toggle, driver, external mouse setting, hardware fault |

## Core 1: Networking

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| NET-021 | Wi-Fi Connected / No Internet | Device is on Wi-Fi but websites fail. | DNS, gateway, captive portal, wrong SSID |
| NET-022 | Website Works By IP Only | IP address works but name does not. | DNS server, DNS cache, wrong suffix, resolver outage |
| NET-023 | Cannot Reach Shared Printer | User can browse web but cannot print to network printer. | Printer offline, IP changed, firewall, driver |
| NET-024 | Ethernet Connected But No Network | Cable is plugged in but no network access. | Bad cable, disabled adapter, switch port, DHCP failure |
| NET-025 | VPN Connected But Internal App Fails | VPN says connected but internal site times out. | Split tunnel, DNS, route, account permission |

## Core 1: Hardware

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| HW-014 | No Display | Desktop has power but monitor shows no image. | Monitor power, wrong input, cable, GPU/PC hardware |
| HW-018 | USB Device Not Detected | Keyboard, mouse, or drive is not recognised. | Bad port, bad cable, power, driver, device fault |
| HW-019 | Printer Paper Jam After Clearing | Printer still reports jam. | Hidden paper, sensor, wrong tray, roller issue |
| HW-020 | New SSD Not Seen | Drive installed but not visible in Windows. | Cable, BIOS/UEFI, disk not initialised, drive fault |
| HW-021 | PC Shuts Down Under Load | Device powers off during heavy use. | Heat, PSU, fan fault, dust, overload |

## Core 1: Virtualization And Cloud Computing

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| VC-011 | VM Slow / Low Disk | VM is sluggish and storage warnings appear. | Low VM disk, host disk full, snapshots, startup load |
| VC-012 | VM Has No Network | Guest OS boots but cannot reach network. | NAT/bridged setting, adapter disabled, DHCP, host firewall |
| VC-013 | Snapshot Consumes Disk | Host disk fills after repeated VM snapshots. | Old snapshots, large differencing disks, no cleanup plan |
| VC-014 | Cloud App Sign-In Loop | Web app keeps asking user to sign in. | Cookies, account session, MFA, service issue |
| VC-015 | File Sync Stuck | Cloud sync client shows pending or error. | Storage quota, path length, permissions, network |

## Core 1: Hardware And Network Troubleshooting

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| HNT-011 | Random Wi-Fi Drops | User disconnects several times per day. | Signal, roaming, adapter driver, AP load |
| HNT-012 | Slow Network For One User | One user reports slow access to shared resources. | Wi-Fi signal, DNS, background sync, adapter issue |
| HNT-013 | Projector Shows Wrong Screen | Presentation display is blank or mirrored wrong. | Display mode, input, cable, adapter |
| HNT-014 | Printer Prints Garbled Output | Printer produces symbols or wrong layout. | Driver, language mismatch, corrupt job, app setting |
| HNT-015 | POST Beep Or LED Error | PC will not boot and shows beep/LED pattern. | RAM, GPU, CPU, motherboard, power |

## Core 2: Operating Systems

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| OS-031 | Windows Update Fails | Update downloads but will not install. | Low disk, pending restart, corrupt cache, driver conflict |
| OS-032 | User Cannot Access Folder | User gets access denied on a folder. | Permissions, wrong account, inheritance, ownership |
| OS-033 | VM Slow / Low Disk | Windows VM is slow and low on space. | Storage, startup load, updates, snapshots |
| OS-034 | Startup Apps Slow Boot | Device takes too long to become usable. | Startup apps, services, disk pressure, update tasks |
| OS-035 | Command Works As Admin Only | Standard user cannot run a task. | Permissions, UAC, path, policy |

## Core 2: Security

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| SEC-018 | Suspicious Sign-In Email | User receives urgent sign-in email. | Phishing, compromised sender, real alert |
| SEC-019 | MFA Prompt User Did Not Request | User gets an unexpected approval prompt. | Password compromise, prompt bombing, stale session |
| SEC-020 | USB Drive Found In Office | User asks whether to open unknown USB. | Malware risk, lost property, policy issue |
| SEC-021 | Browser Says Certificate Warning | Website shows privacy/certificate warning. | Wrong date/time, captive portal, bad cert, interception |
| SEC-022 | Malware Pop-Up Scare | User sees fake virus warning in browser. | Scam page, notification abuse, adware, extension |

## Core 2: Software Troubleshooting

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| APP-024 | App Opens / Then Crashes | Application launches then closes or errors. | User profile, install damage, update, low disk |
| APP-025 | Browser Keeps Redirecting | Browser opens strange pages or search engine. | Extension, notification permission, adware, profile setting |
| APP-026 | Email App Not Sending | Messages stay in outbox. | Network, account auth, attachment size, service issue |
| APP-027 | Mobile App Crashes After Update | Phone app crashes after recent update. | App bug, cache, storage, OS compatibility |
| APP-028 | Software Install Blocked | User cannot install an approved app. | Permissions, policy, missing dependency, security block |

## Core 2: Operational Procedures

| ID | Scenario | User Symptom | Likely Causes |
| --- | --- | --- | --- |
| DOC-006 | Ticket Closed / No Notes | Ticket status is closed but result is unclear. | Missing resolution, early closure, jargon |
| OPS-011 | Escalation Missing Key Facts | Tier 2 receives a vague handoff. | Missing symptom, missing scope, no evidence, no user impact |
| OPS-012 | Change Made Without Rollback Plan | Setting was changed and issue got worse. | No baseline, no backup, no approval, no test |
| OPS-013 | User Update Overdue | User asks for status but ticket has no update. | No SLA note, waiting state unclear, owner missing |
| OPS-014 | Screenshot Contains Sensitive Data | Evidence includes names, email, IP, or key material. | Poor redaction, wrong capture area, unclear sharing rules |

## Next Picklist

Best next six candidates for visual modules:

1. OS-031 Windows Update Fails
2. SEC-019 MFA Prompt User Did Not Request
3. NET-024 Ethernet Connected But No Network
4. HW-020 New SSD Not Seen
5. APP-025 Browser Keeps Redirecting
6. OPS-011 Escalation Missing Key Facts
