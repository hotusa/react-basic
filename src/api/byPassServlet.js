import axios from "axios";
import config from "./config";


const getRequestByPassServlet = (request) => {
    return {
        "ByPass": "",
        "Servicio": "",
        "Metodo": "",
        "Tipo": "",
        "Entrada": {},
        "Id": "",
        "URL": "",
        "recuerdame_id": "",
        ...request
    }
}


const sendByPassServlet = (request) => {
    return axios.post(
        config.url.ByPassServlet,
        getRequestByPassServlet(request),
        {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
    )
}


export default {
    login: (username, password) => {
        let request = {
            "ByPass": "usuario",
            "Servicio": "usuarios",
            "Metodo": "GetLoginCRM",
            "Entrada": {
                "username": username,
                "password": password,
                "user_session_id": "",
                "recordarUsuario": false
            }
        }
        return sendByPassServlet(request)
    },
    loginByToken: (token) => {
        let request = {
            "ByPass": "usuario",
            "Servicio": "usuarios",
            "Metodo": "GetLoginCRM",
            "Entrada": {
                "username": "",
                "password": "",
                "user_session_id": token,
                "recordarUsuario": false
            },
            "Id": token
        }
        return sendByPassServlet(request)
    },
    getConfiguracionUsuario: (token, empl_code) => {
        let request = {
            "ByPass": "usuario",
            "Servicio": "usuarios",
            "Metodo": "GetConfiguracionUsuario",
            "Entrada": {"id": empl_code},
            "Id": token
        }
        return sendByPassServlet(request)
    },
    getMenu: (token) => {
        let request = {
            "ByPass": "usuario",
            "Servicio": "menu",
            "Metodo": "GetMenu",
            "Entrada": {"app": "CRM"},
            "Id": token
        }
        return sendByPassServlet(request)
    }
}