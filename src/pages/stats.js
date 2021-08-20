import Head from 'next/head';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ClockIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

const options = [
    {
        name: 'last week',
        value: 'now-7d',
    },
    {
        name: 'last 48 hours',
        value: 'now-2d',
    },
    {
        value: 'now-1d',
        name: 'last 24 hours',
    },
    {
        name: 'last 12 hours',
        value: 'now-12h',
    },
];

const GRAFANA_BASE_URL = 'https://grafana.erebus.group';

const Stats = () => {
    const [selected, setSelected] = useState(options[1]);

    return (
        <>
            <Head>
                <title>Stats - Plutonium Project</title>
            </Head>

            <div className="px-4 xl:px-8 pt-8 pb-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="font-display font-bold text-5xl">Stats</h1>
                    <PeriodSelector selected={selected} setSelected={setSelected} />
                </div>

                <div className="grid grid-cols-2 block hidden md:grid gap-4">
                    <div>
                        <h2 className="font-display font-bold text-3xl text-gray-300 mb-2">Players</h2>
                    </div>
                    <div>
                        <h2 className="font-display font-bold text-3xl text-gray-300 mb-2">Servers</h2>
                    </div>
                </div>
            </div>

            <iframe
                src={`${GRAFANA_BASE_URL}/d/wBaoofZ7z/players-and-servers?orgId=1&theme=dark&panelId=4&from=${selected.value}&to=now&kiosk`}
                width="100%"
                height="1050"
                frameBorder="0"
                className="px-1 mb-4"
            />
        </>
    );
};

const PeriodSelector = ({ selected, setSelected }) => (
    <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
            <Listbox.Button className="relative w-48 py-2 pl-3 pr-10 text-left bg-gray-700 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">
                    <ClockIcon className="w-6 h-6 text-gray-400 inline mr-2" />
                    {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-800 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((option, personIdx) => (
                        <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-100'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                            }
                            value={option}
                        >
                            {({ selected, active }) => (
                                <>
                                    <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                        {option.name}
                                    </span>
                                    {selected ? (
                                        <span
                                            className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                        >
                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </div>
    </Listbox>
);

export default Stats;
