# Loading/Compiling GSC scripts

## Requirements

[GSC Toolkit](https://drive.google.com/file/d/1j_ocjFCQsFaWqF2-PfdoJt2nF_EpNL_G/view?usp=sharing) (Required to compile your script)

---

__Example Scripts__
- [9 Perks for Zombies](https://forum.plutonium.pw/topic/29/all-perk-slots-unlock-script-zombies)
- [Jugg for joining players](https://forum.plutonium.pw/topic/112/jugger-for-new-players-joining-at-or-after-round-8-zombies)
- ["A cat has 9 lives"](https://forum.plutonium.pw/topic/449/mob-of-the-dead-mod-a-cat-has-9-lives)

---

## Getting Started
1\. Write/Download any GSC of your choice, if you are writing it from scratch/have the source code, note that you must have an `init()` function somewhere, and compile it, which we will talk about in this post.

2\. For this tutorial we are going to be using this GSC as a reference.

```c
init()
{
  level thread onConnect();
}
onConnect()
{
  for (;;)
  {
    level waittill("connected", player);
    player thread connected();
  }
}
connected()
{
  self endon("disconnect");
  for(;;)
  {
    self waittill("spawned_player");
    self iprintlnbold("^2GSC from %LocalAppdata%\\Plutonium\\storage\\t6\\scripts\\mp\\test.gsc ^1(Compiled)");
  }
}
```

3\. Using the GSC Compiler, simply drop your raw GSC script ontop of `Compiler.exe` and it should spit out a compiled version.

![compiling process](https://i.imgur.com/OWtguHd.gif)

3a\. If you get an error, make sure your script isn't already precompiled (open it, and if it looks like gibberish, it is already compiled)  

![Error from Compiler](https://i.imgur.com/JgwqeCy.png)

3b\. Take your compiled script and put it in `%localappdata%\Plutonium\storage\t6\scripts\mp` or `%localappdata%\Plutonium\storage\t6\scripts\zm` depending on which mode it is for. 

**YOU MOST LIKELY WILL NOT HAVE THIS FOLDER, PLEASE CREATE THEM IF THAT IS THE CASE**  

4\. When launching your server or a custom game, you will know if all has gone well or not if the console prints `Custom script 'scripts/mp/yourScriptName' loaded`.

![Success](https://i.imgur.com/oVlCBnI.png)

5\. Enjoy your new GSC script!

![In Game](https://i.imgur.com/bun6iFx.png)