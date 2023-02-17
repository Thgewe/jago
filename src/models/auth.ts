import {IDefaultError} from "./error";

export interface IAuth {
    loading: boolean,
    error: IDefaultError | null,
    authorized: boolean,
}

export interface IAuthAction {
    type: string,
    payload: {
        email: string,
        password: string,
    }
}
export interface IAuthErrorAction {
    type: string,
    payload: IDefaultError,
}