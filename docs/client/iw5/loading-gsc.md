# Loading Custom GSC Scripts

## Getting Started

1\. Navigate to the IW5 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\iw5` into it, and hitting `Ok`.

2\. Create a new folder here called `scripts`.

![img](https://i.imgur.com/4KOfafh.png)

3\. Put a new GSC file in here, I will be using the following code as an example.

**Note**: If you are writing your own GSC, you must have an `init()` function somewhere, like I do in this example. 

```
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
    self iprintlnbold("^2GSC from %localappdata%\Plutonium\storage\iw5\scripts\example.gsc");
  }
}
```

4\. Verify your GSC looks like mine, and is in the correct location.

![img](https://i.imgur.com/LSrZkI0.png)

5\. Enjoy your new GSC script!

![success](https://i.imgur.com/X2qZtj5.png)