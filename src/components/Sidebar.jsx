import { sections } from '../const/sidebar';
import NavLink from './NavLink';
import { formatResourcePath } from '../utils/formatResourcePath';
import ChevronUpIcon from '@heroicons/react/solid/ChevronUpIcon';
import { useState } from 'react';
import { useRouter } from 'next/router';
import isPathActive from '../utils/isPathActive';

const Sidebar = () => (
    <div className="inset-0 flex-none h-full w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 xl:pr-8 lg:w-60 xl:w-80 lg:block hidden">
        <div className="h-full sticky overflow-y-auto scrolling-touch lg:w-full lg:h-auto lg:block overflow-hidden lg:top-24">
            <nav className="px-0 pt-6 overflow-y-auto font-medium text-base xl:pr-5 lg:text-sm pb-10 lg:pt-1 lg:pb-14">
                <ul className="space-y-4">
                    {sections.map((section, i) => (
                        <SidebarSection section={section} />
                    ))}
                </ul>
            </nav>
        </div>

        <style jsx>{`
            nav {
                max-height: calc(100vh - 5.5rem);
            }

            nav::-webkit-scrollbar-thumb {
                background-color: rgba(31, 41, 55, 1);
                border-radius: 6px;
            }
            nav::-webkit-scrollbar {
                max-width: 6px;
                max-height: 12px;
            }
        `}</style>
    </div>
);

const SidebarSection = ({ section }) => {
    const { asPath } = useRouter();
    const hasActiveChildren = section.children.some((child) =>
        child.children.some((child) => isPathActive(asPath, `/${formatResourcePath(child.__resourcePath)}`, true))
    );
    const [isOpen, setIsOpen] = useState(hasActiveChildren);
    return (
        <div className={`bg-gray-800 rounded-md bg-opacity-80 ${isOpen ? 'pb-4' : ''}`}>
            <div
                className="flex justify-between px-4 py-4 cursor-pointer"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                <span>{section.title}</span>
                <ChevronUpIcon className={`${isOpen ? 'transform rotate-180' : ''} w-5 h-5 text-gray-400`} />
            </div>
            {isOpen && section.children.map((child, i) => <SidebarSectionChild child={child} index={i} />)}
        </div>
    );
};

const SidebarSectionChild = ({ child, index }) => {
    const { asPath } = useRouter();
    const hasActiveItems = child.children.some((child) =>
        isPathActive(asPath, `/${formatResourcePath(child.__resourcePath)}`, true)
    );
    const [isOpen, setIsOpen] = useState(hasActiveItems);
    return (
        <li className={`${index > 0 ? 'mt-4' : ''} bg-gray-700 mx-2 rounded-lg bg-opacity-30 ${isOpen ? 'pb-4' : ''}`}>
            <div
                className="flex justify-between px-4 py-4 cursor-pointer cursor-pointer items-center"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                <h5 className="uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-200">
                    {child.title}
                </h5>
                <ChevronUpIcon className={`${isOpen ? 'transform rotate-180' : ''} w-5 h-5 text-gray-400`} />
            </div>
            {isOpen && (
                <ul>
                    {child.children.map(({ __resourcePath, title }, childIndex) => (
                        <li key={childIndex}>
                            <NavLink
                                href={`/${formatResourcePath(__resourcePath)}`}
                                activeClassName="child-active"
                                exact
                            >
                                <a className="px-4 mx-2 py-2 transition-colors duration-200 relative block hover:text-gray-100 text-gray-300">
                                    <span
                                        className={`rounded-md absolute inset-0 bg-gray-700 opacity-0 transition duration-200`}
                                    />
                                    <span className="relative">{title}</span>
                                </a>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}

            <style jsx>{`
                .child-active span:first-child {
                    opacity: 1;
                }
            `}</style>
        </li>
    );
};

export default Sidebar;
