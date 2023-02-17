import {IAuthAction} from "../../models/auth";
import {call, put, takeEvery} from "redux-saga/effects";
import {auth} from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import {setAuthError, signIn, signOutAction, trySignIn, trySignOut, trySignUp} from "../slice/authSlice";

function* signInWorker(action: IAuthAction):any {
    try {
        yield call(() =>
            signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        )
        yield put(signIn())
    } catch (e: any) {
        yield put(setAuthError({code: e.code, message: e.message}))
    }
}

function* signUpWorker(action: IAuthAction) {
    try {
        yield call(() =>
            createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        )
        yield put(signIn())
    } catch (e: any) {
        yield put(setAuthError({code: e.code, message: e.message}))
    }
}

function* signOutWorker() {
    try {
        yield signOut(auth)
        yield put(signOutAction())
    } catch(e: any) {
        alert('Что-то пошло не так: ' + e.message)
    }
}

export function* signInWatcher() {
    yield takeEvery(trySignIn.type, signInWorker)
}
export function* signUpWatcher() {
    yield takeEvery(trySignUp.type, signUpWorker)
}
export function* signOutWatcher() {
    yield takeEvery(trySignOut.type, signOutWorker)
}