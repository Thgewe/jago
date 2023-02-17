import {all} from 'redux-saga/effects'
import {signInWatcher, signOutWatcher, signUpWatcher} from "./authSaga";

export function* rootWatcher() {
    yield all([
        signInWatcher(),
        signOutWatcher(),
        signUpWatcher(),
    ])
}