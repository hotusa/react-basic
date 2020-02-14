import React from "react";
import {Dashboard, SportsEsports, BarChart} from "@material-ui/icons";

const list = {
    'fa-gamepad' : <SportsEsports/>,
    'fa-chart-bar' : <BarChart/>,
}


const getIcon = (icon) => {
    console.log('icon',icon)

    const componentIcon = list[icon]
    if (componentIcon) {
        return componentIcon
    } else {
        return <Dashboard/>
    }
}

export default {
    getIcon
}