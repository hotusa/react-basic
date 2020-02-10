import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
}));


const NotificacionstBar = ({num_elementos = 0, lista = []}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton color="inherit" onClick={handleClick}>
                <Badge badgeContent={num_elementos} max={99} color="error" classes={{ colorError: 'bg-error'}}>
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.typography}>
                    Notifications
                </Typography>
            </Popover>
        </div>
    )
}

export default NotificacionstBar