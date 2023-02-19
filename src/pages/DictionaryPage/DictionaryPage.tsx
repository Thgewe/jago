import React from 'react';
import cl from './dictionaryPage.module.scss';
import {Outlet} from "react-router-dom";
import SelectionPanel from "../../components/SelectionPanel/SelectionPanel";

const DictionaryPage = () => {
    return (
        <div className={cl.page}>
            <SelectionPanel />
            <Outlet />
        </div>
    );
};

export default DictionaryPage;