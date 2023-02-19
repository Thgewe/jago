import React, {useState} from 'react';
import cl from './selectionalPanel.module.scss';
import CustomInput from "../UI/CustomInput/CustomInput";
import KanjiTrack from "../KanjiTrack/KanjiTrack";
import HideFilter from "../HideFilter/HideFilter";

const SelectionPanel = () => {

    const [value, setValue] = useState<string>('')

    return (
        <section className={cl.panel}>
            <div className={cl.search}>
                <CustomInput value={value} setValue={setValue} type={'text'} placeholder={'Поиск кандзи'}/>
                <HideFilter />
            </div>
            <KanjiTrack filter={value}/>
        </section>
    );
};

export default SelectionPanel;