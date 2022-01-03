import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Users from "../view/Users";

const RoutesAdmin = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='users' element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAdmin;