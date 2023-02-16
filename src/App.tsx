import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>
        <div className="app" id={'root-app'} data-theme={'dark'}>
            <AppRouter />
        </div>
      </BrowserRouter>
  );
}

export default App;
