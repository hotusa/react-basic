import React, {useContext, useEffect, useRef} from 'react'
import {MainContext} from "./context";

export default function withDataFetching(WrappedComponent:any) {
    return function (props:any) {

        let {dispatchMainApp}:any = useContext(MainContext);

        const unmount = useRef(false);

        useEffect(() => {
            init()
            return () => {
                unmount.current = true
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const init = () => {
            dispatchMainApp({type: "SET_USER", payload: 'Unknow'})
        }


        return (
            <div className="container">
                <WrappedComponent {...props}/>
            </div>
        )
    }
}