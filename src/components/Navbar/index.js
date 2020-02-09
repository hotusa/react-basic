import React, {useContext} from 'react'
import {MainAppContext} from "../../context";
//import {useTranslation} from "react-i18next";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AlertBar from "./AlertBar";
import NotificacionstBar from "./NotificationsBar";
import CollaborationsBar from "./Collaborations";
import UserBar from "./UserBar";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    badge: {
        colorPrimary: 'myColor'
    },
    buttonClose: {
        marginLeft: 20,
    }
}));


const Navbar = ({open, callbackIsOpen, props}) => {

    let {stateMainApp} = useContext(MainAppContext);
    //const {t, i18n} = useTranslation();

    const classes = useStyles();

    const handleDrawerOpen = () => {
        callbackIsOpen(true);
    };


    console.log('stateMainApp', stateMainApp)

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon/>
                </IconButton>

                {stateMainApp.user ?
                    <React.Fragment>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Dasjboard
                        </Typography>
                        <CollaborationsBar/>
                        <AlertBar/>
                        <NotificacionstBar/>
                        <UserBar {...props}/>
                    </React.Fragment> : null}
            </Toolbar>


        </AppBar>
    )
}

export default Navbar