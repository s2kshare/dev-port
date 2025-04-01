import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Button({
    onClick,
    onMouseOver,
    onMouseExit,
    className = "",
    style = {},
    children,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Elastic bounce and rotation animation
    const bounceAnimation = {
        scale: isClicked ? 1.7 : 1, // Scale up on click
        rotate: isClicked ? (Math.random() > 0.5 ? 60 : -60) : 0, // Slight random rotation on click
        transition: {
            type: "spring",
            stiffness: 300000,
            damping: 20000,
            duration: 0.2, // Adjust the timing of the bounce effect
        },
    };

    // Handle click animation effect
    const handleClick = (e) => {
        setIsClicked(true);
        if (onClick) onClick(e);
    };

    return (
        <motion.button
            onClick={(e) => handleClick(e)}
            className={`rounded-lg ease-in-out p-0.5 duration-150 transition-ease ${
                isHovered ? "cursor-pointer" : ""
            } ${className}`}
            style={style}
            animate={bounceAnimation} // Apply the animation constant here
            onAnimationComplete={() => {
                // Reset the click animation after it completes
                setIsClicked(false);
            }}
        >
            {children}
        </motion.button>
    );
}
