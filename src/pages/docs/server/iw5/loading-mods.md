# Loading mods on a dedicated server

1\. Navigate to your IW5 server folder.

2\. Create a new folder here called `mods`.

3\. Put your mod folder in your new `mods` folder.

4\. Open your server.cfg file, and add/modify the following lines.

```cs
seta sv_wwwBaseURL "" // Configure the URL to FastDL mods from. (i.e. http://domain.tld/iw5)
seta fs_game ""       // What mod are we loading? (i.e. "mods/MyMod")
```

5\. Setup [FastDL](fastdl).
