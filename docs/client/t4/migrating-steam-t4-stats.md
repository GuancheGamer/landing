# Migrating Steam MP Stats to Plutonium T4

1. Download and extract [Easy Account Manager](https://cdn.discordapp.com/attachments/710609237805498500/827587848823636038/EAM.zip).

2. Open Easy Account.

3. Select `CoD: WaW Multiplayer v1.6`

4. Ensure Steam WAW is open, and press `Easy Transfer`

::: details Spoiler

![Img](https://i.imgur.com/ykDtpPU.png)

:::

5. Close Steam WAW and Easy Account.

6. Open Plutonium T4.

6. Rename `playerstats.txt` *(from your EAM folder)* to `unlockstats` and move that file to `%localappdata%\Plutonium\storage\t4\players\` *(You should delete the original `unlockstats` ***AFTER*** your game is booted up)*

![Img](https://i.imgur.com/MnRqIRN.png)

Note: If you do not see the `.txt` at the end of `playerstats.txt`, enable file extensions in Windows Explorer.

::: details Spoiler

![Windows Explorer Img](https://i.imgur.com/J57gKrs.png)

:::

7. Once the file is in place, re-run `/unlockall` on Plutonium T4.

![Done](https://i.imgur.com/Nx2JKmT.png)

---

**Note:** Your class names will not transfer as they are stored differently, just rename them after you confirmed your classes have transferred.

Also, please note that next time you restart your game the Plutonium Launcher will overwrite your new `unlockstats` file, so do not run unlockall again or you will lose out on your classes and will have to repeat this process.