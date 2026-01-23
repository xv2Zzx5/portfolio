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
import { useQuery } from "@tanstack/react-query";
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
    const { setUser } = useUser();
    const { data, isLoading, error } = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getUser(),
    });
    if (isLoading) {
        return <p>Loading</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    console.log(data);
    return (
        <>
            {" "}
            <Toaster />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
