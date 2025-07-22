import React from "react";
import type { Social } from "../types";
import Typography from "./Typography";
import { cn } from "../libs";
interface IProps {
    socials: Social[];
    author?: string;
    license?: string;
    className?: string;
}
const Footer: React.FC<IProps> = ({ license, socials, author, className }) => {
    const sn = socials.map((social) => {
        const Icon = social.icon;
        return (
            <li key={social.label}>
                <a
                    href={social.url}
                    target="_blank"
                    className="flex p-0.5 bg-primary-100 rounded-full size-8 items-center justify-center"
                >
                    <span className="text-dark-200 text-base ">
                        <Icon />
                    </span>
                </a>
            </li>
        );
    });
    return (
        <footer
            className={cn(
                "bg-dark-200 border-t border-t-dark-100 p-1  text-white w-full ",
                className
            )}
        >
            <div className="flex  justify-between grow gap-5 flex-col lg:flex-row items-center">
                {license && <Typography variant="para-U">{license}</Typography>}
                <div className="flex gap-5 items-center justify-center text-center">
                    <Typography variant="para-U">privacy policy</Typography>
                    <Typography variant="para-U">terms & conditions</Typography>
                </div>
                <ul className="flex gap-5 -order-1 lg:order-none">{sn}</ul>
                {author && (
                    <Typography variant="para-U">
                        designed by {author}
                    </Typography>
                )}
            </div>
        </footer>
    );
};

export default Footer;
