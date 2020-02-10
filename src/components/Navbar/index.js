import React, {useContext, useEffect, useState} from 'react'
import {MainAppContext} from "../../context";
import Api from './../../api'
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import AlertBar from "./AlertBar";
import NotificacionstBar from "./NotificationsBar";
import CollaborationsBar from "./Collaborations";
import UserBar from "./UserBar";


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
    const [notificaciones, setNotificaciones] = useState({num_elementos: 0, lineas: []})
    const [alertas, setAlertas] = useState({num_elementos: 0, lineas: []})
    const [colaboro, setColaboro] = useState({num_elementos: 0, lineas: []})

    useEffect(() => {

        if (stateMainApp.userCrm) {
            const {user_id} = stateMainApp.userCrm.data
            const token = localStorage.getItem('token')
            getNotificaciones(user_id, token)
            getAlertas(user_id, token)
            getAlertasColaboro(user_id, token)
        }

    }, [stateMainApp.userCrm])


    const getNotificaciones = async (user_id, token) => {
        const entrada = {
            "tipo_modulo": "",
            "nombre": "",
            "leida": "",
            "tipo": [],
            "neo_id": user_id,
            "pagina": "1",
            "num_resultados": "1000",
            "orden": "fecha_creacion_ts",
            "tipo_orden": "DESC"
        }
        const result = await Api.crmServlet.getNotificaciones(token, entrada)

        if (result.status === 200 && result.data.Status === 'OK') {
            setNotificaciones({
                num_elementos: result.data.Salida.datos.num_elementos,
                lineas: result.data.Salida.lineas
            })
        } else {
            setNotificaciones({num_elementos: 0, lineas: []})
        }
    }


    const getAlertas = async (user_id, token) => {
        const entrada = {
            "tiposActividad": ["Llamada", "Tarea", "Evento"],
            "estadoActividad": "pendiente",
            "favoritaActividad": false,
            "comentarioActividad": "",
            "fechaActividad": "1581285600000",
            "fechaActividadFin": "1581371999059",
            "neoIdUsuarioActividad": user_id,
            "motivoLlamadaActividad": "",
            "nombreEvento": "",
            "nombreTarea": "",
            "tipoNota": "",
            "tiposReferencia": [],
            "pagina": "1",
            "num_resultados": "1000",
            "orden": "fecha",
            "tipo_orden": "ASC",
            "tipoActividad": "MIAS"
        }
        const result = await Api.crmServlet.getActividadesAlertas(token, entrada)

        if (result.status === 200 && result.data.Status === 'OK') {
            setAlertas({
                num_elementos: result.data.Salida.datos.num_elementos,
                lineas: result.data.Salida.lineas
            })
        } else {
            setAlertas({num_elementos: 0, lineas: []})
        }
    }


    const getAlertasColaboro = async (user_id, token) => {
        const entrada = {
            "tiposActividad": ["Llamada", "Tarea", "Evento"],
            "estadoActividad": "pendiente",
            "favoritaActividad": false,
            "comentarioActividad": "",
            "fechaActividad": "1581285600000",
            "fechaActividadFin": "1581371999059",
            "neoIdUsuarioActividad": user_id,
            "motivoLlamadaActividad": "",
            "nombreEvento": "",
            "nombreTarea": "",
            "tipoNota": "",
            "tiposReferencia": [],
            "pagina": "1",
            "num_resultados": "1000",
            "orden": "fecha",
            "tipo_orden": "ASC",
            "tipoActividad": "COLABORO"
        }
        const result = await Api.crmServlet.getActividadesAlertas(token, entrada)

        if (result.status === 200 && result.data.Status === 'OK') {
            setColaboro({
                num_elementos: result.data.Salida.datos.num_elementos,
                lineas: result.data.Salida.lineas
            })
        } else {
            setColaboro({num_elementos: 0, lineas: []})
        }
    }


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
                            {`${stateMainApp.user.nombre} ${stateMainApp.user.apellido1} (${stateMainApp.user.perfil})`}
                        </Typography>
                        <CollaborationsBar
                            num_elementos={colaboro.num_elementos}
                            lista={colaboro.num_elementos}/>
                        <AlertBar
                            num_elementos={alertas.num_elementos}
                            lista={alertas.lineas}/>
                        <NotificacionstBar
                            num_elementos={notificaciones.num_elementos}
                            lista={notificaciones.lineas}/>
                        <UserBar {...props}/>
                    </React.Fragment> : null}
            </Toolbar>


        </AppBar>
    )
}

export default Navbar