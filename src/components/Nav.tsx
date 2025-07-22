import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Typography from "./Typography";
import { LuSearch, LuX } from "react-icons/lu";
import { cn } from "../libs";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import type { Social, NavItem } from "../types";

interface IProps {
    socials: Social[];
    navItems: NavItem[];
    onSearch: (value: string) => void;
    logo: React.ReactNode;
    className?: string;
}
const Nav: React.FC<IProps> = ({
    socials,
    navItems,
    onSearch,
    logo,
    className,
}) => {
    const isTablet = useMediaQuery({ maxWidth: 640 });
    const [isSearchOpened, setIsSearchOpened] = useState<boolean>(!isTablet);
    const [search, setSearch] = useState<string>("");
    const navbar = navItems.map((navitem) => (
        <li key={navitem.to}>
            <Typography variant="para-M">
                <NavLink to={navitem.to}>{navitem.label}</NavLink>
            </Typography>
        </li>
    ));

    const sn = socials.map((social) => {
        const Icon = social.icon;
        return (
            <li key={social.label}>
                <a
                    href={social.url}
                    target="_blank"
                    className="flex gap-0.5 items-center"
                >
                    <span className="text-primary-200">
                        <Icon />
                    </span>
                    <Typography variant="para-M" className="hidden lg:inline">
                        {social.label}
                    </Typography>
                </a>
            </li>
        );
    });
    const handleSearch = () => {
        onSearch(search);
    };
    return (
        <nav
            className={cn(
                "bg-dark-200 p-1 flex justify-between items-center w-full relative",
                className
            )}
        >
            {logo}
            <div className="flex gap-10 items-center ">
                <ul className="flex gap-2">{navbar}</ul>
                <Button
                    className="text-white text-base md:hidden "
                    variant="ghost"
                    onClick={() => setIsSearchOpened((old) => !old)}
                >
                    {isSearchOpened ? <LuX /> : <LuSearch />}
                </Button>
                <div
                    className={cn(
                        "absolute -bottom-full md:relative md:bottom-0",
                        isSearchOpened ? "block" : "hidden"
                    )}
                >
                    <input
                        placeholder="search"
                        className="p-1 rounded-4xl border-none outline-none bg-white w-full pl-2 pr-8 text-dark-200 "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" ? handleSearch() : null
                        }
                    />
                    <Button
                        className="absolute top-1/2 -translate-y-1/2 right-1  text-dark-200 "
                        onClick={handleSearch}
                        variant="ghost"
                    >
                        <LuSearch className="text-md" />
                    </Button>
                </div>
                <ul className="sm:flex gap-2 hidden ">{sn}</ul>
            </div>
        </nav>
    );
};

export default Nav;
