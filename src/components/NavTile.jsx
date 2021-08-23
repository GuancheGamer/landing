import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import InternalLink from './InternalLink';

const NavTile = ({ to, className, title, children, invert = false, background, bgPosition = 'center' }) => (
    <div className="w-58">
        <InternalLink
            href={to}
            className={`transition duration-300 transform-gpu shadow-inner outline-none relative bg-gray-800 bg-cover rounded-xl ring-1 overflow-hidden scale-100 hover:scale-105 shadow w-full p-4 no-underline bg-gradient-to-bl h-full flex flex-col justify-between ${
                className ?? ''
            }`}
        >
            {background && (
                <Image
                    src={background}
                    layout="fill"
                    className="z-0 mix-blend-overlay"
                    objectFit="cover"
                    objectPosition={bgPosition}
                />
            )}
            <div className="z-1 relative">
                <h3 className={classNames('text-xl m-0', { ['text-black']: invert })}>{title}</h3>
                <div className="flex-grow-1" />
                <div className={classNames('text-sm text-gray-100 mt-4', { ['text-gray-900']: invert })}>
                    {children}
                </div>
            </div>
        </InternalLink>
    </div>
);

export default NavTile;
