import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { GrProjects } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Header from "./Header";
import { NavigationLinks } from "../data/NavigationLinks";

export default function Navbar() {
    const [navOpen, toggleNav] = useState(false);

    const handleNavOpen = (e) => {
        e.preventDefault();
        toggleNav(!navOpen);
    };

    const navContainerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger each child by 0.1s
                delayChildren: 0.2, // Delay before stagger starts
            },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }, // Stagger out in reverse order
        },
    };

    const navItemVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div className="h-20 flex items-center justify-center">
            {/* Backdrop */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ scale: 1, y: "-100%" }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 1, y: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full h-full bg-base-200"
                    />
                )}
            </AnimatePresence>

            {/* Navbar */}
            <motion.div className="fixed mt-8 w-5/6 md:w-1/2 flex gap-2 z-10 py-4 px-4 rounded-xl bg-base-400/20 shadow-lg ring-1 ring-black/5">
                {/*  */}
                <div className="nav-left flex-1 flex items-center">
                    <h1 className="whitespace-nowrap select-none">
                        dev-portfolio
                    </h1>
                </div>
                <div className="nav-mid flex-1"></div>
                <div className="nav-right flex-1 flex items-center justify-end">
                    <motion.div className="gap-4 flex">
                        {NavigationLinks.map((link) => {
                            if (link.name === "Home") return null;
                            return (
                                <Header
                                    key={link.name}
                                    className="md:flex hidden"
                                    size="sm"
                                >
                                    {link.name}
                                </Header>
                            );
                        })}
                        {/* Navigation Toggle Button */}
                        <Button
                            onClick={handleNavOpen}
                            className="hover:cursor-pointer"
                        >
                            <motion.div
                                key={navOpen ? "open" : "closed"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {navOpen ? <IoClose /> : <GrProjects />}
                            </motion.div>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Nav Open component */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        className="absolute top-0 flex-1 w-full h-screen flex flex-col justify-center px-8 md:px-64"
                        variants={navContainerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {/* Staggered Navigation Items */}
                        {NavigationLinks.map((link) => {
                            if (link.name === "Home") return null;
                            return (
                                <motion.div
                                    key={link.name}
                                    className="mb-5"
                                    variants={navItemVariants}
                                >
                                    <Header size="4xl">{link.name}</Header>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
