import { frontMatter as customGames } from '../pages/docs/custom-games.md';
import { frontMatter as controllers } from '../pages/docs/controllers.md';
import { frontMatter as openingConsole } from '../pages/docs/opening-console.md';
import { frontMatter as repair } from '../pages/docs/repair.md';
import { frontMatter as gameFiles } from '../pages/docs/game-files.md';
import { frontMatter as lowFps } from '../pages/docs/low-fps.md';
import { frontMatter as support } from '../pages/docs/support.md';

export const sections = [
    {
        title: 'Plutonium Project',
        children: [
            {
                title: 'Forum',
                url: 'https://forum.plutonium.pw/',
            },
            {
                title: 'Discord',
                url: 'https://discord.gg/plutonium',
            },
            {
                title: 'Server Keys',
                url: 'https://platform.plutonium.pw/serverkeys/',
            },
            {
                title: 'Donate',
                url: 'https://forum.plutonium.pw/donate',
            },
        ],
    },
    {
        title: 'Support',
        children: [customGames, controllers, openingConsole, repair, gameFiles, lowFps, support],
    },
    {
        title: 'Top Forum Categories',
        children: [
            {
                title: 'MW3 client support',
                url: 'https://forum.plutonium.pw/category/15/mw3-client-support',
            },
            {
                title: 'MW3 mods',
                url: 'https://forum.plutonium.pw/category/27/mw3-modding-releases-resources',
            },
            {
                title: 'BO2 client support',
                url: 'https://forum.plutonium.pw/category/9/bo2-client-support',
            },
            {
                title: 'BO2 mods',
                url: 'https://forum.plutonium.pw/category/23/bo2-modding-releases-resources',
            },
            {
                title: 'WaW client support',
                url: 'https://forum.plutonium.pw/category/37/waw-client-support',
            },
            {
                title: 'WaW mods',
                url: 'https://forum.plutonium.pw/category/40/waw-modding-releases-resources',
            },

            {
                title: 'Plutonium Launcher Support',
                url: 'https://forum.plutonium.pw/category/34/plutonium-launcher-support',
            },
        ],
    },
];
