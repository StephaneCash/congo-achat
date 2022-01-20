import { Modal } from "react-bootstrap";
import "../css/addUserModal.css";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 700,
        backgroundColor: 'white',
        border: "2px solid silver",
        boxShadow: theme.shadows[5],
        top: '44%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: "auto",
        zIndex: "10000"
    },
}))

const AddUser = (props) => {

    const classes = useStyles();

    const data = props.data;

    const onChange = props.onChange;

    let ListError = [];
    ListError = props.ListErr;

    const handleSubmitUser = props.handleSubmitUser;

    const { id, username, email, name, phoneNumber, province, city, balance } = data;

    return (
        <>
            <Modal show={props.show} className={classes.modal} id="add-user">
                <Modal.Header>
                    {id ? `Editer ${name}` : `Ajout d'un utilisateur`}
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Entrer un username</label>
                                        <input
                                            type="text"
                                            className="form-control 
                                            mt-2" id="username"
                                            onChange={e => onChange(e)}
                                            placeholder="Un username"
                                            value={username}
                                        />
                                        <span style={{ color: "red" }}> {ListError.username} </span>

                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer une adresse email</label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="email"
                                            onChange={e => onChange(e)}
                                            placeholder="Adresse email"
                                            value={email}
                                        />
                                        <span style={{ color: "red" }}> {ListError.email} </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer un nom</label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="name"
                                            onChange={e => onChange(e)}
                                            placeholder="Un nom"
                                            value={name}
                                        />
                                        <span style={{ color: "red" }}> {ListError.name} </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Entrer un numéro de téléphone</label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="phoneNumber"
                                            placeholder="Un numéro de téléphone"
                                            onChange={e => onChange(e)}
                                            value={phoneNumber}
                                        />
                                        <span style={{ color: "red" }}> {ListError.phone} </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Province</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Province"
                                            id="province"
                                            onChange={e => onChange(e)}
                                            value={province}
                                        />
                                        <span style={{ color: "red" }}> {ListError.province} </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer le nom de la ville</label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="city"
                                            onChange={e => onChange(e)}
                                            placeholder="Une ville"
                                            value={city}
                                        />
                                        <span style={{ color: "red" }}> {ListError.city} </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer le montant de la balance</label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="balance"
                                            onChange={e => onChange(e)}
                                            placeholder="Une balance"
                                            value={balance}
                                        />
                                        <span style={{ color: "red" }}> {ListError.balance} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn" onClick={props.close}>Annuler</button>
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: 'rgb(71, 97, 184)', color: 'white' }}
                        onClick={() => handleSubmitUser()}
                    >
                        {id ? "Editer" : "Ajouter"}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUser;