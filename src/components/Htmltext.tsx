import React from "react";

import { cn } from "../libs";
import Typography from "./Typography";

interface IProps {
    children?: React.ReactNode;
    className?: string;
    element: string;
}

const Htmltext: React.FC<IProps> = ({
    children,
    className,
    element,
    ...props
}) => {
    const start = (
        <Typography
            variant="code-M"
            className={cn(className, "text-primary-100")}
        >
            {"<" + element + ">"}
        </Typography>
    );
    const end = (
        <Typography
            variant="code-M"
            className={cn(className, "text-primary-100")}
        >
            {"</" + element + ">"}
        </Typography>
    );
    return (
        <div {...props} className={cn(className)}>
            {" "}
            {start}
            <div className="p-1">{children}</div>
            {end}
        </div>
    );
};
export default Htmltext;
