# Custom Games / Playing with friends

This guide will teach you how to play with friends over the internet in a custom games match.

## Getting Started

Both you and your friend need to follow each other on the Plutonium Forums:
- Go to [https://forum.plutonium.pw/users](https://forum.plutonium.pw/users) and search for your friend.
- Go to their profile and hit the green "plus" (+) button to follow them.
  - If there is only a heart, that means that you are already following them.

## T4 / T6

Afterwards, the person who wants to host the private match needs to do the following:
- Open the game and open the serverlist (F10 or Home key)
- Go to the network tab and check if UPnP is enabled

**If UPnP is Enabled**:
- You have to actually start it; parties don't work.
- If the match does not start, you can force it to start by executing the command 'xpartygo' in the in-game console
- Your friend should now be able to join by double-clicking your name in the Friends List (between the Server Browser and Network tab)

**If UPnP is Disabled**:
- Go to Windows Settings -> Network & Internet, then hit Properties under your network name.

![img](https://i.imgur.com/PnaSif4.png)

- Set the Network Profile to Private

![img](https://i.imgur.com/hC6G8QN.png)

- Restart the game

**If UPnP is still disabled or you can't connect despite it being enabled:**

- Forward the ports `28960-28961` (UDP) [T4], or ports `4976-4977` (UDP) [T6] - (You may need to google your router's guide on port forwarding, since every router is different, this [Lifewire article](https://www.lifewire.com/how-to-port-forward-4163829) might be helpful.
- Whitelist the ports `28960-28961` (UDP) [T4], or ports `4976-4977` (UDP) [T6] in Windows Firewall, this [Tom's Hardware](https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html) article might be helpful.
- Once those steps are done, open your game and start a private match. **(Parties will not work)**
- If the match does not start, you can force it to start by executing the command 'xpartygo' in the in-game console
- Your friend will now be able to connect by [opening the console](opening-console) and executing

```cs
connect yourip
```

(with `yourip` being the IP address you see in the Network tab or on [WhatsMyIP](https://whatsmyip.com/))

::: tip
If you are starting a zombies game, you can use the console command to start the game once your match gets a minimum amount of players. (So you can all start on round 1 together)

`sp_minplayers` [T4]  
`zombies_minplayers` [T6]  
:::

## IW5

In IW5, there's no easy way of telling if UPnP is enabled, outside of just testing it.

**If UPnP is enabled**, simply start a private match and have your friend join you from Friends > Double clicking your name.

**If UPnP is disabled / is not working:**

- Forward the port `27016` (UDP) - (You may need to google your router's guide on port forwarding, since every router is different, this [Lifewire article](https://www.lifewire.com/how-to-port-forward-4163829) might be helpful.
- Whitelist the port `27016` (UDP) in Windows Firewall, this [Tom's Hardware](https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html) article might be helpful.
- Once those steps are done, open your game and start a private match. **(Parties will not work)**
- If the match does not start, you can force it to start by executing the command 'xpartygo' in the in-game console
- Your friend will now be able to connect by [opening the console](opening-console) and executing

```cs
connect yourip
```

(with `yourip` being the IP address you see in the Network tab or on [WhatsMyIP](https://whatsmyip.com/))

## Additional Notes

If you and some / all of your friends are on the same LAN they connect through the internal IP, if all players are on the same LAN portforwarding is not necessary.

If you want to find your internal IP open a Command Prompt and type `ipconfig`.

![img](https://i.imgur.com/gUXeTOE.png)

Your local IP will be under `IPv4 Address`.