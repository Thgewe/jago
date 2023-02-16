import {ReactNode} from "react";
import {HOME_ROUTE, SIGHUP_ROUTE, SIGNIN_ROUTE} from "./constants";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";

interface IRouteNested {
    path: string,
    element: ReactNode,
}

interface IRoute {
    path: string,
    name: string,
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
    }
]