import React from 'react';
import cl from './dictionaryBlank.module.scss';
import {useAppSelector} from "../../hooks/redux";

const DictionaryBlank = () => {

    const listOfKanji = useAppSelector(state => state.listOfKanjiReducer.listOfKanji)

    return (
        <div className={cl.blank}>
            {listOfKanji.length
                ? 'Выберите нужный вам кандзи'
                : 'Сейчас у вас нет никаких кандзи. Создайте их с помощью кнопки "+" справа'
            }
        </div>
    );
};

export default DictionaryBlank;