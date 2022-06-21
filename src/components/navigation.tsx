import type { FC, ReactElement } from "react";
import { useState } from "react";

import Link from "./link";

type LinkProperties = { path: string; title: string; icon?: ReactElement };
type Links = LinkProperties[];

const createLink = ({ path, title, icon }: LinkProperties): ReactElement => {
    if (icon) {
        return (
            <Link href={path} title={title}>
                <span className="sr-only">{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <Link href={path} title={title}>
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
                        {/* <a href="/"> */}
                        {/*    <img src="https://www.floatui.com/logo.svg" width={120} height={50} alt="Float UI logo" /> */}
                        {/* </a> */}
                        <div className="lg:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                type="button"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
                            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
                        }`}
                    >
                        <div>
                            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                                {rightNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li key={index} className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                        {createLink(item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 ml-6">
                            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                {/* eslint-disable-next-line radar/no-identical-functions */}
                                {midNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li key={index} className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                        {createLink(item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
