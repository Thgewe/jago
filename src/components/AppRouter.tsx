import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../utils/routes";
import {HOME_ROUTE, SIGNIN_ROUTE} from "../utils/constants";
import Layout from "./Layout/Layout";

// TODO: add auth state

const AppRouter = () => {

    const auth = true

    return auth ?
        <Layout>
            <Routes>
                {privateRoutes.map(({path, nested, name, element}) =>
                    <Route key={name} path={path} element={element}>
                        {nested && nested.map((item) =>
                            <Route path={item.path} element={item.element}/>
                        )}
                    </Route>
                )}
                <Route path={'*'} element={<Navigate to={HOME_ROUTE} />} />
            </Routes>
        </Layout>
        :
        <Routes>
            {publicRoutes.map(({path, nested, name, element}) =>
                <Route key={name} path={path} element={element} >

                </Route>
            )}
            <Route path={'*'} element={<Navigate to={SIGNIN_ROUTE} />} />
        </Routes>
};

export default AppRouter;