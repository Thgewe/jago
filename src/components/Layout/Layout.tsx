import React, {FC, PropsWithChildren} from 'react';
import cl from './layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div  className={cl.layout}>
            <Header />
            <main className={cl.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;