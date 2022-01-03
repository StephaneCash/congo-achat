import HeaderComponent from "../includes/HeaderComponent";
import Menu from "../includes/Menu";
import '../css/Users.css';
import { useState, useEffect } from "react";
import axios from "axios"

function Users() {

    const [data, setData] = useState([]);
    const [dataInput, setDataInput] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPage, setItemsPage] = useState(5);

    const pages = [];

    for(let i = 1; i <= Math.ceil(data.length/itemsPage); i++){
        pages.push(i);
    }

    const indexOflastItems = currentPage * itemsPage;
    const indexOfFistItems = indexOflastItems - itemsPage;
    const currentItems = data.slice(indexOfFistItems, indexOflastItems);

    console.log(currentItems)

    const renderPagesNumber = pages.map((number) => {
        return (
            <li key={number} id={number}>
                {number}
            </li>
        )
    });


    const getUsers = () => {
        axios.get("http://localhost:8000/api/users").then(res => {
            if (res.status === 200) {
                setData(res.data.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const handleSearch = (e) => {
        let value = e.target.value.toLocaleLowerCase();
        setDataInput(value);
    }

    //console.log(data)

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
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Date vérification eamil</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? (
                                        <>
                                            {
                                                data.filter((user)=>{
                                                    let valToLowerCase = user.name.toLocaleLowerCase();
                                                        return valToLowerCase.includes(dataInput);

                                                }).map((val, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{val.id}</td>
                                                                <td>{val.email}</td>
                                                                <td>{val.name}</td>
                                                                <td>{val.email_verified_at}</td>
                                                                <td style={{ width: '160px' }}>
                                                                    <button className="btn btn" style={{ backgroundColor: "silver", marginRight: '5px' }}>
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button className="btn" style={{ backgroundColor: "silver", marginRight: '5px' }}>
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                    <button className="btn" style={{ backgroundColor: "silver" }}>
                                                                        <i className="fa fa-info"></i>
                                                                    </button>
                                                                </td>
                                                                
                                                            <ul className="pageNumbers"> {renderPagesNumber} </ul>
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
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Users;