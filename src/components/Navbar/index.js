import React, {useContext} from 'react'
import {MainAppContext} from "../../context";
import {useTranslation} from "react-i18next";

const Navbar = () => {

    let {stateMainApp, dispatchMainApp} = useContext(MainAppContext);
    const {t, i18n} = useTranslation();

    const changeTheme = (theme) => {
        dispatchMainApp({type: "SET_COLOR", payload: theme});
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div>
            <select name="lng" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                <option value="es">{t('es')}</option>
                <option value="en">{t('en')}</option>
            </select>
            <select name="theme" onChange={(e) => changeTheme(e.target.value)} value={stateMainApp.color}>
                <option value="default">Theme "Default"</option>
                <option value="dark">Theme "Dark"</option>
            </select>
            Username: {stateMainApp.user}
        </div>
    )
}

export default Navbar