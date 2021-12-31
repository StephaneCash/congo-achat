import "../css/HeaderComponent.css";
import {NavLink} from "react-router-dom";

function HeaderComponent() {

    return (

        <>
            <div classNameName="upComponent">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(84, 84, 201)', color:"white !important" }}>
                    <NavLink className="navbar-brand" to="/dashboard" style={{color:"white", marginLeft:"10px"}}>Congo Achat-Admin</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </>
    )
}

export default HeaderComponent;