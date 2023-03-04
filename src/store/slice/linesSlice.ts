import {createSlice} from "@reduxjs/toolkit";
import {
    IErrorLinesAction,
    IGetLinesByKanjiAction,
    ILinesState,
    ISetLinesByKanjiAction, ISetNewLineAction, IUpdateLineAction
} from "../../models/lines";

const initialState: ILinesState = {
    error: null,
    loading: false,
    lines: {},
}

export const linesSlice = createSlice({
    name: 'lines',
    initialState,
    reducers: {
        tryGetLinesByKanji(state: ILinesState, action: IGetLinesByKanjiAction) {
            return {...state, loading: true, error: null}
        },
        setLinesByKanji(state: ILinesState, action: ISetLinesByKanjiAction) {
            return {...state, loading: false, lines: {...state.lines, [action.payload.origin]: action.payload.lines}}
        },
        setNewLine(state: ILinesState, action: ISetNewLineAction) {
            return {
                ...state,
                lines: {
                    ...state.lines,
                    [action.payload.origin]: [
                        ...state.lines[action.payload.origin],
                        {
                            id: action.payload.id,
                            origin: action.payload.origin,
                            word: '',
                            reading: '',
                            translation: '',
                        }
                    ]
                }
            }
        },
        tryUpdateLine(state: ILinesState, action: IUpdateLineAction) {
            return {
                ...state,
                lines: {
                    ...state.lines,
                    [action.payload.origin]: state.lines[action.payload.origin].map((line) =>
                        action.payload.id === line.id ? ({
                            id: action.payload.id,
                            origin: action.payload.origin,
                            word: action.payload.word,
                            reading: action.payload.reading,
                            translation: action.payload.translation,
                        }) : line)
                }
            }
        },
        setErrorLines(state: ILinesState, action: IErrorLinesAction) {
            return {...state, loading: false, error: action.payload}
        }
    }
})

export const {
    tryGetLinesByKanji,
    setLinesByKanji,
    setErrorLines,
    setNewLine,
    tryUpdateLine,
} = linesSlice.actions

export default linesSlice.reducer