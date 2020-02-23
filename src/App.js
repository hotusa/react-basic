import React, {Suspense} from 'react';
import './App.scss'
import {HashRouter, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navigation/Navbar";
import Menu from "./components/Navigation/Menu";
import withDataFetching from "./HOC";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const App = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navigation {...props}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth={false} className={classes.container}>
                    <Suspense fallback={""}>
                        <HashRouter>
                            <Switch>
                                <Route exact path={"/"} component={withDataFetching(Dashboard)}/>
                                <Route exact path={"/Dashboard"} component={withDataFetching(Dashboard)}/>
                                <Route exact path={"/crm_config_user_crm"} component={withDataFetching(Profile)}/>
                            </Switch>
                        </HashRouter>
                    </Suspense>
                </Container>
            </main>
        </div>
    )
}

export default App;
