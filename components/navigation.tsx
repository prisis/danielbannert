import { DribbbleLogo, GithubLogo, Hamburger, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
// eslint-disable-next-line import/no-named-as-default
import clsx from "clsx";
import type { FC } from "react";
import { useRef, useState } from "react";

import { usePageContext } from "../context/use-page-context";
import createLink from "../utils/create-link";

const Navigation: FC = () => {
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={clsx(
                    "fixed bottom-0 left-0 top-auto z-20 w-full min-w-[240px] overflow-hidden bg-zinc-900 text-zinc-100 transition-all ease-in-out lg:top-0 lg:w-[calc(20vw+25px)] lg:rounded-br-2xl",
                    {
                        "h-[400px]": isOpen,
                        "h-16": !isOpen,
                    },
                )}
            >
                <div className="flex h-16 items-center justify-center">
                    <a className="ml-8" href="/" title="Daniel Bannert">
                        <svg className="h-8 w-8 hover:text-lime-500" fill="none" viewBox="0 0 159 171" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.500008 85.5L0.499992 171H13.3C112.4 171 115.9 170.9 123.5 169C145.3 163.4 158.4 146.5 158.4 124C158.4 107.9 152 95.2 139.8 87.1L133.2 82.6L137.3 80C143.1 76.3 148.7 69.8 151.9 63.1C154.3 58 155 56.4 155 45.5C155 34.1 154.3 33.2 151.3 26.7C147.2 18.1 139.6 10.4 131 6.20001C118.3 -0.0999875 120.5 1.52588e-05 10.8 1.52588e-05H0.500008V85.5ZM116.1 5.00002C119.1 5.60002 124.7 7.50001 128.5 9.40001C144.9 17.1 153.5 33.2 151 51.1C149.1 64.5 142.3 73.7 130.4 79.1C126.8 80.8 110.8 82.6 111 83.2C111.3 83.9 126.6 85.1 129.1 85.9C142.5 90.7 151.2 101 154.1 115.8C158.1 136.5 147.1 156.1 127.1 164.2C121.6 166.5 120.9 166.5 71 166.8L20.5 167L27.1 164.6C54.5 154.9 73.8 133.1 79.5 105.6C81.6 95.3 81.6 75.7 79.5 65.4C73.8 38.2 55.9 17.6 29 7.3L20.5 4.10001L65.6 4.00002C92.1 4.00002 113 4.40002 116.1 5.00002ZM12.7 6.50002C43.7 13.1 65.8 32 74 59C76.7 68.1 78.3 83 77.5 92C74.3 129.1 52.9 154.5 17.6 163.5C12.2 164.9 6.90001 166 5.90001 166C4.10001 166 4.00001 163.5 4.00001 85.5C4.00001 36.3 4.40001 5.00002 4.90001 5.00002C5.40001 5.00002 8.90001 5.70002 12.7 6.50002Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <div className="grow" />
                    <button
                        className="mr-6 inline-block"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        type="button"
                    >
                        <Hamburger className="h-8 w-8" />
                    </button>
                </div>
                <div
                    className={clsx("flex-col", {
                        flex: isOpen,
                        hidden: !isOpen,
                    })}
                >
                    <nav className="mx-8 mt-10 flex">
                        <ul className="flex flex-col gap-y-2">
                            <li>
                                {createLink(
                                    {
                                        external: false,
                                        path: "/",
                                        title: "Home",
                                    },
                                    true,
                                    () => setIsOpen(!isOpen),
                                )}
                            </li>
                            <li>
                                {createLink(
                                    {
                                        external: false,
                                        path: "/projects",
                                        title: "Projects",
                                    },
                                    true,
                                    () => setIsOpen(!isOpen),
                                )}
                            </li>
                            <li>
                                {createLink(
                                    {
                                        external: false,
                                        path: "/impress",
                                        title: "Impress",
                                    },
                                    true,
                                    () => setIsOpen(!isOpen),
                                )}
                            </li>
                        </ul>
                    </nav>
                    <div className="h-36 grow" />
                    <ul className={clsx("mx-8 flex items-center justify-start gap-8")}>
                        {socialLinks.current.map((item, index: number) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={index}>{createLink(item, false, () => {})}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {context.exports.documentProps?.navigationTitle && (
                <h1 className="fixed top-5 z-20 hidden text-xl font-semibold text-zinc-900 lg:left-[calc(20vw+45px)] lg:block">
                    {context.exports.documentProps.navigationTitle}
                </h1>
            )}
        </>
    );
};

export default Navigation;