import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {MainAppContext} from "../../context";
import {useTranslation} from "react-i18next";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = () => {

    const classes = useStyles();
    let {stateMainApp, dispatchMainApp} = useContext(MainAppContext);
    const {t, i18n} = useTranslation();

    const changeTheme = (theme) => {
        dispatchMainApp({type: "SET_COLOR", payload: theme});
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar