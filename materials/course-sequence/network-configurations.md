# Network Configurations

## What

Network configuration is the set of settings that lets a device join and use a network.

That usually includes the IP address, subnet mask, default gateway, DNS servers, and sometimes DHCP behavior.

## Why

This is one of the most practical A+ networking topics because a device can be connected and still have the wrong settings.

If the configuration is off, the network may look broken even when the cable or Wi-Fi link is fine.

## How

- Use `ipconfig` or the network settings panel to inspect current values.
- Check whether the address was assigned manually or by DHCP.
- Confirm the default gateway points to the device that connects the local network outward.
- Confirm DNS is set so names can resolve correctly.

Useful framing:

- DHCP usually hands out configuration automatically.
- Static settings are entered by hand.
- `ipconfig /all` shows the core configuration values on Windows.

Sources:

- Microsoft `ipconfig` command reference: [ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig?view=windows-server-2019)
- Microsoft guide to changing the IP address of a network adapter: [How to change the IP address of a network adapter](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/change-ip-address-network-adapter)
- Cisco DHCP and DNS service notes: [DHCP and DDNS](https://www.cisco.com/c/en/us/td/docs/security/secure-firewall/management-center/device-config/720/management-center-device-config-72/interfaces-settings-dhcp-ddns.pdf)

Checklist:

- [x] Write the first original network-configuration page.
- [x] Explain DHCP, static addressing, gateway, and DNS.
- [x] Add authoritative source links.
- [ ] Add a config-values visual.
- [x] Link the configuration-check practice activity.

Practice

- [Trace Network Path](../../app/index.html#module=topology)
