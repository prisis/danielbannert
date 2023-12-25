import { DribbbleLogo, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
// eslint-disable-next-line import/no-named-as-default
import clsx from "clsx";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useNavigationContext } from "../context/use-navigation-context";
import { usePageContext } from "../context/use-page-context";
import createLink from "../utils/create-link";

const listVariants: Variants = {
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
            bounce: 0,
            duration: 0.3,
            type: "spring",
        },
    },
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
            bounce: 0,
            delayChildren: 0.3,
            duration: 0.7,
            staggerChildren: 0.05,
            type: "spring",
        },
    },
};

const itemVariants: Variants = {
    closed: { opacity: 0, transition: { duration: 0.2 }, y: 20 },
    open: {
        opacity: 1,
        transition: { damping: 24, stiffness: 300, type: "spring" },
        y: 0,
    },
};

const Navigation: FC = () => {
    const mainLinks = useRef([
        {
            external: false,
            path: "/",
            title: "Home",
        },

        {
            external: false,
            path: "/projects",
            title: "Projects",
        },
        {
            external: true,
            path: "https://resume.danielbannert.com",
            title: "Resume",
        },
        {
            external: false,
            path: "/impress",
            title: "Impress",
        },
    ]);
    const socialLinks = useRef([
        {
            external: true,
            icon: <GithubLogo className="mx-auto h-6 w-6" />,
            path: "https://github.com/prisis",
            title: "Github",
        },
        {
            external: true,
            icon: <TwitterLogo className="mx-auto h-6 w-6" />,
            path: "https://twitter.com/_prisis_",
            title: "Twitter",
        },
        {
            external: true,
            icon: <DribbbleLogo className="mx-auto h-6 w-6" />,
            path: "https://dribbble.com/danielbannert",
            title: "Dribbble",
        },
        {
            external: true,
            icon: <LinkedinLogo className="mx-auto h-6 w-6" />,
            path: "https://www.linkedin.com/in/daniel-bannert-b3635a99/",
            title: "LinkedIn",
        },
    ]);

    const context = usePageContext();
    const { classes, isTitleDisabled } = useNavigationContext();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={twMerge(
                    clsx(
                        "fixed bottom-0 left-0 top-auto z-20 w-full min-w-[240px] overflow-hidden text-zinc-100 transition-all ease-in-out lg:top-0 lg:w-[calc(20vw+25px)] lg:rounded-br-2xl",
                        {
                            "h-[400px]": isOpen,
                            "h-16": !isOpen,
                        },
                        classes.root,
                    ),
                )}
            >
                <div className="flex h-16 items-center justify-center">
                    <a className="ml-8" href="/" title="Daniel Bannert">
                        <span className="sr-only">Daniel Bannert</span>
                        <svg className="h-8 w-8 hover:text-lime-500" fill="none" viewBox="0 0 159 171" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.500008 85.5L0.499992 171H13.3C112.4 171 115.9 170.9 123.5 169C145.3 163.4 158.4 146.5 158.4 124C158.4 107.9 152 95.2 139.8 87.1L133.2 82.6L137.3 80C143.1 76.3 148.7 69.8 151.9 63.1C154.3 58 155 56.4 155 45.5C155 34.1 154.3 33.2 151.3 26.7C147.2 18.1 139.6 10.4 131 6.20001C118.3 -0.0999875 120.5 1.52588e-05 10.8 1.52588e-05H0.500008V85.5ZM116.1 5.00002C119.1 5.60002 124.7 7.50001 128.5 9.40001C144.9 17.1 153.5 33.2 151 51.1C149.1 64.5 142.3 73.7 130.4 79.1C126.8 80.8 110.8 82.6 111 83.2C111.3 83.9 126.6 85.1 129.1 85.9C142.5 90.7 151.2 101 154.1 115.8C158.1 136.5 147.1 156.1 127.1 164.2C121.6 166.5 120.9 166.5 71 166.8L20.5 167L27.1 164.6C54.5 154.9 73.8 133.1 79.5 105.6C81.6 95.3 81.6 75.7 79.5 65.4C73.8 38.2 55.9 17.6 29 7.3L20.5 4.10001L65.6 4.00002C92.1 4.00002 113 4.40002 116.1 5.00002ZM12.7 6.50002C43.7 13.1 65.8 32 74 59C76.7 68.1 78.3 83 77.5 92C74.3 129.1 52.9 154.5 17.6 163.5C12.2 164.9 6.90001 166 5.90001 166C4.10001 166 4.00001 163.5 4.00001 85.5C4.00001 36.3 4.40001 5.00002 4.90001 5.00002C5.40001 5.00002 8.90001 5.70002 12.7 6.50002Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <div className="grow" />
                    <button
                        aria-expanded={isOpen}
                        aria-label="Main Menu"
                        className={clsx("hamburger mr-6 inline-block", {
                            "is-active": isOpen,
                        })}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        type="button"
                    >
                        <svg className="h-14 w-14" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <g strokeLinecap="round" strokeWidth="6.5">
                                <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="currentColor" />
                                <path
                                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                    fill="none"
                                    stroke="currentColor"
                                />
                                <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="currentColor" />
                                <path
                                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                    fill="none"
                                    stroke="currentColor"
                                />
                                <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="currentColor" />
                                <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="currentColor" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div
                    className={clsx("flex-col", {
                        flex: isOpen,
                        hidden: !isOpen,
                    })}
                >
                    <motion.nav animate={isOpen ? "open" : "closed"} className="mx-8 mt-10 flex" initial={false}>
                        <motion.ul className="flex flex-col gap-y-2" style={{ pointerEvents: isOpen ? "auto" : "none" }} variants={listVariants}>
                            {mainLinks.current.map((item, index: number) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <motion.li key={index} variants={itemVariants}>
                                    {createLink(item, true, () => setIsOpen(!isOpen), {
                                        baseColor: classes.links ?? "text-zinc-100",
                                    })}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                    <div className="h-32 grow" />
                    <motion.div animate={isOpen ? "open" : "closed"} className="mx-8" initial={false}>
                        <motion.ul
                            className="flex items-center justify-start gap-8"
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            variants={listVariants}
                        >
                            {socialLinks.current.map((item, index: number) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <motion.li key={index} variants={itemVariants}>
                                    {createLink(item, false, () => {}, {
                                        baseColor: classes.links ?? "text-zinc-100",
                                    })}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
            {!isTitleDisabled && context.exports.documentProps?.navigationTitle && (
                <h1 className="fixed top-5 z-20 hidden text-xl text-zinc-900 lg:left-[calc(20vw+45px)] lg:block">
                    {context.exports.documentProps.navigationTitle}
                </h1>
            )}
        </>
    );
};

export default Navigation;
