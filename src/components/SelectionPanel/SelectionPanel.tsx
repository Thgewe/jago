import React, {useRef, useState} from 'react';
import cl from './selectionalPanel.module.scss';
import CustomInput from "../UI/CustomInput/CustomInput";
import KanjiTrack from "../KanjiTrack/KanjiTrack";
import HideFilter from "../HideFilter/HideFilter";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import { ReactComponent as Add } from "../../images/svg/add.svg";
import { ReactComponent as Cancel } from "../../images/svg/cancel.svg";
import {useAppDispatch} from "../../hooks/redux";
import {trySetNewKanjiToFirestore} from "../../store/slice/listOfKanjiSlice";

const SelectionPanel = () => {

    const [value, setValue] = useState<string>('')
    const [newKanji, setNewKanji] = useState<string>('')

    const modal = useRef<HTMLDialogElement>(null)

    const dispatch = useAppDispatch()

    const addClick = () => {
        modal.current && modal.current.showModal()
    }
    const addSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        modal.current && modal.current.close()
        dispatch(trySetNewKanjiToFirestore(newKanji))
        setNewKanji('')
    }
    const cancel = (e: React.MouseEvent) => {
        e.preventDefault()
        modal.current && modal.current.close()
        setNewKanji('')
    }

    return (
        <section className={cl.panel}>
            <div className={cl.search}>
                <CustomInput value={value} setValue={setValue} type={'text'} placeholder={'Поиск кандзи'}/>
                <HideFilter />
            </div>
            <div className={cl.list}>
                <KanjiTrack filter={value}/>
                <ButtonIcon Icon={<Add />} clickHandler={addClick} title={'Добавить кандзи'}/>
            </div>
            <dialog ref={modal} className={cl.modal}>
                <form onSubmit={addSubmit}>
                    <CustomInput value={newKanji} setValue={setNewKanji} type={'text'} placeholder={'Введите кандзи'}/>
                    <ButtonIcon Icon={<Add />} clickHandler={addSubmit} title={'Добавить'}/>
                    <ButtonIcon Icon={<Cancel />} clickHandler={cancel} title={'Отмена'}/>
                </form>
            </dialog>
        </section>
    );
};

export default SelectionPanel;