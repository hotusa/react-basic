import React from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ModalAlert = ({options, handleClose}) => {

    return (
        <Snackbar open={options.show} autoHideDuration={options.time} onClose={handleClose} anchorOrigin={{horizontal:'right', vertical:'bottom'}}>
            <Alert onClose={handleClose} severity={options.type}>
                {options.message}
            </Alert>
        </Snackbar>
    )
}

export default ModalAlert