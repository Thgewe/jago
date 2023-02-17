import {createSlice} from "@reduxjs/toolkit";
import {localStorageTheme, themeDark, themeLight} from "../../utils/constants";

const initialState: string = localStorage.getItem(localStorageTheme)
    ? localStorage.getItem(localStorageTheme)!
    : window.matchMedia('prefers-color-scheme: light').matches
        ? themeLight
        : themeDark

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            return state === themeLight
                ? themeDark
                : themeLight
        }
    }
})

export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer