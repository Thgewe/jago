import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useAppSelector} from "./hooks/redux";

function App() {

    const theme = useAppSelector(state => state.themeReducer)

    return (
        <BrowserRouter>
            <div className="app" id={'root-app'} data-theme={theme}>
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
