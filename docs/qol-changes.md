# Quality of Life changes

## All Games
* `cg_fovScale` unlocked
* `com_maxfps` unlocked
* Ultra Wide Monitor Support
* Theater/Demo System for all games
* [Discord Rich Presence](discord-rpc)
* `clanname` dvar, allowing clantags to function
* Controller Support
* `unlockall`
* [Anticheat](cheat-policy)
* UPNP for custom games, which allows friends to join you with minimal effort
* Aim Down Sight Sensitivity
    * We've reworked how `cg_fov` and `cg_fovScale` behave. The normal games work by slowing down your sensitivity when aiming down sights, pretty standard for 2012 but it's hard to adjust back too when playing modern games. Plutonium now bases this on your FOVScale.
	* Examples:
	    * `cg_fov 90 and cg_fovScale 1 = 90 FOV total`. This will result in only your hipfire FOV changing. Sensitivity is different when zooming in because of lower FOV.
		* `cg_fov 40 and cg_fovScale 2.25 = 90 FOV total`. Your Aim Down Sights FOV (allowing you more situational awareness at the cost of less detail down sight) looks the same as hipfire FOV. Sensitivity is now the same when hipfiring and when Aiming Down Sights because the FOV is the same.
		* `cg_fov 70 and cg_fovScale 1.3 = 90 FOV total`. Aiming Down Sights is slightly zoomed in compared to hipfire. Sensitivity is faster than in the vanilla game because of your total FOV.
	* To workout the FOV when using FOVScale, you need to take your cg_fov and multiply it by your FOVScale. For example if you'd like a standard FOV of 80 it would be `cg_fov 65` and `cg_fovScale 1.32`
	* If you don't want to use this system, simply keep your `cg_fovScale` at 1. 
	* You may find you need to experiment with values to find some that you find comfortable.

## IW5:
* `sl_noTrickshot` dvar to hide trickshot servers
* AK-74u
* Intervention
* Rust
* Forum Avatars as in game icon
* Custom card text ![img](https://i.imgur.com/tX5tNqX.png)
* Higher FPS than Steam (Can get 333 on Windows 10 now!)
* Added rocket jump support
* Added GSC Support

## T6:
* IWI images can be loaded from `t6r/data/images`, allowing for custom camos
* `zombies_minplayers`, which allows you to set a minimum amount of players before the game starts
* `sv_allowDof` to allow servers to prevent people using Depth of Field exploits. This will be useful for competitive server hosters who want to ensure DoF exploits cannot be used. Options are 1 to allow DoF and 0 to force DoF off when playing on your server.
* Map rotation for ZM servers
* `g_randomSeed`, which causes the server to set a random seed when calculating bullet spread randomness.
    * When on, if a hacker is using silent aim, it renders their aimbot either useless or highly ineffective at longer distances.
    * It has no effect when Aiming Down Sight but any hacker using that when ADS'ing will be very noticeable for server admins to ban.
    * Although the effect is less harmful to hackers at closer ranges, doing this increases the chances of somebody spotting the hacker far quicker and server admins can ban them from their servers.
* Server side demos
* Added `setClientDvar` function for GSC scripts.
* `sv_sayName` dvar introduced, server owners can use this in their config files to change the `Console:` name to a name of their choice. 
    * IE `Console: IW4MADMIN is now running!` could be changed to ``CLANNAME: IW4MADMIN is now running!`

## T4:
* `sp_minplayers`, which allows you to set a minimum amount of players before the game starts
* Map rotation for ZM servers
* Added rocket jump support
* Unlocked `cg_fov`
* Zombies / Co-Op map / mod downloading - no more making sure you have the map downloaded, just click to join a server and the game will download the required files, just like in Multiplayer.
* Many features from T4M are added, allowing custom maps that require it to run just fine on Plutonium.
* Game controller binds automatically execute when the game starts, saving you having to manually enter the console command.
* Added menu option to allow 16x AA, the default max is 4x.
* Bots can now use GSC `setspawnweapon` and `switchToWeapon` properly.