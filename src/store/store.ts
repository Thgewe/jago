import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import themeReducer from "./slice/themeSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        themeReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch