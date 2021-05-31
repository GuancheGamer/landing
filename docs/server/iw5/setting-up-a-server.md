# Setting up a server

## Requirements

* A PC/VPS, running either Windows 10 or Windows Server 2019.
* The ability to port forward
* A Plutonium forum account
* Notepad++/Any other code editor
* A Copy of the game installed in `C:\gameserver\IW5`.

![img](https://i.imgur.com/PdotY2c.png)

## 1. Preparation

1. Download the [Plutonium Launcher](https://cdn.plutonium.pw/updater/plutonium.exe), and place it in your server folder.

2. Run `plutonium`, so it can download the required files.

2. Download the [IW5 Config Files](https://cdn.discordapp.com/attachments/699252643595419698/703966412242157949/DedicatedServer.zip)

<!--
Should we move this to github? I know xerxes already has a git, but it isn't updated iirc.. ^CH
-->

3. Save/Extract the configs to `C:\gameserver\IW5`

![img](https://i.imgur.com/ibU6yYV.png)

### 1.2 Creating a server key

1. Open the [Plutonium Server Key page](https://platform.plutonium.pw/serverkeys).

2. Fill in the name of the server and select the correct game.

3. Click on create, then copy the server key.

4. Paste the key into the start bat under `set key=xxxx`, replace `xxxx` with your key.

![img](https://i.imgur.com/z3r3R6j.png)

## 2. Basic server configuration

1\. Edit your `server.cfg` file with whatever changes you want (i.e. RCON Password/Map Rotation/etc/etc).  
2\. Double click the bat file.  
3\. Wait for the server to finish loading.  

![img](https://i.imgur.com/0BaYCo6.png)

## 3. (Optional) Advanced configuration

1\. Make a copy of the base game's `.dsr` file of the gametype you want to modify.  
2\. Open that new dsr file and modify it to your liking.  

:::tip
You can open your game and make a gametype under Private Match, and save it to your disk, and copy it into this folder to more easily understand your settings/choices.
:::

![gif](https://i.imgur.com/rIomHuu.gif)

3\. Modify your map rotation to include your new gametype.

![img](https://i.imgur.com/l6Y1g1B.png)

## 4. (Optional) Install a server management tool (IW4MAdmin)

Verify `g_log "games_mp.log"` is unique (in your server.cfg file)

:::tip
Set `g_log` to your server name for example if you are hosting a TDM and a Search and Destroy server your `g_log`'s might look like this:

`g_log "tdm_server.log"`  
`g_log "sd_server.log"`  
:::

Verify `g_logSync` is set to `1`.  
Verify `logfile` is set to `2`.  
1. Download .NET Core 3.1.x Runtime or newer [[Windows](https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.4-windows-hosting-bundle-installer)]/[[Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1910)].
2. Download [IW4MAdmin](https://github.com/RaidMax/IW4M-Admin/releases).
3. Follow the IW4MAdmin [setup guide](https://github.com/RaidMax/IW4M-Admin/wiki/Getting-Started).


## 5. (Optional) Hosting a second server
Make a copy of the start.bat file and the `server.cfg` file and rename them.  
Edit the `server.cfg` to meet your needs.  
Edit the copy of the bat file to: use your new server key, use a new port, and use your new config file.  
(You must forward the second port as well)  
Start the server through the new .bat file.  

## FAQ

Q: Why can't I find my server hosted at home while others can?  
A: Your router probably doesn't support NAT-Loopback (aka. NAT-Reflection) and that's why it doesn't know how to forward the network traffic. In order to connect it use your internal IP or 127.0.0.1 if its hosted on the same machine.  

Q: Why can't I see my server when I have my game open?  
A: If you start your client first, and your server is running on `27016`, your server will automatically take the port `27017` as your client uses `27016`, so make sure to just change the port if you are going to be running it on the same machine.  


<!---

------------------------
***Changelog:*** (8/16/2020)
-Fixed Updater.bat dir root.  (No need to edit anymore)

***Changelog:*** (4/26/2020)
-Reorganized and remove useless stuff
-Rename Downloader.bat to Updater.bat
-Added mp_rust
-Added bounces and double tap commands.

-->
