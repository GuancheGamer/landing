# Loading mods and custom maps in private match/solo games

## Loading Mods / Custom Zombies Maps

We support both the vanilla game folder and the Plutonium folder for loading client-side mods & zombies maps.

You can place your mod in either of these places: 
* `%localappdata%\Activision\CoDWaW\mods`    **[BUGGY ATM, MOVE YOUR MODS/MAPS FROM HERE TO THE DIRECTORY BELOW.]**
* `%localappdata%\Plutonium\storage\t4\mods`   \*Recommended\*

**We suggest using the Plutonium folder where possible though, if you crash due to a mod, try moving it to the Plutonium Mods folder instead.**

If you are installing a custom zombies map that comes in an `.exe`, just running it and installing that way should be enough, as they place those in the first folder, although again, you might need to move it if you encounter issues.

If your mod's menu is corrupted then try this [guide by Mr. Android](https://forum.plutonium.pw/topic/9395/mod-menu-corrupted-unreadable-when-loading-mod-on-t4-fix).

**Note:** Mods for multiplayer must have `mp_` at the front of their folder.

![Mods showing up](https://i.imgur.com/Vn95lq9.png)

---

## Loading Custom Maps (MP)

We support both the vanilla game folder and the Plutonium folder for loading client-side custom multiplayer maps.

You can place your mod in either of these places:
* `%localappdata%\Activision\CoDWaW\usermaps`
* `%localappdata%\Plutonium\storage\t4\usermaps`   \*Recommended\*

Once the map is installed, you must load a mod first. You can do something simple like `/fs_game mods/mp_custommaps; vid_restart` followed by `/map mp_yourmapname` and it should load right up.