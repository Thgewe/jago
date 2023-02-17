import React from 'react';
import cl from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <ul className={cl.list}>
                    <li>lorem</li>
                    <li>ipsum</li>
                    <li>dolor</li>
                    <li>sit</li>
                    <li>amet</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;