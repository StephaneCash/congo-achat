import { Modal } from "react-bootstrap";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../css/DetailUser.css";
import { useState, useEffect } from "react";
import { db } from "../config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import swal from "sweetalert"

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 900,
        backgroundColor: 'white',
        border: "2px solid silver",
        boxShadow: theme.shadows[5],
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: "auto",
        zIndex: "10000"
    },
}))

const DetailUser = (props) => {

    const [data, setData] = useState([]);
    const usersCollection = collection(db, "users");

    const getUsers = async () => {
        const dataUsers = await getDocs(usersCollection);
        setData(dataUsers.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleBloquerUser = () => {
        swal({
            title: "Avertissement.",
            text: "Etes-vous sûr de vouloir bloquer cet utilisateur ?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                alert("Utilisateur bloqué avec succès")
            }
        })
    }

    const idRecu = props.data;

    const classes = useStyles();

    return (
        <>
            <Modal show={props.show} className={classes.modal} id="detailUser">
                <Modal.Header>Détail User</Modal.Header>
                <Modal.Body>
                    <table className="table table-hover table-striped table-borderless">
                        <thead>
                            <tr>
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
                                                <tr key={i}>
                                                    <td>{val.name}</td>
                                                    <td>{val.username}</td>
                                                    <td>{val.email}</td>
                                                    <td>{val.phoneNumber}</td>
                                                    <td>{val.city}</td>
                                                    <td>{val.province}</td>
                                                    <td>{val.balance}</td>
                                                    <td>{val.status}</td>
                                                    <td>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => handleBloquerUser()}>
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