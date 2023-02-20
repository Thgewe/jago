import {call, put, takeEvery} from "redux-saga/effects";
import {Jago} from "../../api/firestore";
import {ILine} from "../../models/firestore";
import {setErrorLines, setLinesByKanji, tryGetLinesByKanji, tryUpdateLine} from "../slice/linesSlice";
import {IGetLinesByKanjiAction, IUpdateLineAction} from "../../models/lines";
import {syncError, syncOff, syncOn} from "../slice/syncSlice";

const jago = Jago

function* linesWorker(action: IGetLinesByKanjiAction) {
    try {
        const lines: ILine[] = yield call(() => jago.getLinesByKanji(action.payload))
        yield put(setLinesByKanji({origin: action.payload, lines: lines}))
    } catch (e: any) {
        yield put(setErrorLines({code: e.code, message: e.message}))
    }
}

function* updateLinesWorker(action: IUpdateLineAction) {
    try {
        yield put(syncOn())
        yield call(() => jago.addLineOrUpdateExisting(action.payload))
        yield put(syncOff())
    } catch (e: any) {
        yield put(syncError({code: e.code, message: e.message}))
    }
}

export function* linesWatcher() {
    yield takeEvery(tryGetLinesByKanji.type, linesWorker)
}
export function* updateLinesWatcher() {
    yield takeEvery(tryUpdateLine.type, updateLinesWorker)
}
