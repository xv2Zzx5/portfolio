import { useState } from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import Htmltext from "../../components/Htmltext";

import { navItems, sideBarItems, socials, userInfo } from "../../constants";
import type { UserInfo } from "../../types";

import { LuCodeXml, LuMail, LuPlus, LuX } from "react-icons/lu";
import { BsGeoAltFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import Input from "../../components/Input";
import { toast } from "react-hot-toast";
import Textarea from "../../components/Textarea";

const AdminHomePage = () => {
    const [user, setUser] = useState<UserInfo>(userInfo);
    const [currentStack, setCurrentStack] = useState<string>("");
    const [cvFile, setCvFile] = useState<File | null>();
    const changeUserField = <K extends keyof UserInfo>(
        key: K,
        value: UserInfo[K]
    ) => {
        setUser({ ...user, [key]: value });
    };
    const addStack = () => {
        if (currentStack.trim().length == 0) {
            toast.error("Stack can't be empty");
            return;
        }
        if (
            user.stack.findIndex(
                (i) => i.toLowerCase() == currentStack.toLowerCase()
            ) !== -1
        ) {
            toast.error("This stack already exists");
            return;
        }
        setUser({
            ...user,
            stack: [...user.stack, currentStack],
        });
    };
    console.log(cvFile);
    return (
        <>
            {/* Navbar */}
            <div className="container">
                <Nav
                    logo="privet"
                    navItems={navItems}
                    socials={socials}
                    onSearch={() => alert("search")}
                />
            </div>

            {/* Sidebar */}
            <SideBar sideBarItems={sideBarItems} position="left" />

            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="container grid grid-header-layout text-white gap-10 py-10">
                    {/* User Card */}
                    <div className="area-card ">
                        <div className="border-4 m-auto border-white rounded-tl-[100px] rounded-br-[100px] p-8 flex flex-col items-center gap-5 max-w-80 shadow-[-5px_-5px_2px_var(--color-primary-200)]">
                            <div className="border-2 border-primary-200 rounded-full size-24 bg-primary-100 text-white p-5">
                                <LuCodeXml className="size-full" />
                            </div>
                            <Input
                                className="w-full"
                                value={user.name}
                                placeholder="Your name"
                                onChange={(e) =>
                                    changeUserField("name", e.target.value)
                                }
                            />
                            <Input
                                className="w-full"
                                value={user.position}
                                placeholder="Your position"
                                onChange={(e) =>
                                    changeUserField("position", e.target.value)
                                }
                            />

                            <ul>
                                <li className="flex gap-1 info-item mt-1 items-center">
                                    <LuMail />
                                    <Input
                                        className="w-full"
                                        value={user.email}
                                        placeholder="Your email"
                                        onChange={(e) =>
                                            changeUserField(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </li>
                                <li className="flex gap-1 info-item mt-1 items-center">
                                    <BsGeoAltFill />
                                    <Input
                                        className="w-full"
                                        value={user.location}
                                        placeholder="Your location"
                                        onChange={(e) =>
                                            changeUserField(
                                                "location",
                                                e.target.value
                                            )
                                        }
                                    />
                                </li>
                                <li className="flex gap-1 info-item mt-1 items-center">
                                    <FaSuitcase />
                                    <Input
                                        className="w-full"
                                        value={user.workingStyle}
                                        placeholder="Your working style"
                                        onChange={(e) =>
                                            changeUserField(
                                                "workingStyle",
                                                e.target.value
                                            )
                                        }
                                    />
                                </li>
                            </ul>
                            <div className="flex gap-2 items-center">
                                <Input
                                    className="w-full"
                                    value={currentStack}
                                    placeholder="Type new stack"
                                    onChange={(e) =>
                                        setCurrentStack(e.target.value)
                                    }
                                />
                                <Button
                                    variant="primary"
                                    icon={<LuPlus />}
                                    onClick={addStack}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-1">
                                {user.stack.map((item) => (
                                    <Typography
                                        key={item}
                                        variant="code-M"
                                        className="stack-item w-fit bg-primary-200 relative rounded-xl px-1 py-0.5 text-black uppercase"
                                    >
                                        {item}
                                        <Button
                                            icon={<LuX />}
                                            className="absolute w-5 h-5 rounded-full bg-red-500 -top-3 -right-3"
                                            onClick={() =>
                                                setUser({
                                                    ...user,
                                                    stack: user.stack.filter(
                                                        (i) => i !== item
                                                    ),
                                                })
                                            }
                                        />
                                    </Typography>
                                ))}
                            </div>

                            <Input
                                className="max-w-60"
                                type="file"
                                onChange={(e) => setCvFile(e.target.files?.[0])}
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="area-info overflow-hidden">
                        <Htmltext element="h1">
                            <Typography className="scramble-hi" variant="h1-U">
                                Hi
                            </Typography>
                            <Typography
                                className="inline scramble-Iam"
                                variant="h1-U"
                            >
                                I am{" "}
                            </Typography>
                            <Typography
                                className="inline scramble-name text-primary-200 ml-4"
                                variant="h1-U"
                            >
                                {user.name},
                            </Typography>
                            <Typography
                                className="scramble-position"
                                variant="h1-U"
                            >
                                {user.position}
                            </Typography>
                        </Htmltext>
                        <Htmltext element="p">
                            <Textarea
                                className="w-full"
                                value={user.description}
                                placeholder="Your description"
                                onChange={(e) =>
                                    changeUserField(
                                        "description",
                                        e.target.value
                                    )
                                }
                            />
                        </Htmltext>
                    </div>
                </div>
                <Button variant="primary" className="m-auto w-60">
                    Save
                </Button>
            </header>

            {/* Footer */}
            <div className="container">
                <Footer socials={socials} />
            </div>
        </>
    );
};

export default AdminHomePage;
