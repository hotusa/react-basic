import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(5),
    },
}));

const ListItemLink = ({item, isOpen, isSub=false}) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {descripcion, config_link_pag, subMenu} = item
    const {t, i18n} = useTranslation();

    const handleClick = () => {
        setOpen(!open);
    };

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link ref={ref} to={config_link_pag} {...linkProps} />
            )),
        [config_link_pag],
    );

    if (subMenu && subMenu.length === 0) {
        return (
            <ListItem button component={renderLink} className={isSub ? classes.nested : '' }>
                {/*<ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>*/}
                <ListItemText primary={t(descripcion)}/>
            </ListItem>
        )
    } else {
        return (
            <React.Fragment>
                <ListItem button onClick={handleClick}>
                    {/*<ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>*/}
                    <ListItemText primary={t(descripcion)} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open && isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            subMenu.map((subItem, idx)=>(
                                <ListItemLink key={idx} item={subItem} isOpen={isOpen} isSub={true}/>
                            ))
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default ListItemLink