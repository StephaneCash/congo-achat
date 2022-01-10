import HeaderComponent from "../includes/HeaderComponent";
import Menu from "../includes/Menu";
import '../css/Users.css';
import { useState, useEffect } from "react";
import axios from "axios"
import AddUser from "../modal/add-user";
import _ from "lodash";
import NavBar from "../includes/NavBar";
import { Button, Card, Grid } from "@material-ui/core";
import LeftBar from "../includes/LeftBar";
import { PersonAdd } from "@material-ui/icons";
import swal from "sweetalert";
import DetailUser from "../modal/detailUser";

function Users() {

    const [data, setData] = useState([]);
    const [dataInput, setDataInput] = useState('');

    const initialiseValues = { username: "", email: "", name: "", phone: "", province: "", city: "", balance: "" };
    const [formData, setFormData] = useState(initialiseValues);

    const [paginated, setPaginated] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [etatModal, setEtatModal] = useState(false);
    const [ListErr, setListErr] = useState(initialiseValues);

    const [detailUser, setDetailUser] = useState();
    const [detailModal, seteDtailModal] = useState(false);

    const ListError = {};

    const onChange = (e) => {
        //console.log(e);
        const { value, id } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const handleSubmitUser = () => {
        axios.post(`http://localhost:8000/api/users`, formData).then(res => {
            if (res.data.status === 200) {
                getUsers();
                setEtatModal(false);
                swal({ title: "Succès", icon: 'success', text: `${res.data.message}` });
                setFormData(initialiseValues);
                setListErr(initialiseValues);
            } else {
                setListErr({
                    ...ListError, username: res.data.errors.username,
                    name: res.data.errors.name,
                    phone: res.data.errors.phone,
                    province: res.data.errors.province,
                    city: res.data.errors.city,
                    balance: res.data.errors.balance,
                    email: res.data.errors.email
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const showModalAddUser = () => {
        setEtatModal(true);
    }

    const cloeModalAddUser = () => {
        setEtatModal(false);
    }

    const closeModalDetailUser = () => {
        seteDtailModal(false);
    }

    const pageSize = 5;

    const getUsers = () => {
        axios.get("http://localhost:8000/api/users").then(res => {
            if (res.data.status === 200) {
                setData(res.data.data);
                console.log(res.data);
                setPaginated(_(res.data.data).slice(0).take(pageSize).value());
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

    // if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    const handleSearch = (e) => {
        let value = e.target.value.toLocaleLowerCase();
        setDataInput(value);
    }

    const pagination = (noPage) => {
        setCurrentPage(noPage);
        const startIndex = (noPage - 1) * pageSize;
        const pagintData = _(data).slice(startIndex).take(pageSize).value();
        setPaginated(pagintData);
    }

    const handleDetailUser = (id) => {
        setDetailUser(id);
        seteDtailModal(true);
    }

    const handleDeleteUser = (id) => {

        swal({
            title: "Avertissement.",
            text: "Etes-vous sûr de vouloir supprimer cet utilisateur ?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`http://localhost:8000/api/users/${id}`).then(res => {
                    getUsers();
                    swal(res.data.message, {
                        icon: "success",
                    });
                }).catch(rej => {
                    console.log(rej)
                })
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (<>
        <div className="users">
            <NavBar />
            <Grid className="d-flex">
                <Grid xs={2} sm={2}>
                    <LeftBar />
                </Grid>
                <Grid xs={10} sm={10} style={{ marginTop: "80px", padding: "10px", backgroundColor: "#efefef" }}>
                    <Card style={{ padding: "10px" }}>
                        <div className="col-12" style={{ marginTop: "15px", textAlign: "center" }}>
                            <h4 className="align-center"> Users <i className="fa fa-user-circle"></i> </h4>
                        </div>
                        <div className="d-flex">

                            <div className="col-5 mt-5">
                                <div className="form-group">
                                    <div className="user-field">
                                        <div className="input-group mb-2">
                                            <input
                                                type="text"
                                                className="form-control input-search "
                                                placeholder="Rechercher"
                                                autoComplete="off"
                                                onChange={handleSearch}
                                            />
                                            <div className="input-group-append">
                                                <i className="input-group-text fa fa-search fa-1x" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 mt-5">
                                <Button
                                    type="button"
                                    onClick={showModalAddUser}
                                    variant="contained"
                                    style={{ float: "right" }}
                                    color="primary"
                                >
                                    <PersonAdd />
                                </Button>

                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <table className="table table-bordered table-borderless table-hover">
                                <thead style={{ backgroundColor: "rgb(84, 84, 201)" }}>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>City, Province</th>
                                        <th>Balance</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.length > 0 ? (
                                            <>
                                                {
                                                    paginated.filter((user) => {
                                                        let valToLowerCase = user.name.toLocaleLowerCase();
                                                        return valToLowerCase.includes(dataInput);

                                                    }).map((val, index) => {
                                                        return (
                                                            <>
                                                                <tr key={index}>
                                                                    <td>{val.id}</td>

                                                                    <td>{val.username}</td>
                                                                    <td>{val.email}</td>
                                                                    <td>{val.name}</td>
                                                                    <td>{val.phone}</td>
                                                                    <td>{val.province}</td>
                                                                    <td>
                                                                        {val.balance} {val.balance.length > 0 ? 'CDF' : ''}
                                                                    </td>
                                                                    <td style={{ textAlign: 'center', width: "200px", border: "1px solid silver !important" }}>
                                                                        <button type="button"
                                                                            className="btn btnChange">
                                                                            <i className="fa fa-edit"></i>
                                                                        </button>
                                                                        <button type="button"
                                                                            onClick={() => handleDetailUser(val.id)}
                                                                            className="btn btnChange">
                                                                            <i className="fa fa-info"></i>
                                                                        </button>
                                                                        <button type="button"
                                                                            onClick={() => handleDeleteUser(val.id)}
                                                                            className="btn btnChange">
                                                                            <i className="fa fa-trash"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })

                                                }
                                            </>
                                        ) : (
                                            <>
                                                <tr>
                                                    <td colSpan="8px" style={{ textAlign: 'center' }}>
                                                        <i className="fa fa-spinner fa-spin fa-1x"></i> Chargement...
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                            <nav className="d-flex justify-content-center">
                                <ul className="pagination">
                                    {
                                        pages.map((page, index) => (
                                            <li
                                                key={index}
                                                style={{ cursor: 'pointer' }}
                                                className={
                                                    page === currentPage ? "page-item active" : "page-item"
                                                }>
                                                <p className="page-link" onClick={() => pagination(page)}>{page}</p>

                                            </li>
                                        ))
                                    }

                                </ul>
                            </nav>
                        </div>
                    </Card>
                    <DetailUser
                        show={detailModal}
                        data={detailUser}
                        close={closeModalDetailUser}
                    />
                </Grid>
            </Grid>
        </div>

        <AddUser
            show={etatModal}
            close={cloeModalAddUser}
            data={formData}
            onChange={onChange}
            handleSubmitUser={handleSubmitUser}
            ListErr={ListErr}
        />
    </>);
}

export default Users;