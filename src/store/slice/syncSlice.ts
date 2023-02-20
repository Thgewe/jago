import {createSlice} from "@reduxjs/toolkit";
import {IDefaultError} from "../../models/error";

interface ISyncErrorAction {
    type: string,
    payload: IDefaultError,
}

interface ISyncState {
    sync: boolean,
    error: null | IDefaultError,
}

const initialState: ISyncState = {
    sync: false,
    error: null,
}

export const syncSlice = createSlice({
    name: 'sync',
    initialState,
    reducers: {
        syncOn(state: ISyncState) {
            return {...state, sync: true, error: null}
        },
        syncOff(state: ISyncState) {
            return {...state, sync: false, error: null}
        },
        syncError(state: ISyncState, action: ISyncErrorAction) {
            return {...state, sync: false, error: action.payload}
        },
    }
})

export const { syncOn, syncOff, syncError } = syncSlice.actions

export default syncSlice.reducer