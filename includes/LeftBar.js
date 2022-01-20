import { Container, makeStyles, Typography } from "@material-ui/core";
import { ApartmentTwoTone, Build, Category, Dashboard, KeyboardArrowDownOutlined, MonetizationOn, Note,PanToolTwoTone, People, Settings, SupervisedUserCircle, LocationOn } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "../css/Menu.css";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "white",
        height: "100vh",
        color: '#555',
        border: "1px solid silver",
        position:"fixed",
        width: "15%",
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}));

const LeftBar = () => {

    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.item}>
                    <Dashboard className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/dashboard" className="">Dashboard</NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <People className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/users" className="">
                            Utilisateurs
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <PanToolTwoTone className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/annonces">
                            Annonces
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Settings className={classes.icon} />
                    <Typography className={classes.text}>App Settings</Typography>
                </div>
                <div className={classes.item}>
                    <Build className={classes.icon} />
                    <Typography className={classes.text}>Sous Admin</Typography>
                </div>
                <div className={classes.item}>
                    <SupervisedUserCircle className={classes.icon} />
                    <Typography className={classes.text}>Gestion Clients</Typography>
                </div>
                <div className={classes.item}>
                    <LocationOn className={classes.icon} />
                    <Typography className={classes.text}>Trouver vos clients</Typography>
                </div>
                <div className={classes.item}>
                    <Note className={classes.icon} />
                    <Typography className={classes.text}>Gestion Postes</Typography>
                </div>
                <div className={classes.item}>
                    <MonetizationOn className={classes.icon} /> <Typography className={classes.text}> Gestion monétaire</Typography>
                </div>
                <div className={classes.item}>
                    <Category className={classes.icon} />
                    <Typography className={classes.text}>Catégories & Sous Catégories</Typography>
                </div>
                <div className={classes.item}>
                    <ApartmentTwoTone className={classes.icon} />
                    <Typography className={classes.text}>Province</Typography>
                </div>
                <div className={classes.item}>
                    <KeyboardArrowDownOutlined className={classes.icon} />
                    <Typography className={classes.text}>Static content</Typography>
                </div>
            </Container>
        </>
    );
}

export default LeftBar;