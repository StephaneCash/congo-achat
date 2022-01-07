import { NavLink } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
    return (
        <div className="vertical-menu">
            <NavLink to="/dashboard" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-dashboard"></i>  Dashboard
            </NavLink>
            <NavLink to="/users" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-user-circle"></i> Utilisateurs
            </NavLink>
            <NavLink to="/annonces" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-flag" ></i>  Annonces</NavLink>
            <NavLink to="/app-settingss" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-gear"></i> App settings
            </NavLink>
            <NavLink to="/sous-admis" className="list-group-item list-group-item-action nav-link">Sous admis
            </NavLink>
            <NavLink to="/gestion-client" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-male"></i> Gestion Clients
            </NavLink>
            <NavLink to="/gestion-poste" className="list-group-item list-group-item-action nav-link">Gestion Postes
            </NavLink>
            <NavLink to="/gestion-monetaire" className="list-group-item list-group-item-action nav-link">
                <i className="fa fa-dollar"></i> Gestion Monétaire
            </NavLink>
            <NavLink to="/categorie" className="list-group-item list-group-item-action nav-link">Catégorie & Sous catégories </NavLink>
            <NavLink to="/province" className="list-group-item list-group-item-action nav-link">Provinces</NavLink>
            <NavLink to="/sous-content" className="list-group-item list-group-item-action nav-link">Sous Content</NavLink>
        </div>
    )
}

export default Menu;