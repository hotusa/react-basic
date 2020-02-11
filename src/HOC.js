import React, {useContext, useEffect, useRef} from 'react'
import {MainAppContext} from "./context";
import Api from './api'

export default function withDataFetching(WrappedComponent) {
    return function (props) {

        let {stateMainApp, dispatchMainApp} = useContext(MainAppContext);

        const unmount = useRef(false);

        useEffect(() => {
            init()
            return () => {
                unmount.current = true
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const init = () => {
            const token = localStorage.getItem('token')
            console.log('HOC', token, stateMainApp)

            validarUsuario(token)


        }

        const validarUsuario = async (token) => {
            console.log('validar usuario')
            if (token) {

                // Login
                const result_login = await Api.byPassServlet.loginByToken(token)

                if (result_login.status === 200 && result_login.data.Status === 'OK') {
                    dispatchMainApp({type: "SET_USER", payload: result_login.data.Salida})

                    const {empl_code} = result_login.data.Salida

                    // GetConfiguracionUsuario
                    if (!stateMainApp.configUser) {
                        console.log('getConfiguracionUsuario...')
                        const result_configUser = await Api.byPassServlet.getConfiguracionUsuario(token, empl_code)

                        if (result_configUser.status === 200 && result_configUser.data.Status === 'OK') {
                            dispatchMainApp({type: "SET_CONFIG_USER", payload: result_configUser.data.Salida})
                        } else {
                            props.history.push('/login');
                        }
                    }


                    // User CRM
                    if (!stateMainApp.userCrm) {
                        console.log('getUsuarioCrmByEmplCode...')
                        const result_user_crm = await Api.crmServlet.getUsuarioCrmByEmplCode(token, empl_code)
                        if (result_user_crm.status === 200 && result_user_crm.data.Status === 'OK') {
                            dispatchMainApp({type: "SET_USER_CRM", payload: result_user_crm.data.Salida.datos_peticion})
                        } else {
                            props.history.push('/login');
                        }
                    }


                    // Get Menu
                    if (!stateMainApp.menu) {
                        console.log('getMenu...')
                        const result_menu = await Api.byPassServlet.getMenu(token)
                        if (result_menu.status === 200 && result_menu.data && result_menu.data.Salida) {
                            dispatchMainApp({type: "SET_MENU", payload: result_menu.data.Salida.menuList})
                        } else {
                            props.history.push('/login');
                        }
                    }


                } else {
                    props.history.push('/login');
                }

            } else {
                props.history.push('/login');
            }
        }


        return (
            <div className="container">
                <WrappedComponent {...props}/>
            </div>
        )
    }
}