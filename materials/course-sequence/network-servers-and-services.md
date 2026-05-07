# Network Servers And Services

## What

Network servers and services are the shared helpers that make a network useful.

Common examples include DHCP, DNS, file sharing, and other services that users rely on every day without seeing the server itself.

## Why

This topic helps the learner understand that a network is more than cables and addresses.

The network also depends on services that hand out settings, resolve names, and support shared resources.

## How

- DHCP gives clients network settings automatically.
- DNS helps translate names into addresses.
- File and resource sharing let people use shared data or devices on a network.
- A server can host one or many of these jobs.

Useful framing:

- Server = the system providing a service.
- Service = the capability the client needs.
- DHCP and DNS are core support services in many small and large networks.

Sources:

- Microsoft `ipconfig` documentation showing DHCP and DNS refresh behavior: [ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig?view=windows-server-2019)
- Cisco DHCP and DNS service notes: [DHCP and DDNS](https://www.cisco.com/c/en/us/td/docs/security/secure-firewall/management-center/device-config/720/management-center-device-config-72/interfaces-settings-dhcp-ddns.pdf)
- Cisco host services and applications overview: [Implementing Host Services and Applications](https://www.cisco.com/c/en/us/td/docs/routers/asr9000/software/asr9k-r7-6/b-ip-addresses-cg-asr9000-76x/Implementing-host-services-and-applications.pdf)

Checklist:

- [x] Write the first original network-servers page.
- [x] Explain DHCP, DNS, and shared services in plain language.
- [x] Add authoritative source links.
- [ ] Add a services-and-clients visual.
- [x] Link the network-services practice activity.

Practice

- [Trace Network Path](../../app/index.html#module=topology)
