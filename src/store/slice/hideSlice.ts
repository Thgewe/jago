import {createSlice} from "@reduxjs/toolkit";
import {localStorageHideReading, localStorageHideTranslation, localStorageHideWord} from "../../utils/constants";
import {IHideAction, IHideState} from "../../models/hide";

const initialState: IHideState = {
    reading: localStorage.getItem(localStorageHideReading)
        ? localStorage.getItem(localStorageHideReading) === 'true'
        : false,
    translation: localStorage.getItem(localStorageHideTranslation)
        ? localStorage.getItem(localStorageHideTranslation) === 'true'
        : false,
    word: localStorage.getItem(localStorageHideWord)
        ? localStorage.getItem(localStorageHideWord) === 'true'
        : false,
}

export const hideSlice = createSlice({
    name: 'hide',
    initialState,
    reducers: {
        setWord(state: IHideState, action: IHideAction) {
            localStorage.setItem(localStorageHideWord, action.payload.toString())
            return {...state, word: action.payload}
        },
        setReading(state: IHideState, action: IHideAction) {
            localStorage.setItem(localStorageHideReading, action.payload.toString())
            return {...state, reading: action.payload}
        },
        setTranslation(state: IHideState, action: IHideAction) {
            localStorage.setItem(localStorageHideTranslation, action.payload.toString())
            return {...state, translation: action.payload}
        },
    }
})

export default hideSlice.reducer