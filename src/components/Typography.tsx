import React from "react";
import { cn } from "../libs";
type Variant =
    | "h1-U"
    | "h2-U"
    | "bgText-U"
    | "button-U"
    | "para-U"
    | "label-U-M"
    | "label-U-L"
    | "number-M"
    | "h2-M"
    | "para-M"
    | "code-M";
const classesMap = {
    "h1-U": `text-xl md:text-2xl  font-ubuntu font-normal`,
    "h2-U": `md:text-lg text-md font-ubuntu font-normal`,
    "bgText-U": `md:text-3xl text-2xl font-ubuntu font-normal`,
    "button-U": `text-sm font-ubuntu font-normal`,
    "para-U": `text-sm font-ubuntu font-light`,
    "label-U-L": `text-xs font-ubuntu font-light`,
    "label-U-M": `text-xs font-ubuntu font-medium`,
    "number-M": `text-xl font-ibm font-medium`,
    "h2-M": `text-lg font-ibm font-medium`,
    "para-M": `text-sm font-ibm font-normal`,
    "code-M": `text-xs font-ibm font-normal`,
} satisfies Record<Variant, string>;
interface IProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    as?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}
function getElementOfVariant(variant?: Variant): React.ElementType {
    if (variant?.startsWith("h1")) {
        return "h1";
    } else if (variant?.startsWith("h2")) {
        return "h2";
    } else if (variant?.startsWith("label")) {
        return "label";
    } else if (variant?.startsWith("button")) {
        return "span";
    } else {
        return "p";
    }
}
const Typography: React.FC<IProps> = ({
    variant,
    as,
    children,
    className,
    ...props
}) => {
    const Component = as || getElementOfVariant(variant);
    const classes = variant ? classesMap[variant] : "";
    return (
        <Component {...props} className={cn(classes, className)}>
            {children}
        </Component>
    );
};

export default Typography;
