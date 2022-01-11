import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Users from "../view/Users";
import Annonces from "../view/Annonces";
import Login from "../view/Login";

const RoutesAdmin = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='users' element={<Users />} />
                <Route path='annonces' element={<Annonces />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAdmin;

