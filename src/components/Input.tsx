import React, { useState } from "react";
import Typography from "./Typography";
import { cn } from "../libs";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import Button from "./Button";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | { text: string; className: string };
    error?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
    ({ label, error, required, className, id, type, ...props }, ref) => {
        const [currentType, setCurrentType] = useState<
            React.HTMLInputTypeAttribute | undefined
        >(type);
        const toggleTypePassword = () => {
            setCurrentType((old) => (old === "password" ? "text" : "password"));
        };
        return (
            <div>
                {label && (
                    <Typography
                        className={cn(
                            typeof label !== "string" ? label.className : "",
                            "text-primary-200 block mb-0.75"
                        )}
                        variant="label-U-M"
                        htmlFor={id}
                    >
                        {typeof label === "string" ? label : label.text}{" "}
                        {required && "*"}
                    </Typography>
                )}
                <div className="relative">
                    <input
                        {...props}
                        required={required}
                        id={id}
                        type={currentType}
                        className={cn(
                            className,
                            "outline-none border border-transparent border-b-primary-100 p-3 pr-8 font-ubuntu text-sm font-light placeholder:text-white/80 focus:border-primary-200 duration-300"
                        )}
                        ref={ref}
                    />
                    {type === "password" && (
                        <Button
                            className="absolute top-1/2 right-1 -translate-y-1/2 "
                            variant="ghost"
                            onClick={toggleTypePassword}
                        >
                            {currentType === "password" ? (
                                <LuEyeClosed />
                            ) : (
                                <LuEye />
                            )}
                        </Button>
                    )}
                </div>
            </div>
        );
    }
);

export default Input;
