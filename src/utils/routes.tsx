import {ReactNode} from "react";
import {DICTIONARY_ID_ROUTE, DICTIONARY_ROUTE, HOME_ROUTE, SIGHUP_ROUTE, SIGNIN_ROUTE} from "./constants";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import DictionaryPage from "../pages/DictionaryPage/DictionaryPage";
import Dictionary from "../components/Dictionary/Dictionary";
import DictionaryBlank from "../components/DictionaryBlank/DictionaryBlank";

interface IRouteNested {
    path?: string,
    element: ReactNode,
    index?: boolean,
}

interface IRoute {
    path: string,
    name: string,
    text?: string,
    element: ReactNode,
    nested?: IRouteNested[],
}

export const publicRoutes:IRoute[] = [
    {
        path: SIGNIN_ROUTE,
        name: 'signin',
        element: <SignInPage />,
    },
    {
        path: SIGHUP_ROUTE,
        name: 'signup',
        element: <SignUpPage />,
    }
]
export const privateRoutes:IRoute[] = [
    {
        path: HOME_ROUTE,
        name: 'home',
        element: <HomePage />,
        text: 'ГЛАВНАЯ',
    },
    {
        path: DICTIONARY_ROUTE,
        name: 'dictionary',
        element: <DictionaryPage />,
        text: 'СЛОВАРЬ',
        nested: [
            {
                index: true,
                element: <DictionaryBlank />
            },
            {
              path: DICTIONARY_ID_ROUTE,
              element: <Dictionary />
            },
        ]
    },
]