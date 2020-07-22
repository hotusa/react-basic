import React, {useContext, Suspense, lazy} from 'react';
import './App.css'
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import {MainContext} from "./context";

const Home = lazy(() => import('./views/Home'))
const Examples = lazy(() => import('./views/Examples'))

function App() {

    let {stateMainApp}:any = useContext(MainContext);

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
