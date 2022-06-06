import type { FC } from "react";
import { useState } from "react";
import Link from "../link";

const Navigation: FC<{ navigation: { path: string; title: string }[] }> = ({ navigation = [] }) => {
    const [state, setState] = useState(false);

    return (
        <nav className="w-full z-20 relative">
            <div className="items-center px-4 mx-auto lg:flex lg:px-8">
                <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <a href="test">
                        <img src="https://www.floatui.com/logo.svg" width={120} height={50} alt="Float UI logo" />
                    </a>
                    <div className="lg:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border" type="button" onClick={() => setState(!state)}>
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
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <a href="test" className="text-gray-600 hover:text-indigo-600">
                                    Contact
                                </a>
                            </li>
                            <li className="mt-4 lg:mt-0">
                                <a
                                    href="test"
                                    className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                                >
                                    Login
                                </a>
                            </li>
                            <li className="mt-8 lg:mt-0">
                                <a href="test" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {navigation.map((item, index: number) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <li key={index} className="text-gray-600 hover:text-indigo-600">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
