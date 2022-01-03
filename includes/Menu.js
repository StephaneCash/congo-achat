import { NavLink } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
    return (
        <div class="vertical-menu">
            <NavLink to="/dashboard">
                <i className="fa fa-dashboard"></i>  Dashboard</NavLink>
            <NavLink to="/users">
                <i className="fa fa-user-circle"></i> Utilisateurs</NavLink>
            <NavLink to="/annoce">
                <i className="fa fa-flag"></i>  Annonces</NavLink>
            <NavLink to="/app-settingss">
                <i className="fa fa-gear"></i> App settings</NavLink>
            <NavLink to="/sous-admis">Sous admis</NavLink>
            <NavLink to="/gestion-client">
                <i className="fa fa-male"></i> Gestion Clients</NavLink>
            <NavLink to="/gestion-poste">Gestion Postes</NavLink>
            <NavLink to="/gestion-monetaire">
                <i className="fa fa-dollar"></i> Gestion Monétaire</NavLink>
            <NavLink to="/categorie">Catégorie & Sous catégories </NavLink>
            <NavLink to="/province">Provinces</NavLink>
            <NavLink to="/sous-content">Sous Content</NavLink>
        </div>
    )
}

export default Menu;