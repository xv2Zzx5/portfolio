import type { IconType } from "react-icons";
export type Social = {
    icon: IconType;
    label: string;
    url: string;
};
export type NavItem = {
    label: string;
    to: string;
};
export type SideBarItem = {
    icon: IconType;
    label: string;
};
export type UserInfo = {
    name: string;
    position: string;
    email: string;
    location: string;
    workingStyle: string;
    stack: string[]
    cv: string;
    description: string;
    about: string;
};
