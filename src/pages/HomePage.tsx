import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import { navItems, sideBarItems, socials, userInfo } from "../constants";
import SideBar from "../components/SideBar";
import { gsap } from "gsap";
import type { UserInfo } from "../types";
import Footer from "../components/Footer";
import { LuCodeXml, LuMail } from "react-icons/lu";
import Typography from "../components/Typography";
import { BsGeoAltFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";

const HomePage = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const sideBarRef = useRef<HTMLDivElement | null>(null);
    const [user, setUser] = useState<UserInfo>(userInfo);
    useEffect(() => {
        if (navRef.current != null) {
            gsap.fromTo(navRef.current, { yPercent: -100 }, { yPercent: 0 });
        }
        if (sideBarRef.current != null) {
            gsap.fromTo(
                sideBarRef.current,
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1 }
            );
        }
    }, []);
    return (
        <>
            <div ref={navRef} className="container">
                <Nav
                    logo="privet"
                    navItems={navItems}
                    socials={socials}
                    onSearch={() => {
                        alert("search");
                    }}
                />
            </div>
            <SideBar
                ref={sideBarRef}
                sideBarItems={sideBarItems}
                position="left"
            />
            <header>
                <div className="container grid grid-header-layout">
                    <div className="area-card">
                        {userInfo && (
                            <div>
                                <div>
                                    <LuCodeXml />
                                </div>
                                <Typography variant="h2-M">
                                    {userInfo.name}
                                </Typography>
                                <Typography variant="code-M">
                                    {userInfo.position}
                                </Typography>
                                <ul>
                                    <li>
                                        <LuMail />
                                        <Typography variant="code-M">
                                            <a
                                                href={
                                                    "mailto:" + userInfo.email
                                                }
                                            >
                                                {userInfo.email}
                                            </a>
                                        </Typography>
                                    </li>
                                    <li>
                                        <BsGeoAltFill />
                                        <Typography variant="code-M">
                                            <a
                                                href={
                                                    "mailto:" + userInfo.email
                                                }
                                            >
                                                {userInfo.location}
                                            </a>
                                        </Typography>
                                    </li>
                                    <li>
                                        <FaSuitcase />
                                        <Typography variant="code-M">
                                            {userInfo.workingStyle}
                                        </Typography>
                                    </li>
                                </ul>
                                <ul>
                                    {userInfo.stack.map((item) => (
                                        <li>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="area-info">info</div>
                    <div className="area-stats">stats</div>
                </div>
            </header>
            <div className="container">
                <Footer socials={socials} />{" "}
            </div>
        </>
    );
};

export default HomePage;
