import theme from 'tailwindcss/defaultTheme';
import Link from 'next/link';
import StatsPopup from './StatsPopup';

const formatter = new Intl.NumberFormat('en-US');

const mockStats = {
    players: {
        t6mp: 525,
        iw5mp: 99,
        t6zm: 493,
        t4sp: 80,
        t4mp: 9,
    },
    servers: {
        iw5mp: 77,
        t6mp: 148,
        t6zm: 228,
        t4mp: 14,
        t4sp: 15,
    },
    bans: 6952,
};

const Hero = () => (
    <div className="flex flex-col items-center justify-center w-full py-20 lg:py-32 text-center hero px-4">
        <h1 className="text-3xl md:text-7xl font-display">
            <div className="flex-col game-name inline-flex items-end font-bold">
                <span className="bg-clip-text bg-gradient-to-r from-yellow-500 to-game-t6 opacity-0">BO2</span>
                <span className="bg-clip-text bg-gradient-to-r from-green-300 to-game-iw5 opacity-0">MW3</span>
                <span className="bg-clip-text bg-gradient-to-r from-game-t4 to-game-t4-darker opacity-0">WaW</span>
                <span className="bg-clip-text bg-gradient-to-r from-yellow-500 to-game-t6 opacity-0">BO2</span>
            </div>{' '}
            redefined.
        </h1>

        <div className="font-body flex flex-col items-center">
            <p className="text-gray-300 pt-8 text-md md:text-lg">
                Join{' '}
                <strong className="font-bold">
                    {formatter.format(Object.values(mockStats.players).reduce((a, b) => a + b, 0))}
                </strong>{' '}
                players across{' '}
                <strong className="font-bold">
                    {formatter.format(Object.values(mockStats.servers).reduce((a, b) => a + b, 0))}
                </strong>{' '}
                servers <StatsPopup stats={mockStats} /> playing the games you know and love, right now!
            </p>

            <div className="pt-5 text-center flex space-x-4">
                <Link href="/docs/install">
                    <a className="text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                        Download
                    </a>
                </Link>
                <Link href="/docs">
                    <a className="text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                        Documentation
                    </a>
                </Link>
            </div>
        </div>

        <style jsx>{`
            // this code is pretty aids, please look away.
            @keyframes move-up {
                16.666% {
                    transform: translateY(0);
                }
                33.333% {
                    transform: translateY(-100%);
                }
                50% {
                    transform: translateY(-100%);
                }
                66.666% {
                    transform: translateY(-200%);
                }
                83.333% {
                    transform: translateY(-200%);
                }
                100% {
                    transform: translateY(-300%);
                }
            }

            @keyframes game-1 {
                0% {
                    opacity: 1;
                }
                16.666% {
                    opacity: 1;
                }
                33.333% {
                    opacity: 0;
                }
            }

            @keyframes game-2 {
                16.666% {
                    opacity: 0;
                }
                33.333% {
                    opacity: 1;
                }
                50% {
                    opacity: 1;
                }
                66.666% {
                    opacity: 0;
                }
            }

            @keyframes game-3 {
                50% {
                    opacity: 0;
                }
                66.666% {
                    opacity: 1;
                }
                83.333% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            @keyframes game-4 {
                83.333% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            .game-name {
                position: relative;
                top: 4px;
                width: 2.6em;
                max-height: 1.2em;
                animation: move-up 8s infinite;
            }

            @media (min-width: ${theme.screens.md}) {
                .game-name {
                    max-height: 1em;
                    top: 2px;
                }
            }

            .game-name span {
                animation-duration: 8s;
                animation-iteration-count: infinite;
            }

            .game-name span:nth-child(1) {
                animation-name: game-1;
            }

            .game-name span:nth-child(2) {
                animation-name: game-2;
            }

            .game-name span:nth-child(3) {
                animation-name: game-3;
            }

            .game-name span:nth-child(4) {
                animation-name: game-4;
            }

            .game-name span {
                -webkit-text-fill-color: transparent;
                -moz-text-fill-color: transparent;
            }
        `}</style>
    </div>
);

export default Hero;
