import { Modal } from "react-bootstrap";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../css/DetailUser.css";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 850,
        backgroundColor: 'white',
        border: "2px solid silver",
        boxShadow: theme.shadows[5],
        top: '24%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: "auto",
        zIndex: "10000"
    },
}))

const DetailUser = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.data);

    const getUsers = () => {
        axios.get("http://localhost:8000/api/users").then(res => {
            if (res.data.status === 200) {
                setData(res.data.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const idRecu = props.data;

    console.log(idRecu);

    const classes = useStyles();

    return (
        <>
            <Modal show={props.show} className={classes.modal} id="detailUser">
                <Modal.Header>Détail User</Modal.Header>
                <Modal.Body>
                    <table className="table table-hover table-striped table-borderless">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Ville</th>
                                <th>Province</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, i) => {
                                    if (val.id === idRecu) {
                                        return (
                                            <>
                                                <tr>

                                                    <td>{val.id}</td>
                                                    <td>{val.name}</td>
                                                    <td>{val.username}</td>
                                                    <td>{val.email}</td>
                                                    <td>{val.phone}</td>
                                                    <td>{val.city}</td>
                                                    <td>{val.province}</td>
                                                    <td>{val.balance}</td>
                                                    <td>ACTIVE</td>
                                                    <td>
                                                        <Button variant="contained" color="primary">
                                                            Bloquer
                                                        </Button>
                                                    </td>
                                                    
                                                </tr>
                                            </>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outlined" onClick={props.close}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DetailUser;