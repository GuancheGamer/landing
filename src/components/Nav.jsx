import Logo from './icons/logo.svg';
import SmallLogo from './icons/logo-icon.svg';
import useHasScrolled from '../hooks/useHasScrolled';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavLink from './NavLink';
import ExternalLinkIcon from '@heroicons/react/solid/ExternalLinkIcon';
import { menuItems } from '../const/menu';

const Nav = () => {
    const hasScrolled = useHasScrolled();
    const { pathname } = useRouter();
    const isHome = pathname === '/';
    const isStats = pathname.startsWith('/stats');

    return (
        <>
            <nav
                className={classNames(
                    `bg-gray-900 text-white backdrop-filter backdrop-blur sticky top-0 bg-opacity-30 z-20 transition px-4  border-b transition-colors duration-200`,
                    {
                        scrolled: isHome ? hasScrolled : !hasScrolled,
                        'border-transparent': isHome ? !hasScrolled : true,
                        'border-gray-700': isHome ? hasScrolled : true,
                    }
                )}
            >
                <div
                    className={classNames('flex w-full items-center', {
                        'container mx-auto': !isStats,
                        'px-4': isStats,
                    })}
                >
                    <Link href="/">
                        <a>
                            <Logo className="h-8 w-32 hidden md:inline-block" />
                            <SmallLogo className="h-8 w-8 md:hidden" />
                        </a>
                    </Link>
                    <div className="flex space-x-3 md:space-x-6 text-xs md:text-sm flex-grow justify-end items-center ">
                        {menuItems.map((item) =>
                            item.uri ? (
                                <NavLink
                                    activeClassName="font-bold border-white text-white"
                                    href={item.uri}
                                    key={item.uri}
                                >
                                    <a className="py-4 md:py-5 border-b-4 border-transparent transition-colors duration-200 text-gray-300 hover:text-white">
                                        {item.title}
                                    </a>
                                </NavLink>
                            ) : (
                                <a
                                    className="py-4 md:py-5 border-b-4 border-transparent transition-colors duration-200 text-gray-300 hover:text-white"
                                    href={item.href}
                                    key={item.href}
                                    target="_blank"
                                >
                                    {item.title}

                                    <ExternalLinkIcon className="h-4 w-4 inline ml-1 md:ml-2 text-gray-400 hidden sm:inline" />
                                </a>
                            )
                        )}
                        <Link href="/docs/install">
                            <a className="text-xs md:text-sm bg-gradient-to-r from-game-t4 to-game-t4-darker font-semibold text-black py-2 px-2 md:px-4 rounded-lg hover:text-gray-800 dl-button-anim">
                                Download
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                @keyframes button-bg {
                    0% {
                        background-position: 0 50%;
                    }

                    50% {
                        background-position: 33.333% 50%;
                    }

                    83.333% {
                        background-position: 66.666% 50%;
                    }

                    100% {
                        background-position: 100% 50%;
                    }
                }

                .dl-button-anim {
                    animation: button-bg 8s infinite;
                    background-size: 800% 800%;
                    background-image: linear-gradient(
                        90deg,
                        #f59e0b,
                        #f36b1b,
                        #86efac,
                        #00bf9f,
                        #ef4444,
                        #e11d48,
                        #f59e0b,
                        #f36b1b
                    );
                }
            `}</style>

            <style jsx global>{`
                nav .logo_svg__wordmark {
                    transition: transform 0.25s, opacity 0.25s;
                    transform: translateX(-1rem);
                    opacity: 0;
                }
                nav.scrolled .logo_svg__wordmark,
                nav svg:hover .logo_svg__wordmark {
                    transform: translateX(0);
                    opacity: 1;
                }
            `}</style>
        </>
    );
};

export default Nav;
