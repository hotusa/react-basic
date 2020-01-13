import React, {useContext, useState, useRef, useEffect} from 'react'
import HOC from "../../HOC";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {MainAppContext} from "../../../context";
import {Trans, useTranslation} from "react-i18next";
import es from "./i18n/es";
import en from "./i18n/en";
import OnBeforeUnLoad from "../../general/OnBeforeUnLoad";
import axios from "axios";

function Examples() {

    let {stateMainApp, dispatchMainApp} = useContext(MainAppContext);
    const initialize = {personal: {nombre: '', apellidos: ''}, cargo: ''}

    const {i18n} = useTranslation();

    i18n.addResourceBundle('es', 'examples', es)
    i18n.addResourceBundle('en', 'examples', en)

    const [dataOld, setDataOld] = useState(initialize)
    const [dataNew, setDataNew] = useState(initialize)

    const isChange = useRef(false)



    const changeTheme = (e) => {
        dispatchMainApp({type: "SET_COLOR", payload: e.target.value});
    }

    const sendGet = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
            .then(result => {
                if (result.status === 200) {
                    console.log(result.data)
                }
            })
    }

    return (
        <div className={`theme-${stateMainApp.color}`}>
            <div className="form-row align-items-center mb-3">
                <div className="col-auto">
                    <Link to={"/"} className="btn btn-sm btn-primary"><FontAwesomeIcon icon={faArrowCircleLeft}
                                                                                       className="mr-1"/>
                        <Trans
                            defaults={'back'}/></Link>
                </div>
            </div>

            <OnBeforeUnLoad dataOld={dataOld} dataNew={dataNew} skipFields={['cargo','personal.nombre']}>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="name"
                            value={dataNew.personal.nombre}
                            onChange={(e) => {
                                setDataNew({...dataNew, personal: {...dataNew.personal, nombre: e.target.value}})
                                isChange.current = true
                            }}/>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Apellidos"
                            name="lastname"
                            value={dataNew.personal.apellidos}
                            onChange={(e) => {
                                setDataNew({...dataNew, personal: {...dataNew.personal, apellidos: e.target.value}})
                                isChange.current = true
                            }}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cargo"
                            name="cargo"
                            value={dataNew.cargo}
                            onChange={(e) => {
                                setDataNew({...dataNew, cargo: e.target.value})
                                isChange.current = true
                            }}/>
                    </div>
                    <button type="button" className={`btn btn-${isChange.current ? 'primary' : 'secondary'}`}
                            onClick={() => {
                                setDataOld(dataNew)
                                isChange.current = false
                            }}>Guardar
                    </button>
                </form>
            </OnBeforeUnLoad>
        </div>
    )
}

export default HOC(Examples);