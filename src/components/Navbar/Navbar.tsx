import React, {FC} from 'react';
import cl from './navbar.module.scss';
import {NavLink} from "react-router-dom";
import {privateRoutes} from "../../utils/routes";

interface INavbarProps {
    vertical?: boolean,
    handler?: () => void
}

const Navbar: FC<INavbarProps> = ({vertical, handler}) => {
    return (
        <nav
            className={cl.nav + (vertical ? ' ' + cl.vertical : '')}
            onClick={(e) => {
                if (!(e.target as HTMLAnchorElement).classList.contains("active")) {
                    handler && handler()
                }
            }}
        >
            {privateRoutes.map((route) =>
                <NavLink key={route.name} to={route.path}>{route.text}</NavLink>
            )}
        </nav>
    );
};

export default Navbar;