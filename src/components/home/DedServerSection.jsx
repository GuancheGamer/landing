import Friendlist from '../icons/friendlist.svg';
import DedicatedServer from '../icons/dedicated-server.svg';
import Anticheat from '../icons/anticheat.svg';
import Link from 'next/link';
import ArrowRight from '../icons/arrow-right.svg';

const DedServerSection = () => (
    <div className="px-4 py-16 lg:py-24 bg-black">
        <div className="container mx-auto flex flex-col xl:flex-row items-center">
            <div className="w-full xl:w-auto xl:max-w-2xl">
                <div className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-blue-500 mb-3">
                    Dedicated servers
                </div>
                <h1 className="font-display font-bold text-3xl lg:text-5xl">Play it the way you like.</h1>
                <p className="md:text-xl text-md text-gray-400 leading-relaxed mt-3">
                    All of the games we support include a dedicated server browser.
                    <br />
                    No matter your favorite play style, mode or clan - there’s probably a server for it!
                </p>

                <Link href="/docs/server">
                    <a className="text-blue-500 text-md md:text-lg block mt-4 hover:underline font-semibold">
                        Learn how to host your own server <ArrowRight className="h-4 w-4 inline" />
                    </a>
                </Link>
            </div>

            <div className="flex-1" />

            <div className="grid grid-cols-1 gap-8 lg:gap-2 lg:grid-cols-3 lg:max-w-3xl mx-auto mt-8 text-center mt-12 xl:mt-0 max-w-sm">
                <div className="flex flex-col items-center">
                    <Friendlist />
                    <h2 className="font-display font-bold mt-4">Built-in friend list.</h2>
                    <p className="text-gray-400 mt-2">
                        Get a quick overview of what servers your friends are playing on - and join them!
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <DedicatedServer />
                    <h2 className="font-display font-bold mt-4">Truly dedicated servers.</h2>
                    <p className="text-gray-400 mt-2">
                        Run your own server, on your own hardware. Even for games that previously had no support for it.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <Anticheat />
                    <h2 className="font-display font-bold mt-4">Plutonium Anti-Cheat.</h2>
                    <p className="text-gray-400 mt-2">
                        Our anti-cheat is - to the dismay of many cheaters - really, really good at catching them.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default DedServerSection;
