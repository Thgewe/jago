import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DictionaryLine from "../DictionaryLine/DictionaryLine";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import { ReactComponent as Add } from "../../images/svg/add.svg";
import cl from './dictionary.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setNewLine, tryGetLinesByKanji} from "../../store/slice/linesSlice";
import Loader from "../Loader";
import uniqid from "uniqid";

//TODO: Error handling

const Dictionary = () => {

    const params = useParams()

    const lines = useAppSelector(state => state.linesReducer)
    const listOfKanji = useAppSelector(state => state.listOfKanjiReducer)

    const dispatch = useAppDispatch()

    const getLines = async () => {
        dispatch(tryGetLinesByKanji(params.id || ''))
    }

    useEffect( () => {
        if (!params.id) return
        lines.lines[params.id] || getLines()
    }, [params.id])

    const onAddLine = () => {

        if (!params.id) return

        dispatch(setNewLine({
            id: uniqid(),
            origin: params.id,
        }))
    }

    if (!params.id) return <div>Wrong URL</div>

    if (lines.error) return <div>{lines.error.message}</div>

    return (
        <div className={cl.dictionary}>
            {listOfKanji.loading || listOfKanji.listOfKanji.includes(params.id)
                ? listOfKanji.loading
                    ? <></>
                    : <>
                        <div className={cl.add}>
                            <ButtonIcon Icon={<Add />} clickHandler={onAddLine} title={'Добавить перевод'}/>
                        </div>
                        {lines.loading ? <Loader /> : lines.lines[params.id] && lines.lines[params.id].map((line) =>
                            <DictionaryLine
                                word={line.word}
                                reading={line.reading}
                                translation={line.translation}
                                id={line.id}
                                origin={line.origin}
                            />
                        )}
                    </>
                : <div className={cl.blank}>Такого не существует. Можете создать если хотите</div>
            }
        </div>
    );
};

export default Dictionary;