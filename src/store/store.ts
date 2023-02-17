import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import themeReducer from "./slice/themeSlice";
import authReducer from "./slice/authSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        themeReducer,
        authReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch