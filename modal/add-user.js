import { Modal } from "react-bootstrap";
import "../css/addUserModal.css";

const AddUser = (props) => {
    return (
        <>
            <Modal show={props.show} className="add-user">
                <Modal.Header>
                    Ajout d'un utilisateur <i className="fa fa-user-plus"></i>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Entrer un username</label>
                                        <input type="text" className="form-control mt-2" placeholder="Un username" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer une adresse email</label>
                                        <input type="text" className="form-control mt-2" placeholder="Adresse email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer un nom</label>
                                        <input type="text" className="form-control mt-2" placeholder="Un nom" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Entrer un numéro de téléphone</label>
                                        <input type="text" className="form-control mt-2" placeholder="Un numéro de téléphone" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Choisir une province</label>
                                        <select className="form-control"></select>
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer le nom de la ville</label>
                                        <input type="text" className="form-control mt-2" placeholder="Une ville" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label mt-4">Entrer le montant de la balance</label>
                                        <input type="text" className="form-control mt-2" placeholder="Une balance" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn" onClick={props.close}>Annuler</button>
                    <button type="button" className="btn">Ajouter</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUser;