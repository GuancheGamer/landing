# Setting up a server

## Requirements

* Follow every step and word of this guide.
* [Visual C++ Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x86.exe) 
* Windows Notepad or [Notepad++](https://notepad-plus-plus.org/) or [Sublime Text](https://www.sublimetext.com/).
* Port forward your router or Windows Firewall 27016-27017 (**Recommend! Can't skip this!**)
* 20GB of Space. 
* The Modern Warfare 3 Dedicated Server installed thru steam under the tools filter section. (You will have to look for DLC Collection 1-4 later if you want.)
* Folder Options that [show hidden files and folders](https://support.microsoft.com/en-us/help/4028316/windows-view-hidden-files-and-folders-in-windows-10). (Optional but highly recommended. Should of been windows default  )
*  A Brain or some googling (Mostly know your way around Windows Explorer. If you not tech-savvy then this is not for you)
*  Computer (Windows 10/Windows Server 2019 Preferably)  that's online 24/7 can handle 18 players **WIRED** Connection (Don't be that guy that host on WI-FI)

Please follow this step by step. This is not your IW4x or PlutoT6 dedicated server kind of way. It's a little different. You will fuck up if you ignore steps as the way we deliver the files. If you haven't already. You should port forward 27016 on your router. I can't give you a step by step as everyone's routers different brands and home pages. You may also have to DCHP reserved your IP so your computer internal IP won't change and your port will eventually closed up after a router/computer restart.  If you can't access your router. Then I suggest you check out a windows VPS. Either from GalaxyGate (Cheap but CPU performance is meh) or nfoservers.

**Also if you plan on moving the dedicated server to a different location. make sure you edit the bat files to the exact location or you will just get a open and closed command prompt. I get more to it down below this guide.**


## Let's begin our journey


First off Download the [Plutonium Launcher](https://cdn.plutonium.pw/updater/plutonium.exe) and save it in your downloads folder. Also download [DedicatedConfigs.zip](https://cdn.discordapp.com/attachments/699252643595419698/703966412242157949/DedicatedServer.zip) and minimize that zip for later.

Go to your downloads folder and right click and copy plutonium.exe and now navigate to your Local Disk C > Program Files (x86) > Steam > steamapps > common > Call of Duty Modern Warfare 3 folder. 

**WARNING: If your IW5 game files on a different location then you may have to edit the bat files to that new location.**

Now paste the plutonium.exe in your Modern Warfare 3 folder. Now reopen that [DedicatedConfigs.zip](https://cdn.discordapp.com/attachments/318555252431257600/744716060007202903/DedicatedServer.zip) and drag and drop from the contents including the admin folder from zip window to the root of your game folder. You should have 2 new files called Updater.bat and StartServer.bat now.

Run Updater.bat. This bat file will download the following files to your modern warfare 3 folder. Check often as this is the updater to your dedicated servers. Failure to do so will result in unlisted from future updates until you update. (If it just open and closes then you probably didn't paste plutonium.exe on the game folder or in a wrong location. Updater.bat needs that plutonium.exe!

Now navigate to your Admin folder. right click on server.cfg and select open with (in bold). a new window should pop up and you just navigate until you find Notepad and should open right up. Now you can review, give your server a name and make changes to commands and map rotation to your liking. Go to File and Save. Exit out notepad.

Now back out of your admin folder and right click and edit your StartServer file. Visit the [Server Keys Management](http://platform.plutonium.pw/serverkeys) and create yourself a key based off your sv_hostname with colors and all. Hover your mouse over and double click the hash key and right click and copy and paste inside the +set key command line.

Yours should look something like this for example but in 32 characters long
```

@echo off
.\bin\plutonium-bootstrapper-win32.exe iw5mp "C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Modern Warfare 3" +set key "12345keygoeshere6789" +start_map_rotate -dedicated 

```
File and save and close out notepad. Now double click on Updater.bat on your game folder and let download the files needed to run the server. Afterwards you should be ready to launch your dedicated server. To do that. You just simply double click on StartServer.bat

Type in status command to see if you get a empty player list or server not running. If you get a server not running. You fucked up somewhere in the cfg or bat file. But if you get "sending heartbeats" and empty player list on the command window. Your good to go my friend. 

Now right click on StartServer... Send to > Desktop (Create Shortcut)
right click on  Updater...Send to > Desktop (Create Shortcut)

## When a new update comes out...

Close your dedicated server. Double Click on Updater and again let it download the latest files once again. Double click StartServer and you should be on the latest build. That's it! Easy!

## Moving folder locations (Recommend if you move the game on another location)


If you want to move it somewhere else beside Program Files. (like me becasue fuck double clicking bunch of folders.) Just make sure you right click and edit Startserver.bat notepad to the new location. 
For mine example 

StartServer.bat
```
@echo off
.\bin\plutonium-bootstrapper-win32.exe iw5mp "C:\servers\PlutoIW5" +set key "noooooope" +start_map_rotate -dedicated 
```
C:\servers\PlutoIW5 is now my new location.


## Making a additional server(s) (Also Optional)



Go to your admin folder and copy server.cfg  and paste on the same folder.  Now you should have a new file called server - copy.cfg. Rename it to server2.cfg.

Edit your server2.cfg little different then your first server. like change your hostname or switch your rotation around or change dsr. File and save and exit out of notepad. Now on your File Explorer window. back out to the game folder. 

The next step is. We going to do the same thing like we did with server2.cfg but this time on your StartServer.bat file. So copy and paste it. You should have a new file called StartServer - copy.bat. You can rename this to StartServer2 or whatever you want later 

Now right click on your StartServer2 and edit. Now we going have to add some additonal commands and also you would need to make a new key again from [Server Keys Management](http://platform.plutonium.pw/serverkeys) as well. so add +set sv_config "server2.cfg" +set net_port "27017"

Your second bat file should look like this now

```
@echo off
.\bin\plutonium-bootstrapper-win32.exe iw5mp "C:\servers\PlutoIW5" +set key "secondkeyhashgoeshere" +set net_port "27017" +set sv_config "server2.cfg" +start_map_rotate -dedicated
```

Go to file and save and now run StartServer2.bat and you should have 2 servers up. No need to clone the Updater.bat. It's fine as it updates all of them.

If you don't see your second server. You may have to do addition port forwarding once again.

Good Luck!
Thank you for hosting!

------------------------
***Changelog:*** (8/16/2020)
-Fixed Updater.bat dir root.  (No need to edit anymore)

***Changelog:*** (4/26/2020)
-Reorganized and remove useless stuff
-Rename Downloader.bat to Updater.bat
-Added mp_rust
-Added bounces and double tap commands.