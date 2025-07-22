import React from "react";
import type { SideBarItem } from "../types";
import { cn } from "../libs";
import { Link } from "react-scroll";
interface IProps {
    position?: "left" | "right";
    sideBarItems: SideBarItem[];
    className?: string;
}
const SideBar: React.FC<IProps> = ({ position, sideBarItems, className }) => {
    return (
        <aside
            className={cn(
                "border border-white rounded-4xl p-1 bg-dark-200 flex flex-col gap-2 fixed top-1/2 left-0",
                className
            )}
        >
            {sideBarItems.map(({ label, icon: Icon }) => (
                <Link
                    to={label}
                    smooth="true"
                    duration={500}
                    key={label}
                    spy={true}
                    activeStyle={{ background: "white" }}
                    className="size-6 flex justify-center items-center cursor-pointer"
                >
                    <Icon className="size-4" />
                </Link>
            ))}
        </aside>
    );
};

export default SideBar;
