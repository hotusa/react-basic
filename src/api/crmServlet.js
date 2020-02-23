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
            "Entrada": {"empl_code": empl_code},
            "Id": token
        }
        return sendCrmServlet(request)
    },
    getNotificaciones: (token, entrada) => {
        let request = {
            "Servicio": "notificaciones",
            "Metodo": "GetNotificaciones",
            "Entrada": entrada,
            "Id": token,
        }
        return sendCrmServlet(request)
    },
    getActividadesAlertas: (token, entrada) => {
        let request = {
            "Servicio": "actividades",
            "Metodo": "GetActividadesAlertas",
            "Entrada": entrada,
            "Id": token
        }
        return sendCrmServlet(request)
    }

}