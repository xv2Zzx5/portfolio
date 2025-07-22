import React from "react";

import { cn } from "../libs";
import Typography from "./Typography";
type Variant = "primary" | "white" | "stroke" | "ghost";

const classesMap = {
    primary: `bg-primary-200 text-dark-200 active:scale-105 hover:-translate-y-0.5 transition-all px-2 py-1`,
    white: `bg-white text-dark-200 active:scale-105 hover:-translate-y-0.5 transition-all px-2 py-1`,
    stroke: `bg-dark-200 text-white border-2 border-primary-200 active:scale-105 hover:-translate-y-0.5 transition-all px-2 py-1`,
    ghost: `bg-transparent border-none w-fit`,
} satisfies Record<Variant, string>;
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    as?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
    variant,
    as,
    children,
    className,
    icon: Icon,
    ...props
}) => {
    const Component = as || "button";
    const classes = variant ? classesMap[variant] : "";
    const render =
        typeof children === "string" || typeof children === "number" ? (
            <Typography variant="button-U">{children}</Typography>
        ) : (
            children
        );
    return (
        <Component
            {...props}
            className={cn(
                classes,
                className,
                "rounded-lg flex justify-center items-center gap-3  outline-none  "
            )}
        >
            {render}
            {Icon && <span>{Icon} </span>}
        </Component>
    );
};

export default Button;
