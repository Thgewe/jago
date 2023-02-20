import {createSlice} from "@reduxjs/toolkit";
import {
    IListOfKanjiState, ISetErrorListOfKanjiAction,
    ISetListOfKanjiAction, ISetNewKanjiAction
} from "../../models/listOfKanji";

const initialState: IListOfKanjiState = {
    error: null,
    loading: false,
    listOfKanji: [],
}

export const listOfKanjiSlice = createSlice({
    name: 'listOfKanji',
    initialState,
    reducers: {
        tryGetListOfKanji(state: IListOfKanjiState) {
            return {...state, loading: true, error: null}
        },
        setListOfKanji(state: IListOfKanjiState, action: ISetListOfKanjiAction) {
            return {...state, listOfKanji: action.payload, loading: false, error: null}
        },
        trySetNewKanjiToFirestore(state: IListOfKanjiState, action: ISetNewKanjiAction) {
            return {...state, listOfKanji: [...state.listOfKanji, action.payload]}
        },
        setErrorListOfKanji(state: IListOfKanjiState, action: ISetErrorListOfKanjiAction) {
            return {...state, loading: false, error: action.payload}
        }
    }
})

export const { tryGetListOfKanji, setListOfKanji, setErrorListOfKanji, trySetNewKanjiToFirestore } = listOfKanjiSlice.actions

export default listOfKanjiSlice.reducer