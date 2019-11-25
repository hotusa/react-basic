import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';


i18next
    .use(Backend) // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
        lng: "es",
        debug: false,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}.json'
        }
    });

export default i18next;