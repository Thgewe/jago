import React from 'react';
import cl from "./hideFilter.module.scss";
import Checkbox from "../UI/Checkbox/Checkbox";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {hideSlice} from "../../store/slice/hideSlice";

const HideFilter = () => {

    const dispatch = useAppDispatch()
    const hide = useAppSelector(state => state.hideReducer)
    const { setWord, setReading, setTranslation } = hideSlice.actions

    return (
        <div className={cl.filter}>
            <Checkbox
                onChange={(e) => dispatch(setWord(e.currentTarget.checked))}
                id={'word'}
                label={'Слово:'}
                initialState={hide.word}
            />
            <Checkbox
                onChange={(e) => dispatch(setReading(e.currentTarget.checked))}
                id={'reading'}
                label={'Прочтение:'}
                initialState={hide.reading}
            />
            <Checkbox
                onChange={(e) => dispatch(setTranslation(e.currentTarget.checked))}
                id={'translation'}
                label={'Перевод:'}
                initialState={hide.translation}
            />
        </div>
    );
};

export default HideFilter;