import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import isPathActive from '../utils/isPathActive';

const NavLink = ({ href, as, exact, activeClassName, children, ...props }) => {
    const { asPath } = useRouter();
    const isActive = isPathActive(as || href, asPath, !!exact);

    const child = React.Children.only(children);
    const className = ((child.props.className || '') + ' ' + (isActive ? activeClassName : '')).trim();

    return (
        <Link href={href} as={as} {...props}>
            {React.cloneElement(child, { className })}
        </Link>
    );
};
export default NavLink;
