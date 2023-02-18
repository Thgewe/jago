import React, {useState} from 'react';
import cl from './header.module.scss';
import {Link} from "react-router-dom";
import {HOME_ROUTE, themeLight} from "../../utils/constants";
import { ReactComponent as SignOut } from "../../images/svg/logout.svg";
import { ReactComponent as Burger } from "../../images/svg/burger.svg";
import { ReactComponent as Moon } from "../../images/svg/moon.svg";
import { ReactComponent as Sun } from "../../images/svg/sun.svg";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {trySignOut} from "../../store/slice/authSlice";
import Loader from "../Loader";
import {toggleTheme} from "../../store/slice/themeSlice";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {

    const dispatch = useAppDispatch()
    const authLoading = useAppSelector(state => state.authReducer.loading)

    const [burgerState, setBurgerState] = useState<boolean>(false)

    const theme = useAppSelector(state => state.themeReducer)

    const signOutHandler = () => {
        dispatch(trySignOut())
    }

    return (
        <header className={cl.header}>
            <BurgerMenu open={burgerState} setOpen={setBurgerState}/>
            <div className={cl.container}>
                <div className={cl.left}>
                    <ButtonIcon Icon={<Burger />} clickHandler={() => setBurgerState(true)} />
                    <Link
                        className={cl.logo}
                        to={HOME_ROUTE}
                        title={'Домой'}
                        tabIndex={-1}
                    />
                </div>
                <Navbar />
                <div className={cl.right}>
                    <ButtonIcon
                        Icon={theme === themeLight ? <Moon /> : <Sun />}
                        clickHandler={() => dispatch(toggleTheme())}
                    />
                    <ButtonIcon
                        Icon={authLoading ? <Loader /> : <SignOut />}
                        clickHandler={signOutHandler}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;