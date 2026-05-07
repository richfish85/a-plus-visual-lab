# Internet Connections

## What

Internet connections are the paths that link a local network to online services.

This usually means the connection from the device, through the local network gear, to the service provider and then to the public internet.

## Why

Learners need to know where the connection actually starts and stops.

That keeps troubleshooting focused on the real weak point instead of random guesswork.

## How

- A device connects to the local network first.
- A router or gateway is usually the first handoff point to the wider internet.
- DNS helps turn a site name into an IP address.
- If the internet is down, the learner should check the local path first, then the provider side.

Useful framing:

- Local network problems happen before the router can pass traffic out.
- DNS problems can make the internet look broken even when the link is up.
- A working connection still depends on a valid IP address, default gateway, and DNS setup.

Sources:

- Microsoft overview of IP addressing and subnetting basics: [TCP/IP addressing and subnetting](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
- Microsoft DNS overview: [DNS Overview](https://learn.microsoft.com/en-us/windows/win32/dns/dns-overview)
- Cisco DNS explainer for network users: [Understand DNS](https://www.cisco.com/c/en/us/support/docs/security/umbrella/225283-understand-dns.html)

Checklist:

- [x] Write the first original internet-connections page.
- [x] Explain the local-to-internet path in plain language.
- [x] Add authoritative source links.
- [ ] Add a connection-path visual.
- [x] Link the internet-connection practice activity.

Practice

- [Trace Network Path](../../app/index.html#module=topology)
