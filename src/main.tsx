import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Ui from "./pages/Ui.tsx";
import HomePage from "./pages/HomePage.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import AdminLoginPage from "./pages/admin/AdminLoginPage.tsx";
import AdminHomePage from "./pages/admin/AdminHomePage.tsx";
import { Toaster } from "react-hot-toast";
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

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Toaster />
        <RouterProvider router={router} />
    </StrictMode>
);
