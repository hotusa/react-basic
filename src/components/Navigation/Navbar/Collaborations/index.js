import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
}));


const CollaborationsBar = ({num_elementos = 0, lista = []}) => {

    useEffect(()=>{
       console.log('init CollaborationsBar ')
    },[])

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

    const handlerOnEnter = () => {
        console.log('cargar datos...')
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleClick}>
                <Badge badgeContent={num_elementos} max={99} color="primary" classes={{ colorPrimary: 'bg-success'}}>
                    <GroupIcon/>
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
                onEnter={handlerOnEnter}
            >
                <Typography className={classes.typography}>
                    Collaborations
                </Typography>
            </Popover>
        </div>
    )
}

export default CollaborationsBar