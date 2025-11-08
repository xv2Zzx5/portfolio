import React, { useState } from "react";
import Typography from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { LuHouse } from "react-icons/lu";
import axios from "axios";

const AdminLoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    async function login() {
        const response = await axios.post("http://localhost:8000/admin/login", {
            username,
            password,
        });
        console.log(response.data);
    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    login();
                }}
            >
                <Typography
                    variant="h2-U"
                    className="text-white flex gap-2 items-center"
                >
                    Admin login
                    <Link to="/">
                        <LuHouse />
                    </Link>
                </Typography>
                <Input
                    label="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    label="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="primary">login</Button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
