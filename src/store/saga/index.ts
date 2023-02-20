import {all} from 'redux-saga/effects'
import {signInWatcher, signOutWatcher, signUpWatcher} from "./authSaga";
import {linesWatcher, updateLinesWatcher} from "./linesSaga";
import {listOfKanjiWatcher, setNewKanjiWatcher} from "./listOfKanjiSaga";

export function* rootWatcher() {
    yield all([
        signInWatcher(),
        signOutWatcher(),
        signUpWatcher(),
        linesWatcher(),
        listOfKanjiWatcher(),
        setNewKanjiWatcher(),
        updateLinesWatcher(),
    ])
}