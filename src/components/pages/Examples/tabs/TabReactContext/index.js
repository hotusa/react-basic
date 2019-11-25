import React, {useContext} from 'react'
import {MainAppContext} from "../../../../../context";
import {Trans, useTranslation} from "react-i18next";

export default function TabReactContext() {

    const {t} = useTranslation();

    let {stateMainApp, dispatchMainApp} = useContext(MainAppContext);

    const changeTheme = (e) => {
        dispatchMainApp({type: "SET_COLOR", payload: e.target.value});
    }

    return (
        <div>
            <label><Trans defaults={"examples:select_color"}/>:</label>
            <select className="form-control" value={stateMainApp.color} onChange={changeTheme}>
                <option value="default">{t('examples:default')}</option>
                <option value="dark">{t('examples:dark')}</option>
            </select>
        </div>
    )
}