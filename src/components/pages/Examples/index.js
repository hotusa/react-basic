import React, {useContext, useState, useRef} from 'react'
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

    const {i18n} = useTranslation();

    i18n.addResourceBundle('es', 'examples', es)
    i18n.addResourceBundle('en', 'examples', en)

    const [dataOld, setDataOld] = useState({name: ''})
    const [dataNew, setDataNew] = useState({name: ''})

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
        <OnBeforeUnLoad _old={dataOld} _new={dataNew}>
            <div className={`theme-${stateMainApp.color}`}>
                <div className="form-row align-items-center mb-3">
                    <div className="col-auto">
                        <Link to={"/"} className="btn btn-sm btn-primary"><FontAwesomeIcon icon={faArrowCircleLeft}
                                                                                           className="mr-1"/>
                            <Trans
                                defaults={'back'}/></Link>
                    </div>
                </div>

                <form className="form-inline">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba su nombre"
                        name="name"
                        value={dataNew.name}
                        onChange={(e) => {
                            setDataNew({...dataNew, name: e.target.value})
                            isChange.current = true
                        }}/>

                    <button type="button" className={`btn btn-${isChange.current ? 'primary':'secondary'} ml-1`} onClick={() => {
                        setDataOld(dataNew)
                        isChange.current = false
                    }}>Guardar
                    </button>
                </form>

            </div>
        </OnBeforeUnLoad>
    )
}

export default HOC(Examples);