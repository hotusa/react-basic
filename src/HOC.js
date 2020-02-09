import React, {useContext, useEffect, useRef} from 'react'
import {MainAppContext} from "./context";

export default function withDataFetching(WrappedComponent) {
    return function (props) {

        let {dispatchMainApp} = useContext(MainAppContext);

        const unmount = useRef(false);

        useEffect(() => {
            init()
            return () => {
                unmount.current = true
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const init = () => {
            console.log('HOC')
            setTimeout(()=>{
                dispatchMainApp({type: "SET_USER", payload: 'Unknow'})
                dispatchMainApp({type: "SET_MENU", payload: []})
            }, 1500)

        }


        return (
            <div className="container">
                <WrappedComponent {...props}/>
            </div>
        )
    }
}