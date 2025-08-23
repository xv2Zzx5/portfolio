import type { IconType } from "react-icons";
import { userInfo } from "../constants";
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
    icon: IconType,
    label: string, 
}
export type UserInfo = typeof userInfo 