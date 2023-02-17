import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {auth} from "./firebase";
import {signIn, signOutAction} from "./store/slice/authSlice";
import Loader from "./components/Loader";

function App() {

    const authState = useAppSelector(state => state.authReducer)
    const theme = useAppSelector(state => state.themeReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn())
            } else {
                dispatch(signOutAction())
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="app" id={'root-app'} data-theme={theme}>
                {authState.loading
                    ? <div className="loading">
                        <Loader />
                    </div>
                    : <AppRouter />
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
