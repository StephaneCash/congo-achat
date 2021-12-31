import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "../view/Dashboard";

const RoutesAdmin = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAdmin;