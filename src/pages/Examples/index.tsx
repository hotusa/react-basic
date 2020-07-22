import React from 'react';
import HOC from '../../HOC';
import {Link} from 'react-router-dom';
import {Trans, useTranslation} from 'react-i18next';
import es from './i18n/es.json';
import en from './i18n/en.json';

function Examples() {

    const {i18n} = useTranslation();

    i18n.addResourceBundle('es', 'examples', es);
    i18n.addResourceBundle('en', 'examples', en);


    return (
        <div>
            <Link to={'/'} className="btn btn-sm btn-primary"><Trans defaults={'back'}/></Link>
        </div>
    );
}

export default HOC(Examples);