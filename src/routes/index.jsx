import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import {LoginForm} from "../components/login/LoginForm.jsx";
import {RegisterForm} from "../components/register/RegisterForm.jsx";

const Routes = () => {
    const { token } = useAuth();

    const authenticatedRoutes = [
        {
            path: "/products",
            element: <ProtectedRoute />,
        },
    ];

    const publicRoutes = [
        {
            path: "/",
            element: <div>Home Page</div>,
        },
        {
            path: "/login",
            element: <LoginForm />,
        },
        {
            path: "/register",
            element: <RegisterForm />,
        },
    ];

    const router = createBrowserRouter([
        ...(!token ? publicRoutes : []),
        ...authenticatedRoutes,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;