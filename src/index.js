import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import {MainAppProvider} from "./context";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Registro from "./pages/Registro";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#1976d2',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#dc004e',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

ReactDOM.render(
    <MainAppProvider>
        <ThemeProvider theme={theme}>
            <Suspense fallback={""}>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/Registro"} component={Registro}/>
                        <Route exact path={"/Login"} component={Login}/>
                        <Route exact path={"/404"} component={NotFound}/>
                        <Route exact path={"/Dashboard"} component={Dashboard}/>
                        <Route path={"/"} component={App}/>
                    </Switch>
                </HashRouter>
            </Suspense>
        </ThemeProvider>
    </MainAppProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
