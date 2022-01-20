import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, SettingsPower } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons : {
        display: "flex",
        alignItems: "center"
    },
    badge:{
        marginRight: theme.spacing(2)
    },
    logout:{
        marginLeft: theme.spacing(1),
        cursor: "pointer"
        
    }
}));

const NavBar = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h2" className={classes.logoLg}>
                        Congo Achat
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        Congo Achat
                    </Typography>
                    <div className={classes.icons}>
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail color="white" />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Notifications color="white" />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="" />
                        <SettingsPower className={classes.logout} />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;