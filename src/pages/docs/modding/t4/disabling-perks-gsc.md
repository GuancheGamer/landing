# How to restrict perks/GL via GSC

## Getting Started

1. Create a `main_shared` folder in your server root folder.
![img](https://i.imgur.com/agIlmlx.png)
2. Create `maps/mp/gametypes` folders inside said folder.
![img showing this](https://i.imgur.com/kfrarJg.png)
3. Download the [raw _class.gsc](https://raw.githubusercontent.com/ChxseH/WAW-GSC-Dump/main/maps/mp/gametypes/_class.gsc) file. [You will have to do a `CTRL+S` on this page and change the `Save as type` to `All Files` and remove the `.txt` extension.
![img showing this](https://i.imgur.com/ek5eQaC.png)
4. Move `_class.gsc` into the `gametypes` folder and open it.

---

## Disabling Perks

1. Do a search for `// allowed perks in each slot, for validation.`
2. Find the perk you wish to disable, in my instance `specialty_pistoldeath`.
3. Replace `perkReferenceToIndex[ "specialty_pistoldeath" ];` with `190;`
![img showing](https://i.imgur.com/SNph88t.png)

![img showing](https://i.imgur.com/9IlWhvv.jpg)

---

## Disabling Grenade Launchers

1. Search for `self setWeaponAmmoOverall( secondaryWeapon, self.custom_class[class_num]["inventory_count"] );`
2. Replace `self SetActionSlot( 3, "altMode" );` like 5 lines down with `self SetActionSlot( 3, "" );`.

![img](https://i.imgur.com/DmEhFta.jpg)

---

You should now have said perks/items banned.
