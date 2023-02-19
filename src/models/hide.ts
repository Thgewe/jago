export interface IHideState {
    word: boolean,
    reading: boolean,
    translation: boolean,
}

export interface IHideAction {
    type: string,
    payload: boolean,
}