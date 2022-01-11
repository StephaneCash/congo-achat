import { TextField, Button, Container } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import "../css/Login.css";

const Login = () => {
    return (
        <div className="login">
            <Container maxWidth="md">
                <div className="icon">
                    <div className="icon_class">
                        <Person fontSize="large" />
                    </div>
                    <div className="text">S'identifier</div>
                </div>

                <div className="row textinput">
                    <div className="col-12 p-2 m-2">
                        <TextField id="username" type="text" variant="filled" label="Entrer votre username" fullwidth />
                    </div>
                    <div className="col-12 p-2 m-2">
                        <TextField id="password" type="password" variant="filled" label="Entrer votre password" fullwidth />
                    </div>

                    <div className="col-12">
                        <Button variant="contained" color="primary">Se connecter</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;