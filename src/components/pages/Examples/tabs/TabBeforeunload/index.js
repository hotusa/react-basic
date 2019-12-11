import React, {useState, useEffect} from 'react'
import BeforeCloseBrowser from "../../../../general/BeforeCloseBrowser";

export default function TabBeforeunload() {

    const [dataOld, setDataOld] = useState({})
    const [dataNew, setDataNew] = useState({name:''})

    useEffect(()=>{
        setDataOld(dataNew)
    },[])


    return (
        <BeforeCloseBrowser dataOld={dataOld} dataNew={dataNew}>
            <input type="text" onChange={(e)=>{
                setDataNew({...dataNew, name: e.target.value})
            }} value={dataNew.name} className="form-control"/>
        </BeforeCloseBrowser>
    )
}