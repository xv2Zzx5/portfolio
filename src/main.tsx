import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Ui from "./pages/Ui.tsx";
import HomePage from "./pages/HomePage.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import AdminLoginPage from "./pages/AdminLoginPage.tsx";
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
        element: <BlogsPage/>
    },
    {
        path:"/admin/login",
        element: <AdminLoginPage/>
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
