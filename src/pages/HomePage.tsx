import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import { navItems, sideBarItems, socials, userInfo } from "../constants";
import SideBar from "../components/SideBar";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import type { UserInfo } from "../types";
import Footer from "../components/Footer";
import { LuCodeXml, LuMail } from "react-icons/lu";
import Typography from "../components/Typography";
import { BsGeoAltFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import Button from "../components/Button";
import Htmltext from "../components/Htmltext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const sideBarRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);
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
        const timeline = gsap.timeline();
        timeline.fromTo(
            ".info-item",
            {
                opacity: 0,
                y: 30,
            },
            { opacity: 1, y: 0, duration: 1, ease: "power2.in", stagger: 0.3 }
        );
        timeline.fromTo(
            ".stack-item",
            {
                opacity: 0,
                x: 30,
            },
            { opacity: 1, x: 0, duration: 1, ease: "circ.in", stagger: 0.3 }
        );
        gsap.to(".scramble-hi", {
            duration: 1,
            scrambleText: "Hi",
            scrollTrigger: {
                trigger: infoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".scramble-Iam", {
            duration: 1,
            scrambleText: "I am ",
            scrollTrigger: {
                trigger: infoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".scramble-name", {
            duration: 1,
            scrambleText: user.name,
            scrollTrigger: {
                trigger: infoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".scramble-position", {
            duration: 1,
            scrambleText: user.position,
            scrollTrigger: {
                trigger: infoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
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
            <header className="relative overflow-hidden">
                <div className="container grid grid-header-layout text-white gap-10 py-10 ">
                    <div className="area-card">
                        {userInfo && (
                            <div
                                className="border-4 border-white rounded-tl-[100px] rounded-br-[100px] p-8 flex flex-col items-center gap-5 max-w-80 "
                                style={{
                                    boxShadow:
                                        "-5px -5px 2px var(--color-primary-200)",
                                }}
                            >
                                <div className="border-2 border-primary-200 rounded-full size-24 bg-primary-100 text-white p-5">
                                    <LuCodeXml className="size-full" />
                                </div>
                                <Typography variant="h2-M">
                                    {userInfo.name}
                                </Typography>
                                <Typography variant="code-M">
                                    {userInfo.position}
                                </Typography>
                                <ul>
                                    <li className="flex flex-row gap-1 info-item mt-1">
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
                                    <li className="flex flex-row gap-1 info-item mt-1">
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
                                    <li className="flex flex-row gap-1 info-item mt-1">
                                        <FaSuitcase />
                                        <Typography variant="code-M">
                                            {userInfo.workingStyle}
                                        </Typography>
                                    </li>
                                </ul>
                                <div className="flex gap-1 flex-wrap ">
                                    {userInfo.stack.map((item) => (
                                        <Typography
                                            className="stack-item bg-primary-200 rounded-xl px-1 py-0.5 text-black uppercase "
                                            key={item.name}
                                            variant="code-M"
                                        >
                                            {item.name}
                                        </Typography>
                                    ))}
                                </div>
                                <a href="/resume-sample.pdf" download>
                                    <Button variant="white">download CV</Button>
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="area-info" ref={infoRef}>
                        <Htmltext element="h1">
                            <Typography className="scramble-hi" variant="h1-U">
                                Hi
                            </Typography>
                            <Typography
                                variant="h1-U"
                                className="inline scramble-Iam"
                            >
                                I am{" "}
                            </Typography>
                            <Typography
                                variant="h1-U"
                                className="text-primary-200 inline scramble-name ml-[1rem]"
                            >
                                {userInfo.name},
                            </Typography>
                            <Typography
                                variant="h1-U"
                                className="scramble-position"
                            >
                                {userInfo.position}
                            </Typography>
                        </Htmltext>
                        <Htmltext element="p">
                            <Typography variant="para-M">
                                {userInfo.description}
                            </Typography>
                        </Htmltext>
                    </div>
                    <div className="area-stats absolute w-full h-full top-0 left-0 -z-10 bg-black opacity-10">
                        <Canvas camera={{ position: [0, 1, 5] }}>
                            <ambientLight intensity={0.2} />
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={0.5}
                                color={"#f5f5dc"}
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
            <div className="container">
                <Footer socials={socials} />{" "}
            </div>
        </>
    );
};

export default HomePage;
