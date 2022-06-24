import type { FC, ReactElement } from "react";
import { useState } from "react";

import Link from "./link";
import ThemeModeSwitch from "./theme-mode-switch";

type LinkProperties = { path: string; title: string; icon?: ReactElement };
type Links = LinkProperties[];

const createLink = ({ path, title, icon }: LinkProperties, onClick): ReactElement => {
    if (icon) {
        return (
            <Link href={path} title={title} onClick={onClick}>
                <span className="sr-only">{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <Link href={path} title={title} onClick={onClick}>
            {title}
        </Link>
    );
};

const Navigation: FC<{ midNavigation?: Links; rightNavigation?: Links }> = ({ midNavigation = [], rightNavigation = [] }) => {
    const [state, setState] = useState(false);

    return (
        <div className="bg-white dark:bg-zinc-800 w-full relative border-b border-zinc-200 dark:border-zinc-600">
            <nav className="max-w-screen-xl mx-auto overflow-hidden">
                <div className="items-center px-4 mx-auto lg:flex lg:px-8">
                    <div className="flex items-center justify-between py-3 lg:py-4 lg:block h-20">
                        <a href="/" title="Daniel Bannert">
                            <svg className="w-8 h-8 mt-2.5" viewBox="0 0 159 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.500008 85.5L0.499992 171H13.3C112.4 171 115.9 170.9 123.5 169C145.3 163.4 158.4 146.5 158.4 124C158.4 107.9 152 95.2 139.8 87.1L133.2 82.6L137.3 80C143.1 76.3 148.7 69.8 151.9 63.1C154.3 58 155 56.4 155 45.5C155 34.1 154.3 33.2 151.3 26.7C147.2 18.1 139.6 10.4 131 6.20001C118.3 -0.0999875 120.5 1.52588e-05 10.8 1.52588e-05H0.500008V85.5ZM116.1 5.00002C119.1 5.60002 124.7 7.50001 128.5 9.40001C144.9 17.1 153.5 33.2 151 51.1C149.1 64.5 142.3 73.7 130.4 79.1C126.8 80.8 110.8 82.6 111 83.2C111.3 83.9 126.6 85.1 129.1 85.9C142.5 90.7 151.2 101 154.1 115.8C158.1 136.5 147.1 156.1 127.1 164.2C121.6 166.5 120.9 166.5 71 166.8L20.5 167L27.1 164.6C54.5 154.9 73.8 133.1 79.5 105.6C81.6 95.3 81.6 75.7 79.5 65.4C73.8 38.2 55.9 17.6 29 7.3L20.5 4.10001L65.6 4.00002C92.1 4.00002 113 4.40002 116.1 5.00002ZM12.7 6.50002C43.7 13.1 65.8 32 74 59C76.7 68.1 78.3 83 77.5 92C74.3 129.1 52.9 154.5 17.6 163.5C12.2 164.9 6.90001 166 5.90001 166C4.10001 166 4.00001 163.5 4.00001 85.5C4.00001 36.3 4.40001 5.00002 4.90001 5.00002C5.40001 5.00002 8.90001 5.70002 12.7 6.50002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                type="button"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:fill-white" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="currentColor"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 dark:fill-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" fill="currentColor" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-between flex-row lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
                            state ? "h-screen pb-20 pr-4" : "hidden"
                        }`}
                    >
                        <div className="flex-1 ml-6">
                            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                {/* eslint-disable-next-line radar/no-identical-functions */}
                                {midNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li key={index} className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                        {createLink(item, () => setState(!state))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-b p-3 lg:border-0 lg:p-0" />
                        <div>
                            <ul className="flex ml-6 space-x-6 lg:flex-row">
                                {rightNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li key={index} className="mt-8 mb-8 lg:mt-0 lg:mb-0 flex-auto">
                                        {createLink(item, () => setState(!state))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ml-6">
                            <ThemeModeSwitch />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
