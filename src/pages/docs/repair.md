# How to repair your game files

## Requirements
* [QBittorrent](https://www.fosshub.com/qBittorrent.html)
* Basic knowledge of the windows folder structure
* The .torrent file of the game you want to repair:
  * [For T4](http://dss0.cc/alterwarez/download/pluto_t4_full_game.torrent)
  * [For T6](http://dss0.cc/alterwarez/download/pluto_t6_full_game.torrent)
  * [For IW5 the repair process differs, click here to view the instructions for IW5](#the-repair-process-for-iw5)

## The repair Process for T4 and T6
1\. Open the .torrent file for the game you wish to repair in QBittorrent, if QBittorrent is the only torrent client you have installed simply double clicking the torrent file should open it right away.

2\. You will be prompted with an overview of the files the torrent contains, select your **game folder** (depending on which game you want to repair) as the download location.

3\. Next comes the most important step: **Select "don't create subfolder" from the "content layout" dropdown menu (in older versions of QBitorrent this will be a checkbox called "create subfolder" or "keep top-level folder" which you have to untick)**.

![qbittorrentoverview](https://i.imgur.com/cad1CXU.png)

4\. Hit OK to start the verification/download process, QBittorrent will now check the files in your game folder against the ones in the torrent and download missing or mismatching ones.

5\. As soon as the download reached 100% and the status "seeding" it is complete and can be removed from QBittorrent (right click -> delete).

Congratulations, your game files should now be repaired.

## The repair Process for IW5
<Alert variant="warning">

The officially supported way of installing IW5 is to download the free MW3 Dedicated Server via Steam. The repair guide will cover repairing your game files via Steam, this also works if you own the game on Steam.
Any 3rd party repacks of MW3 are not supported by us.

</Alert>

1\. Open Steam and navigate to your Steam Library.

2\. Locate the MW3 Dedicated Server or MW3 Multiplayer (if you own it) in your Steam library.

3\. Right click the entry in your Steam library and click `Properties`.

![steamlibrary](https://i.imgur.com/7PASWFp.png)

4\. Click `Local Files` and hit `Verify integrity of tool files...` (this will be called `Verify integrity of game files...` if you own the game on Steam).

![steamproperties](https://i.imgur.com/qyfKXnz.png)

5\. Steam will now check your local files and download any missing or outdated ones, as soon as it's done your game files should be repaired.

<Alert variant="warning">

If you don't own the game on Steam and use the MW3 Dedicated Server files to play make sure the language (below `local files` in the properties dialogue) is set to `English`.
Steam provides incomplete files if any language other than `English` is set.

</Alert>
