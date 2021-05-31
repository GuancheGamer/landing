# Setting up a server

## Requirements

* A PC/VPS, running either Windows 10 or Windows Server 2019.
* The ability to port forward
* A Plutonium forum account
* Notepad++/Any other code editor


In this tutorial, I will assume that you have installed T4 to `C:\gameserver\T4` already.

## 1. Preparation

1. Download the [Plutonium Launcher](https://cdn.plutonium.pw/updater/plutonium.exe)

2. Download the [T4 Config Files](https://github.com/xerxes-at/T4ServerConfigs/archive/refs/heads/main.zip)

4. Save/Extract the configs to `C:\gameserver\T4`

### 1.2 Creating a server key

1. Open the [Plutonium Server Key page](https://platform.plutonium.pw/serverkeys).

2. Fill in the name of the server and select the correct game.

3. Click on create, then copy the server key.

4. Paste the key into the start bat under `set key=xxxx`, replace `xxxx` with your key.

## 2. Basic configuration and the first start

Edit your `server.cfg` file with whatever changes you want (i.e. RCON Password/Map Rotation/Round Limits/etc/etc).

## 3. Advanced (Mods / FastDL)

You can read our guide [here](loading-mods) about loading mods onto a dedicated server.

To setup FastDL, read our guide [here](fastdl).

## Launching the Server

Double click the bat file.

Wait for the server to finish loading.

## 4. (Optional) Slimming down server directory

* You can delete the `video` folder inside `main`.
* You can remove certain files from IWDs (Use 7-Zip to open IWDs)
* You can remove `images` from iw_00.
* You can remove the entire IWD of files iw_01 through iw_13.
* Do NOT touch iw_14.
* You can delete iw_15 through iw_20.
* Do NOT touch iw_21.
* You can remove `images` and `sound` from iw_22.
* You can delete iw_23.
* You can remove `images` from iw_24
* You can delete iw_25.
* You can remove `images` and `sound` from iw_26.
* You can delete iw_27.
* You can remove `images` and `sound` from localized_english_iw00.
* You can delete localized_english_iw01 through localized_english_iw03.
* You can remove `images` and `sound` from localized_english_iw04.
* You can delete localized_english_iw05 and localized_english_iw06.

![Final Image](https://i.imgur.com/Na25CV0.png)

## 5. (Optional) Install a server management tool

Verify `g_log "games_mp.log"` is unique (rename `games_mp` with your server name for example).
Verify `g_logSync` is set to `1`.
Verify `logfile` is set to `2`.
1. Download .NET Core 3.1.x Runtime or newer [[Windows](https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.4-windows-hosting-bundle-installer)]/[[Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1910)].
2. Download [IW4MAdmin](https://github.com/RaidMax/IW4M-Admin/releases).
3. Extract `IW4MAdmin-<version>.zip`.
4. Run `StartIW4MAdmin.cmd`/`StartIW4MAdmin.sh` depending on what OS you have.
5. Configure IW4MAdmin.
6. Go ingame and type `!owner` to claim ownership of your server. [You might want to set a password on your server to make sure nobody else grabs it]
7. Login to the webfront by accessing `http://<machine_ip_here>:1624` and clicking on the key icon. You will need to retrieve your login credentials by typing `!rt` ingame.

### 5.1 Updating IW4MAdmin
1. Download the latest version of [IW4MAdmin](https://github.com/RaidMax/IW4M-Admin/releases).
2. Extract the newer version of IW4MAdmin into the pre-existing IW4MAdmin folder and overwrite existing files.
*Note: Your configuration and database will be saved*

If you have any questions relating to IW4MAdmin, [join their discord](https://discord.gg/ZZFK5p3).
:::

## 6. (Optional) Hosting a second server
Make a copy of the start.bat file and the `server.cfg` file and rename them.
Edit the `server.cfg` to meet your needs.
Edit the copy of the bat file to: use your new server key, use a new port, and use your new config file.
(You must forward the second port as well)
Start the server through the new .bat file.

## FAQ
Q: Why can't I find my server hosted at home while others can?  
A: Your router probably doesn't support NAT-Loopback (aka. NAT-Reflection) and that's why it doesn't know how to forward the network traffic. In order to connect it use your internal IP or 127.0.0.1 if its hosted on the same machine.  
Q: Why can't I see my server when I have my game open?  
A: If you start your client first, and your server is running on `28960`, your server will automatically take the port `28961` as your client uses `28960`, so make sure to just change the port if you are going to be running it on the same machine.  
