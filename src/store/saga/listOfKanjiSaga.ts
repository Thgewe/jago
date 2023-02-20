import {call, put, takeEvery} from "redux-saga/effects";
import {Jago} from "../../api/firestore";
import {
    setErrorListOfKanji,
    setListOfKanji,
    tryGetListOfKanji,
    trySetNewKanjiToFirestore
} from "../slice/listOfKanjiSlice";
import {ISetNewKanjiAction} from "../../models/listOfKanji";
import {syncError, syncOff, syncOn} from "../slice/syncSlice";

const jago = Jago

function* listOfKanjiWorker() {
    try {
        const lines: string[] = yield call(() => jago.getListOfKanji())
        yield put(setListOfKanji(lines))
    } catch (e: any) {
        yield put(setErrorListOfKanji({code: e.code, message: e.message}))
    }
}

function* setNewKanjiWorker(action: ISetNewKanjiAction) {
    try {
        yield put(syncOn())
        yield call(() => jago.addNewKanji(action.payload))
        yield put(syncOff())
    } catch (e: any) {
        yield put(syncError({code: e.code, message: e.message}))
    }
}

export function* setNewKanjiWatcher() {
    yield takeEvery(trySetNewKanjiToFirestore.type, setNewKanjiWorker)
}

export function* listOfKanjiWatcher() {
    yield takeEvery(tryGetListOfKanji.type, listOfKanjiWorker)
}
