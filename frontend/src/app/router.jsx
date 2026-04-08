import { createBrowserRouter, Navigate } from "react-router-dom"
import { getToken } from "../utils/cookie"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"

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