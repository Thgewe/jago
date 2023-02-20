import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import themeReducer from "./slice/themeSlice";
import authReducer from "./slice/authSlice";
import hideReducer from "./slice/hideSlice";
import listOfKanjiReducer from "./slice/listOfKanjiSlice";
import linesReducer from "./slice/linesSlice";
import syncReducer from "./slice/syncSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        themeReducer,
        authReducer,
        hideReducer,
        listOfKanjiReducer,
        linesReducer,
        syncReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch