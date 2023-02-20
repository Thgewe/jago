import {ILine} from "./firestore";
import {IDefaultError} from "./error";

export interface ISetListOfKanjiAction {
    type: string,
    payload: string[],
}

export interface ISetErrorListOfKanjiAction {
    type: string,
    payload: IDefaultError,
}

export interface ISetNewKanjiAction {
    type: string,
    payload: string,
}

export interface IListOfKanjiState {
    error: IDefaultError | null,
    loading: boolean,
    listOfKanji: string[],
}