# Setting up a server

**Requirements**:
* A PC to host the server, running either Windows 10 or Windows Server 2019.
* An Internet connection (where you can portforward if you are behind a NAT).
* T6 on said server. (You don't need the video & sound folders, the .ipak files nor the SP level files, this can save you a *LOT* of disk space.)
* A Plutonium forum account
* Notepad++
* A brain.

In this tutorial I will assume that you have installed T6 to `C:\gameserver` and the folder for the game is called `t6_pluto`. You are free to change those paths to whatever suits you best.
All paths beginning with `./` use `C:\gameserver\t6_pluto` as their base.

## 1 Preperation

### 1.1 Downloading and installing Plutonium
* Download the [Plutonium Launcher](https://cdn.plutonium.pw/updater/plutonium.exe).
* Place it to `C:\gameserver`
* Download the [T6 Server Configurations](https://github.com/xerxes-at/T6ServerConfigs/archive/master.zip) and place it into your server folder.
* Run !updatePluto.bat and let it download Plutonium

### 1.2 Creating a server key
* Open the [Plutonium Server Key page](https://platform.plutonium.pw/serverkeys)
* Fill in the name of the server and select the correct game.
* Click on create, then copy the server key.
We will later have to paste it into a bat file.

### 1.3 Deleting unneeded files (Optional)
This is ONLY for people that only want to host a server from their T6 install and not to play with it. This guide only shows how to delete files that are not needed by mp or zm. If you wish to save more space by not hosting mp or zm you can delete all left over files with mp or zm in their name.

As you can see we are starting with the worst case: MP, SP and ZM with PlutoT6 and multiple languages through Steam installed.

![Our game folder before we start](https://stats.awog.at/FastDL/pluto_t6/guides/server/00_worst_case.png)


We don't need the `main`, `players`, `sound` or `video` folders. We only need `binkw32.dll`, `localization_mp.txt`, `localization_zm.txt`

![The first files we can delete in order to clean up disk space](https://stats.awog.at/FastDL/pluto_t6/guides/server/01_root_folder.png)



Now we take care of the zone folder, as you can see we have 3 languages installed.
We are going to delete all but the English one, keep the all folder as all languages require it.

![We don't need more than one language, so delete them all but the English one](https://stats.awog.at/FastDL/pluto_t6/guides/server/03_zone_folder.png)



Now navigate to the all folder inside zone. There are plenty of large files that we don't need. All `.ipak` files and all sp files can be deleted safely. Only files with `mp` and `zm` should be left in this folder.

![All files that are not for mp or zm mode are useless to us, so are texture files (.ipak) on dedicated servers](https://stats.awog.at/FastDL/pluto_t6/guides/server/04_all_folder.png)



Now to the english folder inside zone. Here we do the same thing as in the last folder.

![Once again we clean out all textures and files not related to mp or zm](https://stats.awog.at/FastDL/pluto_t6/guides/server/05_english_folder.png)


### 1.4 Enabling transparent compression
This step is useful if you choose to enable game logs as it will save up to a GB per server.
* Open the properties of your ./t6r/data folder
* Click on `Advanced...`
* Check the `Compress contents to save disk space` box
* Press OK
* Press Apply
* Choose `Apply changes to this folder, subfolders and files`
* Press OK




![Pictured guide to enable transparent compression](https://stats.awog.at/FastDL/pluto_t6/guides/server/06_compression.png)






## 2. Basic configuration and the first start



![This is how it should look when you followed the tutorial](https://stats.awog.at/FastDL/pluto_t6/guides/server/07_dedicated.png)




* Open the cfg in Notepad++.
* Edit the file to your liking.

* Open the batch (.bat) files with Notepad++ and paste your server key. Optionally change the other variables on top.



![The bat file(s) should go `C:\gameserver\t6_pluto` ](https://stats.awog.at/FastDL/pluto_t6/guides/server/08_bat.png)

![As you can see I did edit the first 3 variables on top of it](https://stats.awog.at/FastDL/pluto_t6/guides/server/09_bat_notepad.png)




* Double click the bat file.
* Wait for the server to finish loading.




![The bat file did start the dedicated server and did apply the correct port and server cfg, the name is only used in the title of the console window created by the bat.](https://stats.awog.at/FastDL/pluto_t6/guides/server/10_first_start.png)





## 3. (Optional) Advanced configuration

### 3.1 Custom settings (MP only)
* Open the CFG of the game mode you want to edit (eg `tdm.cfg`) in the ./main/gamesettings folder. (If you don't have the main folder then simply create it)
* Uncomment and edit the values of the settings you want to change.
* Save the file.
* Put `exec <game type here>.cfg` in front of the first `map` token in the map rotation.
For example `sv_maprotation "exec tdm.cfg map mp_la map mp_dockside map mp_carrier"`

### 3.2 Enabling the hard core mode (MP only)
* Either copy or open the game mode specific .cfg file for the game mode you wish to play with hard core settings.
* Open tdm.cfg and copy the hard core settings of it to the file from the first step.
* Save the file.
* Put `exec <cfg from step 1>.cfg` in front of the first `map` token in the map rotation.
For example `sv_maprotation "exec hctdm.cfg map mp_la map mp_dockside map mp_carrier"`

### 3.3 Mixed game modes with correct / custom settings (MP only)
* Open the server cfg file with Notepad++
* Put a `exec <game type here>.cfg` (eg. `exec dom.cfg`) in front of a map token.
For example `sv_maprotation "exec dom.cfg map mp_la map mp_dockside exec sas.cfg map mp_carrier"`
  * You can have one exec token in front of multiple map tokens to apply your settings for each following map.
  * You can have a different exec token in front of every single map token to have different settings for each map.

## 4. (Optional) Install a server management tool

For any administration tool you need to enable the game log and to set a **rcon password** in the server config, for your own safety use a **long and safe** (generated) password you will never have to remember this password! And make sure to enable the game log with `g_log`. You should only install **one** of those 2 tools.


![I edited line 95 to 97 and used a very long RCon password.](https://stats.awog.at/FastDL/pluto_t6/guides/server/11_rcon_settings.png)



### 4.1 Adding IW4m-Admin to your server
* Download IW4m-Admin from [RaidMax's website](https://raidmax.org/IW4MAdmin/).
* Follow his [guide on GitHub](https://github.com/RaidMax/IW4M-Admin/wiki/Getting-Started).


## 5. (Optional) Hosting a second server from the same directory

* Make a copy of the bat file and the cfg file and rename them.
* Edit the copy of the bat file to have a different port and to use your second cfg.
 (You must forward the second port as well if you are behind a DNAT!)
* Edit the .cfg file.
* Start the server through the new .bat file.

## FAQ

**Q**: You said we can delete game files to save disk space, is it worth it?
**A**:```In my opinion it is, the files to host MP and ZM servers from the same folder with all maps and modes require roughly 1.7GB instead of 22GB and HIGHLY speeds up loading times as unnecessary files are not loaded.```

**Q**: So which files can we safely delete?
**A**:```You can safely delete the players, redist, sound and video folders. Inside the zone folder you can delete all sp, rts and .ipak files. If you don't want to host MP/ZM you can delete the MP/ZM files too.```

**Q**: Why can't I find my server hosted at home while others can?
**A**:```Your router probably doesn't support NAT-Loopback (aka. NAT-Reflection) and that's why it doesn't know how to forward the network traffic.``` In order to connect it use your **internal IP or 127.0.0.1** if its hosted on the same machine. More information about what NAT-Loopback is and how it works can be found on [Wikipedia](https://en.wikipedia.org/wiki/NAT_loopback).

**Q**: Why does everyone get an time out during a map change?
**A**:```We are not entirely sure but it seems to be related to certain dvars not being set to their default value.``` Only known dvar to cause this atm is `party_maxplayers`.
