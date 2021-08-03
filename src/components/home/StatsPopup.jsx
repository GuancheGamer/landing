import { Popover, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import GameIW5Icon from '../icons/game-iw5.svg';
import GameT6Icon from '../icons/game-t6.svg';
import GameT4Icon from '../icons/game-t4.svg';
import ArrowRight from '../icons/arrow-right.svg';
import Link from 'next/link';

const formatter = new Intl.NumberFormat('en-US');

const iconMap = {
    t6: GameT6Icon,
    iw5: GameIW5Icon,
    t4: GameT4Icon,
};

const getGameBGColor = (game) => {
    switch (game) {
        case 'iw5':
            return 'bg-green-200';
        case 't6':
            return 'bg-orange-200';
        case 't4':
            return 'bg-red-200';
    }
};

const getStatsCount = (stats, game) =>
    Object.entries(stats)
        .filter(([key]) => key.startsWith(game))
        .map(([, value]) => value)
        .reduce((a, b) => a + b, 0);

const StatsPopup = ({ stats }) => (
    <Popover className="inline" as="span">
        {({ open }) => (
            <>
                <Popover.Button className="text-gray-400">
                    <InformationCircleIcon className="w-4 h-4" />
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute z-10 w-screen max-w-full md:max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 lg:px-0 text-left">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-gray-800 p-7">
                                {Object.keys(iconMap).map((game) => {
                                    const GameIcon = iconMap[game];
                                    const players = getStatsCount(stats.players, game);
                                    const servers = getStatsCount(stats.servers, game);

                                    return (
                                        <div key={game} className="flex items-center p-2 -m-3">
                                            <div
                                                className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 p-2 rounded-md mr-2 ${getGameBGColor(
                                                    game
                                                )}`}
                                            >
                                                <GameIcon />
                                            </div>
                                            <div className="ml-4 md:ml-6 flex-2">
                                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide font-semibold">
                                                    Players online
                                                </p>
                                                <p className="text-xl md:text-4xl text-monospaced text-gray-200 font-monospaced">
                                                    {formatter.format(players)}
                                                </p>
                                            </div>
                                            <div className="ml-4 md:ml-6 flex-2">
                                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide font-semibold">
                                                    Servers online
                                                </p>
                                                <p className="text-xl md:text-4xl text-monospaced text-gray-200 font-monospaced">
                                                    {formatter.format(servers)}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="p-4 bg-gray-700">
                                <Link href="/stats">
                                    <a className="flow-root px-2 py-2 rounded-md">
                                        <span className="block text-sm text-gray-100 hover:underline">
                                            See full historical stats
                                            <ArrowRight className="h-4 w-4 inline ml-2" />
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        )}
    </Popover>
);

export default StatsPopup;
