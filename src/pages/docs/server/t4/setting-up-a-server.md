# Setting up a server

## Requirements

* A PC/VPS, running either Windows 10 or Windows Server 2019.
* The ability to port forward
* A Plutonium forum account
* Notepad++/Any other code editor
* A Copy of the game installed in `C:\gameserver\T4`.

![img](https://i.imgur.com/9gBLKYe.png)

## 1. Preparation

1. Download the [Plutonium Launcher](https://cdn.plutonium.pw/updater/plutonium.exe), and place it in your server folder.

2. Run `plutonium`, so it can download the required files.

2. Download the [T4 Config Files](https://github.com/xerxes-at/T4ServerConfigs/archive/refs/heads/main.zip)

3. Save/Extract the configs to `C:\gameserver\T4`

![img](https://i.imgur.com/rHwzjTo.png)

### 1.2 Creating a server key

1. Open the [Plutonium Server Key page](https://platform.plutonium.pw/serverkeys).

2. Fill in the name of the server and select the correct game.

3. Click on create, then copy the server key.

4. Paste the key into the start bat under `set key=xxxx`, replace `xxxx` with your key.

![img](https://i.imgur.com/CA9Ryjp.png)

## 2. Basic server configuration

1\. Edit your `server.cfg` file with whatever changes you want (i.e. RCON Password/Map Rotation/Round Limits/etc/etc).  
2\. Double click the bat file.  
3\. Wait for the server to finish loading.  

![img](https://i.imgur.com/0BaYCo6.png)

## 3. Advanced server configuration (Mods / FastDL)

You can read our guide [here](loading-mods) about loading mods onto a dedicated server.

To setup FastDL, read our guide [here](fastdl).

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

## 5. (Optional) Install a server management tool (IW4MAdmin)

Verify `g_log "games_mp.log"` is unique (in your server.cfg file)

<Alert variant="tip">

Set `g_log` to your server name for example if you are hosting a TDM and a Search and Destroy server your `g_log`'s might look like this:

`g_log "tdm_server.log"`  
`g_log "sd_server.log"`  

</Alert>

Verify `g_logSync` is set to `1`.  
Verify `logfile` is set to `2`.  

1. Download .NET Core 3.1.x Runtime or newer [[Windows](https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.4-windows-hosting-bundle-installer)]/[[Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1910)].
2. Download [IW4MAdmin](https://github.com/RaidMax/IW4M-Admin/releases).
3. Follow the IW4MAdmin [setup guide](https://github.com/RaidMax/IW4M-Admin/wiki/Getting-Started).

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
