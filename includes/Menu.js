import { NavLink } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
    return (
        <div class="vertical-menu">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/users">Utilisateurs</NavLink>
            <NavLink to="/annoce">Annonces</NavLink>
            <NavLink to="/app-settingss">App settings</NavLink>
            <NavLink to="/sous-admis">Sous admis</NavLink>
            <NavLink to="/gestion-client">Gestion Clients</NavLink>
            <NavLink to="/gestion-poste">Gestion Postes</NavLink>
            <NavLink to="/gestion-monetaire">Gestion Monétaire</NavLink>
            <NavLink to="/categorie">Catégorie & Sous catégories </NavLink>
            <NavLink to="/province">Provinces</NavLink>
            <NavLink to="/sous-content">Sous Content</NavLink>
        </div>
    )
}

export default Menu;