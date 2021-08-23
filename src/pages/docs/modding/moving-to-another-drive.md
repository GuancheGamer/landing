# How to move your mods folder to another drive

<Alert variant="info">

These steps are identical for games that use a `mods` folder (IW5/T4). You will just have to change the paths mentioned for your game.

</Alert>

1. Make sure any Plutonium game is closed.
2. Create a folder named `mods` anywhere you want on the drive you want to store mods on. For example: `D:\Plutonium\T4\mods`
3. If you already have mods installed on Plutonium T4, please press `Windows + R`, paste this: `%localappdata%/Plutonium\storage\t4\mods` and press Enter. **MOVE** (not copy) everything from here to your new `mods` folder.

<Alert variant="info">

If you have mods on Steam T4, please move them also. Follow the same process as step 3, but you should move from the folder: `%localappdata%/Activision\CoDWaW\mods`

</Alert>

4. Open a **Command Prompt** as **Administrator**. You can do this by searching for `cmd` in Windows Search, and right clicking `Command Prompt` and pressing `Run as Administrator`

![img](https://i.imgur.com/e9aMqpv.png)

5. Copy this command to your clipboard:

```batch
mklink /J "%localappdata%\Plutonium\storage\t4\mods" "D:\Plutonium\T4\mods"
```

6. If needed, update the paths to your specific locations.
7. Right click inside the command prompt window to paste, then press enter.
8. If everything is working the command prompt should write `Junction created`