import {createSlice} from "@reduxjs/toolkit";
import {localStorageAuth} from "../../utils/constants";
import {IAuth, IAuthAction, IAuthErrorAction} from "../../models/auth";

const initialState: IAuth = {
    loading: true,
    authorized: localStorage.getItem(localStorageAuth)
        ? (localStorage.getItem(localStorageAuth) === 'true')
        : false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        trySignIn(state: IAuth, action: IAuthAction) {
            return {...state, loading: true}
        },
        signIn(state: IAuth) {
            localStorage.setItem('user', 'true')
            return {...state, authorized: true, error: null, loading: false}
        },
        trySignUp(state: IAuth, action: IAuthAction) {
            return {...state, loading: true}
        },
        trySignOut() {},
        signOutAction(state: IAuth) {
            localStorage.setItem('user', 'false')
            return {...state, authorized: false, error: null, loading: false}
        },
        setAuthError(state: IAuth, action: IAuthErrorAction) {
            return {...state, authorized: false, error: {...action.payload}, loading: false}
        },
        nullError(state: IAuth) {
            return {...state, error: null}
        }
    }
})

export const { trySignIn, trySignUp, trySignOut, signOutAction, signIn, setAuthError, nullError } = authSlice.actions

export default authSlice.reducer