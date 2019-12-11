import React, {useContext, useState} from 'react'
import HOC from "../../HOC";
import {faArrowCircleLeft, faCalendar, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {MainAppContext} from "../../../context";
import TabReactContext from "./tabs/TabReactContext";
import {Trans, useTranslation} from "react-i18next";
import TabFontAwesome from "./tabs/TabFontAwesome";
import es from "./i18n/es";
import en from "./i18n/en";
import TabReactAxios from "./tabs/TabReactAxios";
import TabCalendar from "./tabs/TabCalendar";
import TabBeforeunload from "./tabs/TabBeforeunload";

function Examples() {

    let {stateMainApp} = useContext(MainAppContext);
    const [tab, setTab] = useState(0)

    const {i18n} = useTranslation();

    i18n.addResourceBundle('es', 'examples', es)
    i18n.addResourceBundle('en', 'examples', en)

    return (
        <div className={`theme-${stateMainApp.color}`}>
            <div className="form-row align-items-center mb-3">
                <div className="col-auto">
                    <Link to={"/"} className="btn btn-sm btn-primary"><FontAwesomeIcon icon={faArrowCircleLeft}/> <Trans
                        defaults={'back'}/></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="list-group">
                        <div className={`list-group-item list-group-item-action ${tab === 0 ? 'active' : ''}`}
                             onClick={() => setTab(0)}>React context
                        </div>
                        <div className={`list-group-item list-group-item-action ${tab === 1 ? 'active' : ''}`}
                             onClick={() => setTab(1)}>Font Awesome
                        </div>
                        <div className={`list-group-item list-group-item-action ${tab === 2 ? 'active' : ''}`}
                             onClick={() => setTab(2)}>React Axios
                        </div>
                        <div className={`list-group-item list-group-item-action ${tab === 3 ? 'active' : ''}`}
                             onClick={() => setTab(3)}>Calendar
                        </div>
                        <div className={`list-group-item list-group-item-action ${tab === 4 ? 'active' : ''}`}
                             onClick={() => setTab(4)}>Beforeunload
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">

                    {tab === 0 ? <TabReactContext/> : null}
                    {tab === 1 ? <TabFontAwesome/> : null}
                    {tab === 2 ? <TabReactAxios/> : null}
                    {tab === 3 ? <TabCalendar/> : null}
                    {tab === 4 ? <TabBeforeunload/> : null}

                </div>
            </div>
        </div>
    )
}

export default HOC(Examples);