import React, {FC, PropsWithChildren} from 'react';
import cl from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div  className={cl.layout}>
            layout
            {children}
        </div>
    );
};

export default Layout;