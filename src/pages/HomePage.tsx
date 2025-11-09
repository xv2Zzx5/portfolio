import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Htmltext from "../components/Htmltext";
import Model from "../components/Model";

import { navItems, sideBarItems, socials, userInfo } from "../constants";
import type { UserInfo } from "../types";

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LuCodeXml, LuMail } from "react-icons/lu";
import { BsGeoAltFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useAuth from "../context/auth";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

const HomePage = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const sideBarRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);

    const [user] = useState<UserInfo>(userInfo);
    const auth = useAuth()

    useEffect(() => {
        // Навбар
        gsap.fromTo(navRef?.current, { yPercent: -100 }, { yPercent: 0 });

        // Сайдбар
        gsap.fromTo(
            sideBarRef?.current,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1 }
        );

        // Info & stack анимации
        const tl = gsap.timeline();
        tl.fromTo(
            ".info-item",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.in",
                stagger: 0.3,
            }
        );
        tl.fromTo(
            ".stack-item",
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "circ.in",
                stagger: 0.3,
            }
        );

        // Scramble-анимации
        const animateScramble = (selector: string, text: string) => {
            gsap.to(selector, {
                duration: 1,
                scrambleText: text,
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });
        };

        animateScramble(".scramble-hi", "Hi");
        animateScramble(".scramble-Iam", "I am ");
        animateScramble(".scramble-name", user.name);
        animateScramble(".scramble-position", user.position);
    }, [user]);

    return (
        <>
            {/* Navbar */}
            <div ref={navRef} className="container">
                <Nav
                    logo="privet"
                    navItems={navItems}
                    socials={socials}
                    onSearch={() => alert("search")}
                />
            </div>

            {/* Sidebar */}
            <SideBar
                ref={sideBarRef}
                sideBarItems={sideBarItems}
                position="left"
            />

            {/* Header */}
            <header className="relative overflow-hidden">
                <div>
                    <p>hi, {auth.username}</p>
                </div>
                <div className="container grid grid-header-layout text-white gap-10 py-10">
                    {/* User Card */}
                    <div className="area-card ">
                        <div className="border-4 m-auto border-white rounded-tl-[100px] rounded-br-[100px] p-8 flex flex-col items-center gap-5 max-w-80 shadow-[-5px_-5px_2px_var(--color-primary-200)]">
                            <div className="border-2 border-primary-200 rounded-full size-24 bg-primary-100 text-white p-5">
                                <LuCodeXml className="size-full" />
                            </div>
                            <Typography variant="h2-M">{user.name}</Typography>
                            <Typography variant="code-M">
                                {user.position}
                            </Typography>

                            <ul>
                                <li className="flex gap-1 info-item mt-1">
                                    <LuMail />
                                    <Typography variant="code-M">
                                        <a href={`mailto:${user.email}`}>
                                            {user.email}
                                        </a>
                                    </Typography>
                                </li>
                                <li className="flex gap-1 info-item mt-1">
                                    <BsGeoAltFill />
                                    <Typography variant="code-M">
                                        {user.location}
                                    </Typography>
                                </li>
                                <li className="flex gap-1 info-item mt-1">
                                    <FaSuitcase />
                                    <Typography variant="code-M">
                                        {user.workingStyle}
                                    </Typography>
                                </li>
                            </ul>

                            <div className="grid grid-cols-2 gap-1">
                                {user.stack.map((item) => (
                                    <Typography
                                        key={item.name}
                                        variant="code-M"
                                        className="stack-item w-fit bg-primary-200 rounded-xl px-1 py-0.5 text-black uppercase"
                                    >
                                        {item.name}
                                    </Typography>
                                ))}
                            </div>

                            <a href="/resume-sample.pdf" download>
                                <Button variant="white">Download CV</Button>
                            </a>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="area-info overflow-hidden" ref={infoRef}>
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
                            <Typography variant="para-M">
                                {user.description}
                            </Typography>
                        </Htmltext>
                    </div>

                    {/* Background Canvas */}
                    <div className="area-stats absolute w-full h-full top-0 left-0 -z-10 bg-black opacity-10">
                        <Canvas camera={{ position: [0, 1, 5] }}>
                            <ambientLight intensity={0.2} />
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={0.5}
                                color="#f5f5dc"
                            />
                            <OrbitControls
                                autoRotate
                                autoRotateSpeed={2}
                                enableZoom={false}
                            />
                            <Model scale={0.5} position={[0, 0.5, 0]} />
                        </Canvas>
                    </div>
                </div>
            </header>

            {/* Footer */}
            <div className="container">
                <Footer socials={socials} />
            </div>
        </>
    );
};

export default HomePage;
