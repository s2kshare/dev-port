import React from "react";
import { motion } from "framer-motion";

export default function Header({
    bold = false,
    italic = false,
    lineThrough = false,
    className = "",
    size = "xl",
    children,
    ...props
}) {
    const classNames = [];

    if (bold) classNames.push("font-bold");
    if (italic) classNames.push("italic");
    if (lineThrough) classNames.push("line-through");
    if (className) classNames.push(className);

    // Used for tailwind
    const sizeMap = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
    };

    if (sizeMap[size] === undefined) {
        var temp = "text-[" + size + "]";
        classNames.push(temp);
    } else {
        classNames.push(sizeMap[size]);
    }

    return (
        <motion.h1 className={classNames.join(" ")} {...props}>
            {children}
        </motion.h1>
    );
}
