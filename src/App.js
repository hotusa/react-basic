import React, {useContext, Suspense, lazy} from 'react';
import './App.css'
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import {MainAppContext} from "./context";

const Home = lazy(() => import('./pages/Home'))
const Examples = lazy(() => import('./pages/Examples'))

function App() {

    let {stateMainApp} = useContext(MainAppContext);

    return (
        <div className={`theme-${stateMainApp.color}`}>
            <HashRouter>
                <Navbar/>
                <hr/>
                <Suspense fallback={""}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/examples"} component={Examples}/>
                        <Route path={"*"} render={() => <Redirect to='/404'/>}/>
                    </Switch>
                </Suspense>
            </HashRouter>
        </div>
    )
}

export default App;
