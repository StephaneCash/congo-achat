import HeaderComponent from "../includes/HeaderComponent";
import Menu from "../includes/Menu";
import '../css/Users.css';
import { useState, useEffect } from "react";
import axios from "axios"
import _ from "lodash";

function Users() {

    const [data, setData] = useState([]);
    const [dataInput, setDataInput] = useState('');

    const [paginated, setPaginated] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5;

    const getUsers = () => {
        axios.get("http://localhost:8000/api/users").then(res => {
            if (res.status === 200) {
                setData(res.data.data);
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

    if (pageCount === 1) return null;

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

    return (<>
        <div className="col-12 users">
            <HeaderComponent />
            <div className="d-flex">
                <div className="col-2 mt-5">
                    <Menu />
                </div>
                <div className="col-10 mt-5 container">
                    <div className="col-12" style={{ marginTop: "10px", marginTop: "15px", textAlign: "center" }}>
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
                            <button type="button" className="btn" style={{ backgroundColor: "silver", float: "right" }}>Ajouter un nouvel utilisateur</button>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <table className="table table-bordered table-borderless table-hover">
                            <thead style={{ backgroundColor: "rgb(84, 84, 201)", color: "white" }}>
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
                                                                <td>{val.balance}</td>
                                                                <td>
                                                                    <button type="button" className="btn">
                                                                        <i className="fa fa-edit"></i>
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
                                    pages.map((page) => (
                                        <li
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
                </div>
            </div>
        </div>
    </>);
}

export default Users;