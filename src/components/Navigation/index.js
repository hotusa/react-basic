import React from 'react'
import Navbar from "./Navbar";
import Menu from "./Menu";

const Navigation = (props) => {

    const [open, setOpen] = React.useState(true);

    return (
        <React.Fragment>
            <Navbar open={open} callbackIsOpen={(value) => setOpen(value)} props={props}/>
            <Menu open={open} callbackIsOpen={(value) => setOpen(value)}/>
        </React.Fragment>
    )
}

export default Navigation