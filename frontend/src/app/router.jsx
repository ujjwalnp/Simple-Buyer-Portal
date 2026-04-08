import { createBrowserRouter, Navigate } from "react-router-dom"
import { getToken } from "../utils/cookie"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Dashboard = () => <h1>This is the DASHBOARD page</h1>

const ProtectedRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/login" />
}

export const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    }
])