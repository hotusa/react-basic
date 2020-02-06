import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import {MainAppProvider} from "./context";
import NotFound from "./pages/NotFound";


ReactDOM.render(
    <MainAppProvider>
        <Suspense fallback={""}>
            <HashRouter>
                <Switch>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/404"} component={NotFound}/>
                    <Route path={"/"} component={App}/>
                </Switch>
            </HashRouter>
        </Suspense>
    </MainAppProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
