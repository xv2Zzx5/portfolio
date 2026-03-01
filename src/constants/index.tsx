import {
    LuCode,
    LuComputer,
    LuGithub,
    LuHouse,
    LuInstagram,
    LuUser,
} from "react-icons/lu";
import type { Social, NavItem, SideBarItem } from "../types";
import { FaDiscord } from "react-icons/fa";
export const navItems: NavItem[] = [
    {
        label: "Home",
        to: "/",
    },
];
export const socials: Social[] = [
    {
        label: "Instagram",
        icon: LuInstagram,
        url: "",
    },
    {
        label: "Discord",
        icon: FaDiscord,
        url: "",
    },
    {
        label: "Github",
        icon: LuGithub,
        url: "",
    },
];
export const sideBarItems: SideBarItem[] = [
    {
        label: "Home",
        icon: LuHouse,
    },
    {
        label: "About me",
        icon: LuUser,
    },
    {
        label: "Skills",
        icon: LuCode,
    },
    {
        label: "Works",
        icon: LuComputer,
    },
];
export const userInfo = {
    name: "Andrey",
    position: "Front-end Developer",
    email: "psibladestrinke@gmail.com",
    location: "Samara, Russia",
    workingStyle: "Freelance/Fulltime",
    stack: ["Html", "Css", "Javascript", "React"],
    cv: "text.pdf",
    description:
        "I help business to grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done, contact me",
    about: `Hello! 
My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
I like to have my perspective and belief systems challenged so that I see the world through new eyes.`,
};
