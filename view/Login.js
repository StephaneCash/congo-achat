import { TextField, Button, Card, CardContent, Grid } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/Styles";
import "../css/Login.css";

const useStyles = makeStyles((theme) => ({
    input: {
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",

    },
    container: {
    },
    card: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "30%",
            marginTop: "10px",
            minHeight: "75vh",
            padding: "40px",
            margin:"0 auto"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "70%",
            marginTop: "10px",
            minHeight: "75vh",
            padding: "40px",
            margin:"0 auto"
        },
        [theme.breakpoints.down("xs md")]: {
            marginTop: "10px",
            height: "70vh",
            padding: "40px",
        }
    },
    btnSub: {
        minWidth: "100%",
    },
}))

const Login = () => {
    const classes = useStyles();
    const [valuesInput, setValuesInput] = useState({
        username: "", password: "",
    });

    const handleInput = (e) => {
        e.persist();
        setValuesInput({
            ...valuesInput, [e.target.name]: e.target.value
        });
    }

    const loginSubmit = (e) => {
        console.log("Clic");
    }

    return (
        <div className="login">
            <div className={classes.container}>
                <Card className={classes.card}>
                    <Grid>
                        <Grid sm={6} xs={6} item={true}>
                            <CardContent>
                                <div className="icon">
                                    <div className=""><Person fontSize="large" /></div>
                                    <div className="text">S'identifier</div>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid sm={12} xs={12} item={true}>
                            <CardContent>
                                <TextField
                                    className={classes.input}
                                    id="username"
                                    type="text"
                                    variant="filled"
                                    label="Entrer votre username"
                                    name="username"
                                    onChange={handleInput}
                                    value={valuesInput.username}
                                />
                                <TextField
                                    className={classes.input}
                                    id="password"
                                    type="password"
                                    variant="filled"
                                    label="Entrer votre password"
                                    onChange={handleInput}
                                    value={valuesInput.password}
                                    name="password"
                                />


                            </CardContent>
                        </Grid>
                        <Grid sm={12} xs={12} item={true}>
                            <CardContent>
                                <Button 
                                    className={classes.btnSub} 
                                    variant="contained" 
                                    color="primary" onClick={loginSubmit}>S <span className="textLog">e connecter</span></Button>
                            </CardContent>
                        </Grid>
                    </Grid>


                </Card>
            </div>
        </div>
    )
}

export default Login;