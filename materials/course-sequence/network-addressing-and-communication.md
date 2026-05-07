# Network Addressing And Communication

## What

Network addressing tells devices where they are on the network.

Communication is the set of rules and steps that let devices exchange data using those addresses.

## Why

This is the part of networking that explains why IP addresses, subnet masks, and gateways matter.

It also explains why a device can have a connection but still not reach the destination it needs.

## How

- An IP address identifies a host on a TCP/IP network.
- A subnet mask separates the network part from the host part.
- A default gateway is the path out of the local network.
- DNS resolves names into IP addresses so the communication can begin.

Useful framing:

- IP address = where the device is.
- Subnet mask = what counts as local.
- Default gateway = exit path.
- DNS = name-to-number lookup.

Sources:

- Microsoft explanation of TCP/IP addressing and subnetting: [TCP/IP addressing and subnetting](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
- Microsoft DNS overview: [DNS Overview](https://learn.microsoft.com/en-us/windows/win32/dns/dns-overview)

Checklist:

- [x] Write the first original addressing page.
- [x] Define IP, subnet mask, gateway, and DNS in plain language.
- [x] Add authoritative source links.
- [ ] Add an IP-versus-subnet visual.
- [x] Link the addressing and communication practice activity.

Practice

- [Trace Network Path](../../app/index.html#module=topology)
