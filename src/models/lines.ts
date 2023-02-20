import {ILine} from "./firestore";
import {IDefaultError} from "./error";

export interface IErrorLinesAction {
    type: string,
    payload: IDefaultError,
}
export interface ISetLinesByKanjiAction {
    type: string,
    payload: {
        origin: string,
        lines: ILine[],
    },
}
export interface IGetLinesByKanjiAction {
    type: string,
    payload: string,
}
export interface ISetNewLineAction {
    type: string,
    payload: {
        id: string,
        origin: string,
    },
}
export interface IUpdateLineAction {
    type: string,
    payload: ILine,
}
export interface ILinesState {
    error: IDefaultError | null,
    loading: boolean,
    lines: {
        [index: string]: ILine[],
    },
}