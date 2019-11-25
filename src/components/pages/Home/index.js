import React, {useContext} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import HOC from "./../../HOC";
import es from './i18n/es.json'
import en from './i18n/en.json'
import {Link} from "react-router-dom";
import {MainAppContext} from "../../../context";


function Home({user}) {

    let {stateMainApp} = useContext(MainAppContext);
    const {t, i18n} = useTranslation();

    i18n.addResourceBundle('es', 'home', es)
    i18n.addResourceBundle('en', 'home', en)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className={`theme-${stateMainApp.color}`}>
            <div className="form-row align-items-center mb-3">
                <div className="col-auto">
                    <select name="lng" className="form-control form-control-sm"
                            onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                        <option value="es">{t('es')}</option>
                        <option value="en">{t('en')}</option>
                    </select>
                </div>
            </div>
            <div className="jumbotron py-4">
                <div className="text-left"><img src={"/img/react.png"} height={120} alt="logo"/></div>
                <h1 className="display-4"><Trans defaults={"title"}/></h1>
                <p className="lead"><Trans defaults={"home:description"}/></p>
                <hr className="my-4"/>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://es.reactjs.org/"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> React.js</a>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://react.i18next.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> React i18next</a>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://reacttraining.com/react-router/web/guides/quick-start"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> React Router</a>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://github.com/axios/axios"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> React Axios</a>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://getbootstrap.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> Bootstrap</a>
                <a className="btn btn-primary btn-sm mr-1"
                   href="https://github.com/FortAwesome/react-fontawesome"
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"><FontAwesomeIcon icon={faExternalLinkAlt}/> Font Awesome</a>
            </div>

            <div className="my-3">
                <Link to={"/examples"}><Trans defaults={'home:view_demos'}/></Link>
            </div>

            <ul>
                <li>React.js</li>
                <li>Higher Order Components (HOC)</li>
                <li>React i18next</li>
                <li>React router</li>
                <li>React Lazy & Suspense</li>
                <li>React Context</li>
                <li>React Axios</li>
                <li>Bootstrap</li>
                <li>Font Awesome</li>
            </ul>

        </div>
    );
}

export default HOC(Home);
