import React from "react";
import Typography from "./Typography";
import { cn } from "../libs";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string | { text: string; className: string };
    error?: boolean;
}
const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>(
    ({ label, error, required, className, id, ...props }, ref) => {
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
                <textarea
                    {...props}
                    required={required}
                    id={id}
                    className={cn(
                        className,
                        "text-white outline-none border border-transparent border-b-primary-100 p-3 pr-8 font-ubuntu text-sm font-light placeholder:text-white/80 focus:border-primary-200 duration-300"
                    )}
                    ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
                ></textarea>
            </div>
        );
    }
);
export default Textarea;
