import React, {Suspense, lazy} from 'react';
import './App.css'
import {HashRouter, Route, Switch} from "react-router-dom";
import {MainAppProvider} from '../context'
import Navbar from "./general/Navbar";

const Home = lazy(() => import('./pages/Home'))
const Examples = lazy(() => import('./pages/Examples'))

function App() {
    return (
        <MainAppProvider>
            <HashRouter>
                <Navbar/>
                <Suspense fallback={<div>Cargando...</div>}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/examples"} component={Examples}/>
                    </Switch>
                </Suspense>
            </HashRouter>
        </MainAppProvider>
    )
}

export default App;
