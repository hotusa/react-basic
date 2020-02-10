import React, {useContext, useEffect, useState} from 'react';
import Api from '../../api'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import ModalAlert from "../../components/ModalAlert";
import {MainAppContext} from "../../context";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login(props) {

    let {dispatchMainApp} = useContext(MainAppContext);
    const classes = useStyles();
    const [user, setUser] = useState({ username: '', password: ''})
    const [alertOptions, setAlertOptions] = useState({show: false, message: '', type: 'success', time: 3000})

    useEffect(()=>{

        localStorage.clear()

    },[])

    const getLogin = async () => {

        if (user.username.length > 0 && user.password.length > 0) {

            const {username, password} = user
            const result = await Api.byPassServlet.login(username, password)

            if (result.status === 200 && result.data.Status === 'OK') {
                const token = result.data.Id
                localStorage.setItem('token', token)

                dispatchMainApp({type: "SET_USER", payload: result.data.Salida})

                props.history.push('/');
            }

        } else {
            setAlertOptions({...alertOptions, show: true, message: 'Campos obligatorios', type:'error'})
        }

    }


    return (
        <div>
            <ModalAlert options={alertOptions} handleClose={()=>setAlertOptions({...alertOptions, show: false})}/>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                onChange={event => setUser({...user, username: event.target.value})}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={event => setUser({...user, password: event.target.value})}
                            />
                            {/*<FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />*/}
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={getLogin}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
}
