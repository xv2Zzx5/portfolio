import React, { useState } from "react";
import Typography from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LuHouse } from "react-icons/lu";
import api from "../api";
import useAuth from "../context/auth";


const AdminLoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()
    const auth = useAuth()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await api.login(username,password);
        auth.login(username,data.token)
        navigate("/")
    }


    return (
        <div className="flex justify-center min-h-screen items-center">
            <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
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
