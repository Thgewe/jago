import React, {FC, useEffect, useRef} from 'react';
import cl from './burgerMenu.module.scss';
import Navbar from "../Navbar/Navbar";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import {ReactComponent as Back} from "../../images/svg/back.svg";

interface IBurgerMenuProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenu: FC<IBurgerMenuProps> = ({open, setOpen}) => {

    const modal = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (open) {
            !modal.current!.open && modal.current!.showModal()
        } else {
            modal.current!.open && modal.current!.close()
        }
    }, [open])

    //On resize, catches the event of the transition that is set when the breakpoint is crossed
    const transitionEndHandler = () => {
        if (window.innerWidth >= 576) {
            setOpen(false)
        }
    }

    return (
        <dialog ref={modal} onTransitionEnd={transitionEndHandler} className={cl.modal}>
            <Navbar vertical={true} handler={() => setOpen(false)}/>
            <div className={cl.bottom} onClick={() => setOpen(false)}>
                <ButtonIcon Icon={<Back />} clickHandler={() => {}} />
            </div>
        </dialog>
    );
};

export default BurgerMenu;