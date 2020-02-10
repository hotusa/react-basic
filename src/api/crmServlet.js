import axios from "axios";
import config from "./config";

const getCRMServlet = (request) => {
    return {
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


const sendCrmServlet = (request) => {
    return axios.post(
        config.url.CRMServlet,
        getCRMServlet(request),
        {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
    )
}

export default {
    getUsuarioCrmByEmplCode: (token, empl_code) => {
        let request = {
            "Servicio": "usuariosCrm",
            "Metodo": "GetUsuarioCrmByEmplCode",
            "Tipo": "",
            "Entrada": {"empl_code": empl_code},
            "Id": token,
            "URL": "",
            "recuerdame_id": ""
        }
        return sendCrmServlet(request)
    },
    getNotificaciones: (token, entrada) => {
        let request = {
            "Servicio": "notificaciones",
            "Metodo": "GetNotificaciones",
            "Tipo": "",
            "Entrada": entrada,
            "Id": token,
            "URL": "",
            "recuerdame_id": ""
        }
        return sendCrmServlet(request)
    },
    getActividadesAlertas: (token, entrada) => {
        let request = {
            "Servicio": "actividades",
            "Metodo": "GetActividadesAlertas",
            "Tipo": "",
            "Entrada": entrada,
            "Id": token,
            "URL": "",
            "recuerdame_id": ""
        }
        return sendCrmServlet(request)
    }

}