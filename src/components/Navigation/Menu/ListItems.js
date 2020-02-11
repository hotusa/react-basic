import React, {useContext, useEffect, useState} from 'react';
import {MainAppContext} from "../../../context";
import ListItemLink from "./ListItemLink";


export default function ListItems ({isOpen}) {

    let {stateMainApp} = useContext(MainAppContext);

    const [menu, setMenu] = useState([])

    useEffect(()=>{

        if (stateMainApp.menu && stateMainApp.menu.length > 0) {
            setMenu(stateMainApp.menu)
        }

    },[stateMainApp.menu])


    return (
        menu.map((item, idx)=> ( <ListItemLink key={idx} item={item} isOpen={isOpen}/> ))
    )
}

