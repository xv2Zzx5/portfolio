import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Ui from "./pages/Ui";
import BlogsPage from "./pages/BlogsPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import useUser from "./context/user";
import api from "./api";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/ui",
        element: <Ui />,
    },
    {
        path: "/blogs",
        element: <BlogsPage />,
    },
    {
        path: "/admin/login",
        element: <AdminLoginPage />,
    },
    {
        path: "/admin",
        element: <AdminHomePage />,
    },
]);
const App = () => {
    const { user, setUser, isLoading, isError, setLoading, setError } =
        useUser();
    useEffect(() => {
        setLoading(true);
        api.getUser()
            .then((data) => {
                console.log(data);
                setUser(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            {" "}
            <Toaster />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
