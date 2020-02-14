import React, {useContext} from 'react'
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItems from "./ListItems";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import {MainAppContext} from "../../../context";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    profile: {
        padding: theme.spacing(2)
    },
    avatar: {
        margin: theme.spacing(2),
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

const Menu = ({open, callbackIsOpen}) => {

    let {stateMainApp} = useContext(MainAppContext);

    const classes = useStyles();

    const handleDrawerClose = () => {
        callbackIsOpen(false);
    };

    const BoxAvatar = () => {
        if (stateMainApp.userCrm) {
            return (
                <Grid container spacing={1} alignContent={'center'} alignItems={'center'} direction={"column"}>
                    <Grid item>
                        <Avatar alt="avatar"
                                src={`http://10.100.2.3/CRMServlet/neo/images/avatares/${stateMainApp.userCrm.data.avatar}`}
                                className={classes.avatar}
                                variant={'square'}/>
                    </Grid>
                </Grid>
            )
        }
    }

    const BoxUserName = () => {
        if (stateMainApp.user) {
            return (
                <Grid container spacing={0} alignContent={'center'} alignItems={'center'} direction={"column"}>
                    <Grid item>
                        <div>{`${stateMainApp.user.nombre} ${stateMainApp.user.apellido1} ${stateMainApp.user.apellido2}`}</div>
                    </Grid>
                    <Grid item>
                        <small>{stateMainApp.user.perfil}</small>
                    </Grid>
                </Grid>
            )
        } else {
            return null
        }
    }

    console.log('stateMainApp.menu',stateMainApp.menu)
    return (
        <Drawer
            variant="persistent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <div className={classes.profile}>
                {BoxAvatar()}
                {BoxUserName()}
            </div>
            {stateMainApp.menu ? <List><ListItems isOpen={open}/></List> : null}
        </Drawer>
    )
}

export default Menu