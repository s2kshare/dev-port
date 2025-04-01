import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

// Icons
import { GrProjects } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Header from "./Header";

export default function Navbar() {
    const [navOpen, toggleNav] = useState(false);

    const handleNavOpen = (e) => {
        e.preventDefault();
        toggleNav(!navOpen);
    };

    const navStates = {
        initial: {
            opacity: 0,
            y: 50,
            clipPath: "inset(0 0 100% 0)",
        },
        animate: {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0 0)",
        },
        exit: {
            opacity: 0,
            y: 20,
            clipPath: "inset(0 0 100% 0)",
        },
        transition: {
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
            clipPath: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            className="h-20 flex items-center justify-center"
            transition={{
                duration: 0.5,
            }}
        >
            {/* Backdrop */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-full h-full backdrop-blur-md"
                    />
                )}
            </AnimatePresence>

            {/* Navbar */}
            <motion.div className="fixed mt-8 w-5/6 md:w-1/2 flex gap-2 z-10 py-4 px-4 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
                <div className="nav-left flex-1 flex items-center">
                    <h1 className="whitespace-nowrap select-none ">
                        dev-portfolio
                    </h1>
                </div>
                <div className="nav-mid flex-1"></div>
                <div className="nav-right flex-1 flex items-center justify-end">
                    {/* Navigation Items */}
                    <motion.div className="gap-4 flex">
                        <Header
                            className="md:flex hidden "
                            size="sm"
                            children={"About"}
                        />
                        <Header
                            className="md:flex hidden "
                            size="sm"
                            children={"Projects"}
                        />
                        <Header
                            className="md:flex hidden "
                            size="sm"
                            children={"Blog"}
                        />
                        <Header
                            className="md:flex hidden "
                            size="sm"
                            children={"Contact"}
                        />
                        {/* Navigation Toggle Button */}
                        <Button
                            onClick={handleNavOpen}
                            className="hover:cursor-pointer "
                        >
                            <motion.div
                                key={navOpen ? "open" : "closed"}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                            >
                                {navOpen ? <IoClose /> : <GrProjects />}
                            </motion.div>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {navOpen && (
                    <motion.div className="absolute top-0 flex-1 w-full h-screen flex flex-col justify-center px-8 md:px-64">
                        {/* Navigation Items with Animated Entry */}
                        <motion.div
                            className="mb-5 "
                            initial={navStates.initial}
                            animate={navStates.animate}
                            exit={navStates.exit}
                            transition={navStates.transition}
                        >
                            <Header
                                className=""
                                size="5xl"
                                children={"About"}
                            />
                        </motion.div>

                        <motion.div
                            className="mb-5 "
                            initial={navStates.initial}
                            animate={navStates.animate}
                            exit={navStates.exit}
                            transition={navStates.transition}
                        >
                            <Header
                                className=""
                                size="5xl"
                                children={"Projects"}
                            />
                        </motion.div>

                        <motion.div
                            className="mb-5 "
                            initial={navStates.initial}
                            animate={navStates.animate}
                            exit={navStates.exit}
                            transition={navStates.transition}
                        >
                            <Header
                                className=" "
                                size="5xl"
                                children={"Blogs"}
                            />
                        </motion.div>

                        <motion.div
                            className="mb-5 "
                            initial={navStates.initial}
                            animate={navStates.animate}
                            exit={navStates.exit}
                            transition={navStates.transition}
                        >
                            <Header
                                className=" "
                                size="5xl"
                                children={"Contact"}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
