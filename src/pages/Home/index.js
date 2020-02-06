import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import HOC from "../../HOC";
import es from './i18n/es.json'
import en from './i18n/en.json'
import {Link} from "react-router-dom";

function Home() {


    const {t, i18n} = useTranslation();

    i18n.addResourceBundle('es', 'home', es)
    i18n.addResourceBundle('en', 'home', en)



    return (
        <div>

            <h1>{t('home:description')}</h1>
            <Link to={"/examples"}><Trans defaults={'home:view_demos'}/></Link>


            <ul>
                <li>React.js</li>
                <li>Higher Order Components (HOC)</li>
                <li>React i18next</li>
                <li>React router</li>
                <li>React Lazy & Suspense</li>
                <li>React Context</li>
                <li>React Axios</li>
            </ul>

        </div>
    );
}

export default HOC(Home);
