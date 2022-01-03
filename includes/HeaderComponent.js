import "../css/HeaderComponent.css";
import { NavLink } from "react-router-dom";

function HeaderComponent() {

    return (

        <>
            <div classNameName="upComponent">
                <nav className="navbar navbar-expand-lg position-fixed navbar-light" style={{ backgroundColor: 'rgb(84, 84, 201)', color: "white !important" }}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/dashboard" style={{ color: "white" }}>Congo Achat-Admin</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li style={{ color: "white" }}>Déconnexion</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default HeaderComponent;