import React from 'react'
import {Beforeunload} from "react-beforeunload";
import {IsEqual} from 'react-lodash'


export default function BeforeCloseBrowser({children, dataOld, dataNew}) {

    return (
        <Beforeunload onBeforeunload={(event) => {

            console.log(`beforeOnload dataOld: ${dataOld} dataNew: ${dataNew}`)
            IsEqual({
                value: dataOld, other: dataNew, yes: () => {
                    console.log('yes')
                    return true
                }, no: () => {
                    console.log('no')
                    event.preventDefault()
                }
            })

        }}>
            {children}
        </Beforeunload>
    )
}