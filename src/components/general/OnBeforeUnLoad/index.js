import React, {useEffect, useRef} from 'react'
import {Prompt} from "react-router-dom";
import {IsEqual} from "react-lodash";

const OnBeforeUnLoad = ({children, _old, _new}) => {

    const _dataOld = useRef(null)
    const _dataNew = useRef(null)

    useEffect(()=>{

        _dataOld.current = _old
        _dataNew.current = _new

    }, [_old, _new])

    useEffect(()=>{
        window.addEventListener('beforeunload', function (e) {

            let isDifferent = validate()
            console.log('isDifferent', isDifferent)
            if (isDifferent) {
                // Hay cambios
                e.preventDefault();
                e.returnValue = '';
            } else {
                // Si no hay cambios
                return;
            }

        });

    },[])

    const validate = () => {
        console.log('entra validate')
        console.log(_dataOld, _dataNew)
        return IsEqual({
            value: _dataOld,
            other: _dataNew,
            yes: () => {
                console.log('yes')
                return false
            },
            no: () => {
                return true
            }
        })

    }

    return (
        <div>
            <Prompt message={()=>{
                console.log('entra message')
                let isDifferent = validate()
                if (isDifferent) {
                    return `Are you sure you want to leave?`
                } else {
                    return true
                }
            }} />{children}
        </div>
    )

}

export default OnBeforeUnLoad