# Plutonium specific server settings

We have a few dvars that are specific to Plutonium.

## T6

* `sv_allowAimAssist 1` - Allow Aim Assist on gamepads. (Setting this to 0 will lock the option on gamepad controls menu.) This is on by default, turn this off to disable aim assist when on your server.
* `sv_allowDof 1` - Changes whether Depth-of-Field can be enabled or disabled. (Setting this to 0 will force depth of field to be disabled for everyone. Setting this to 1 will allow each user decide)
* `demo_recordPrivateMatch 1` - Record matches as demo files for [playback in theater mode](/docs/client/t6/theater-mode) (1 = Enabled, 0 = Disabled) This is off by default, turn this on to let players record their demo files.

## IW5

* `sv_motd` - Sets a custom motd which is shown on the intel message loadscreen when a player joins. Leave blank for the default intel messages.
* `sv_enableBounces 1` - Enables bouncing on the server.
* `sv_enableDoubleTaps 1` - Allow double tap on weapon switching.
* `sv_wwwBaseURL` - URL for downloading mods from. [Learn more about FastDL for IW5 here](/docs/server/iw5/fastdl).
* `fs_game` - What mod are we loading. [Learn more about FastDL for IW5 here](/docs/server/iw5/fastdl).

## T4

* `g_patchRocketJumps 1` - Enable/disable rocket jumps.