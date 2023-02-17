import React from 'react';
import cl from './header.module.scss';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/constants";
import { ReactComponent as SignOut} from "../../images/svg/logout.svg";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {trySignOut} from "../../store/slice/authSlice";
import Loader from "../Loader";

const Header = () => {

    const dispatch = useAppDispatch()
    const authLoading = useAppSelector(state => state.authReducer.loading)

    const signOutHandler = () => {
        dispatch(trySignOut())
    }

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <Link
                    className={cl.logo}
                    to={HOME_ROUTE}
                    title={'Домой'}
                    tabIndex={-1}
                />
                <ButtonIcon
                    Icon={authLoading ? <Loader /> : <SignOut />}
                    clickHandler={signOutHandler}
                />
            </div>
        </header>
    );
};

export default Header;