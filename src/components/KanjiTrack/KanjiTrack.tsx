import React, {FC, useEffect} from 'react';
import cl from './kanjiTrack.module.scss';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Loader from "../Loader";
import {tryGetListOfKanji} from "../../store/slice/listOfKanjiSlice";


interface IKanjiTrackProps {
    filter: string,
}

//TODO: Error handling

const KanjiTrack: FC<IKanjiTrackProps> = ({filter}) => {

    const listOfKanji = useAppSelector(state => state.listOfKanjiReducer)
    const dispatch = useAppDispatch()

    const wheelHandler = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            e.currentTarget.scrollLeft += 30;
        } else {
            e.currentTarget.scrollLeft -= 30;
        }
    }

    useEffect(() => {
        listOfKanji.listOfKanji.length > 0 || dispatch(tryGetListOfKanji())
    }, [])

    if (listOfKanji.error) return <div>{listOfKanji.error.message}</div>

    return (
        <div className={cl.container} onWheel={wheelHandler}>
            <ul className={cl.track}>
                {listOfKanji.loading
                    ? <div className={cl.loading}><Loader/></div>
                    : listOfKanji.listOfKanji.filter((char) => char.includes(filter)).map((char) =>
                        <li key={char}><NavLink to={char}>{char}</NavLink></li>
                    )
                }
            </ul>
        </div>
    );
};

export default KanjiTrack;