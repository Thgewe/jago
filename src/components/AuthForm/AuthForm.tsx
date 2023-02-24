import React, {FC, FormEvent, useState} from 'react';
import cl from './authForm.module.scss'
import {Link} from "react-router-dom";
import {SIGHUP_ROUTE, SIGNIN_ROUTE} from "../../utils/constants";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {trySignUp, trySignIn, nullError} from "../../store/slice/authSlice";
import Loader from "../Loader";

interface IAuthFormProps {
    isSignIn: boolean,
}

const AuthForm: FC<IAuthFormProps>= ({isSignIn}) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {loading, error} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const changeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        error && dispatch(nullError())
        setState(e.target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(nullError())
        isSignIn
            ? dispatch(trySignIn({email, password}))
            : dispatch(trySignUp({email, password}))
    }

    return (
        <section className={cl.auth} data-loading={loading}>
            <h1>{isSignIn ? 'Вход' : 'Регистрация' }</h1>
            <form className={cl.form} onSubmit={onSubmit}>
                <p>{error && error.code}</p>
                <input
                    type="text"
                    placeholder={'Почта'}
                    value={email}
                    onChange={(e) => changeHandler(e, setEmail)}
                    tabIndex={loading ? -1 : 0}
                />
                <input
                    type="password"
                    placeholder={'Пароль'}
                    value={password}
                    onChange={(e) => changeHandler(e, setPassword)}
                    tabIndex={loading ? -1 : 0}
                />
                {isSignIn
                    ? <div className={cl.controls}>
                        <Link to={SIGHUP_ROUTE} tabIndex={loading ? -1 : 0}>Регистрация</Link>
                        <button type={'submit'} tabIndex={loading ? -1 : 0}>Войти</button>
                    </div>
                    : <div className={cl.controls}>
                        <Link to={SIGNIN_ROUTE} tabIndex={loading ? -1 : 0}>Войти</Link>
                        <button type={'submit'} tabIndex={loading ? -1 : 0}>Регистрация</button>
                    </div>
                }
            </form>
            <div className={cl.loading}>
                <Loader />
            </div>
        </section>
    );
};

export default AuthForm;