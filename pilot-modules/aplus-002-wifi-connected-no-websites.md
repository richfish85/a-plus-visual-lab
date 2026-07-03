# Wi-Fi Connected
# No Internet

## What Happened?

The user is connected to Wi-Fi, but internet apps do not work.

Symptoms:

- Wi-Fi icon shows connected
- browser times out
- Teams or email may disconnect
- other websites may fail too

Key idea:

Wi-Fi connected only means the laptop joined the wireless network.

It does not prove the laptop can reach the internet.

Network path:

```text
Laptop -> Wi-Fi -> Router -> DNS -> Website
```

## Why Did It Happen?

Possible causes:

- DNS is not working
- default gateway is unreachable
- DHCP gave a bad address
- ISP or upstream connection is down
- captive portal needs sign-in
- device is connected to the wrong SSID
- VPN or security software is blocking traffic

Plain meaning:

The laptop may be on Wi-Fi, but one part of the network path is failing.

## How Do I Diagnose It?

Use safe checks first.

1. Confirm the symptom.

   Open two different websites.

2. Check the network name.

   Confirm the user is on the expected SSID.

3. Check the IP settings.

   ```powershell
   ipconfig /all
   ```

   Look for:

   ```text
   IPv4 Address
   Default Gateway
   DNS Servers
   ```

4. Check the gateway.

   ```powershell
   ping 192.168.1.1
   ```

   Replace `192.168.1.1` with the actual default gateway.

5. Check internet reachability by IP.

   ```powershell
   ping 8.8.8.8
   ```

6. Check DNS.

   ```powershell
   nslookup example.com
   ```

Diagnosis guide:

```text
Gateway fails -> local network or Wi-Fi path issue
8.8.8.8 fails -> internet path issue
nslookup fails but 8.8.8.8 works -> likely DNS issue
Browser redirects to login page -> likely captive portal
```

## How Do I Fix It Safely?

Use low-risk fixes first.

Safe actions:

- reconnect to the correct Wi-Fi network
- forget and rejoin the Wi-Fi network if allowed
- sign in to the captive portal if one appears
- flush the DNS resolver cache
- renew the DHCP lease
- restart the browser
- restart the device if basic checks do not clear it
- escalate if the gateway or ISP path is down

Useful commands:

```powershell
ipconfig /flushdns
ipconfig /release
ipconfig /renew
```

Do not:

- change router settings without permission
- change DNS for the whole network
- reset network equipment used by other people without approval
- record real passwords, Wi-Fi keys, or private user data in the ticket

## How Do I Document It?

Write what you checked, what you found, what you changed, and the result.

Good ticket note:

```text
User reported Wi-Fi connected but websites timing out.
Confirmed device connected to expected SSID.
Confirmed DHCP lease present.
Gateway reachable.
Ping to 8.8.8.8 successful.
DNS lookup failed.
Flushed DNS resolver cache and renewed DHCP lease.
Websites loaded successfully after retest.
No router settings changed.
```

If unresolved:

```text
User connected to expected SSID.
DHCP lease present.
Gateway not reachable.
No router settings changed.
Escalated to network support for gateway or access point check.
```
