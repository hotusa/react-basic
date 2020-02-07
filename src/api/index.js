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



export default {
    sendByPassServlet: (request) => {
        return axios.post(
            config.url.ByPassServlet,
            getRequestByPassServlet(request),
            {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
        )
    }
}