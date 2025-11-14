import React from "react";
import type { SideBarItem } from "../types";
import { cn } from "../libs";
import { Link } from "react-scroll";
import useAuth from "../context/auth";
import { useMediaQuery } from "react-responsive";
import { LuLogOut } from "react-icons/lu";
import Button from "./Button";
interface IProps {
    position?: "left" | "right";
    sideBarItems: SideBarItem[];
    className?: string;
}
const SideBar = React.forwardRef<HTMLDivElement, IProps>(
    ({ position, sideBarItems, className }, ref) => {
        const auth = useAuth();
        const isTablet = useMediaQuery({ maxWidth: 640 });
        return (
            <aside
                ref={ref}
                className={cn(
                    "border border-white rounded-4xl z-10 p-1 bg-dark-200 flex flex-row w-full justify-around md:justify-center   md:flex-col md:w-fit gap-1 top-[95%] -translate-y-full",
                    position === "left"
                        ? "fixed md:top-1/2 left-0 md:left-5"
                        : position === "right"
                        ? "fixed md:top-1/2  right-0 md:right-5"
                        : "",
                    className
                )}
            >
                {sideBarItems
                    .slice(0, isTablet ? 3 : sideBarItems.length)
                    .map(({ label, icon: Icon }) => (
                        <div className="relative" key={label}>
                            <Link
                                to={label}
                                smooth="true"
                                duration={500}
                                spy={true}
                                activeStyle={{
                                    background: "white",
                                    color: "var(--color-dark-200)",
                                }}
                                className="size-8 flex justify-center items-center cursor-pointer rounded-full peer text-white"
                            >
                                <Icon className="size-5" />
                            </Link>
                            <span className="absolute block p-0.75 bg-white text-dark-200 rounded-md min-w-fit text-center -right-[102%] top-1/2 translate-x-full opacity-0 -translate-y-1/3  peer-hover:opacity-100 peer-hover:-translate-y-1/2 duration-100 ">
                                {label}
                            </span>
                        </div>
                    ))}
                {isTablet && (
                    <Button
                        variant="primary"
                        className="p-0.75"
                        icon={<LuLogOut />}
                        onClick={() => {
                            auth.logout();
                            console.log("LOGOUT");
                        }}
                    />
                )}
            </aside>
        );
    }
);

export default SideBar;
