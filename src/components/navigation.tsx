import { Dialog } from "@headlessui/react";
import type { DetailedHTMLProps, FC, HTMLAttributes, MouseEventHandler, ReactElement } from "react";
import { useState } from "react";

import Link from "./link";
import { ThemeSelect, ThemeToggle } from "./theme-mode-switch";

interface LinkProperties {
    external?: boolean;
    icon?: ReactElement;
    path: string;
    title: string;
}
type Links = LinkProperties[];

const createLink = ({ external, icon, path, title }: LinkProperties, showOnlyText?: boolean, onClick?: MouseEventHandler<any>): ReactElement => {
    if (icon && !showOnlyText) {
        return (
            <Link href={path} onClick={onClick} title={title}>
                <span className="sr-only">{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <Link external={external} href={path} onClick={onClick} title={title}>
            {title}
        </Link>
    );
};

const NavPopover: FC<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { display?: string; midNavigation?: Links; rightNavigation?: Links }
> = ({ className, display = "lg:hidden", midNavigation = [], rightNavigation = [], ...properties }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div className={[className, display].filter(Boolean).join(" ")} {...properties}>
            <button
                className="flex h-8 w-8 items-center justify-center text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                onClick={() => setIsOpen(true)}
                type="button"
            >
                <span className="sr-only">Navigation</span>
                <svg aria-hidden="true" fill="none" height="24" width="24">
                    <path
                        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </svg>
            </button>
            <Dialog as="div" className={["fixed z-50 inset-0", display].filter(Boolean).join(" ")} onClose={setIsOpen} open={isOpen}>
                <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-zinc-900/80" />
                <div className="dark:highlight-white/5 fixed right-4 top-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-zinc-900 shadow-lg dark:bg-zinc-800 dark:text-zinc-400">
                    <button
                        className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                        onClick={() => setIsOpen(false)}
                        type="button"
                    >
                        <span className="sr-only">Close navigation</span>
                        <svg aria-hidden="true" className="h-2.5 w-2.5 overflow-visible" viewBox="0 0 10 10">
                            <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                        </svg>
                    </button>
                    <ul className="space-y-6">
                        {/* eslint-disable-next-line radar/no-identical-functions */}
                        {midNavigation.map((item, index: number) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li className="my-8 lg:my-0" key={index}>
                                {createLink(item, true, () => setIsOpen(!isOpen))}
                            </li>
                        ))}
                        <li>
                            <hr />
                        </li>
                        {rightNavigation.map((item, index: number) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li className="my-8 flex-auto lg:my-0" key={index}>
                                {createLink(item, true, () => setIsOpen(!isOpen))}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-zinc-200/10">
                        <ThemeSelect />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

const Navigation: FC<{ midNavigation?: Links; rightNavigation?: Links }> = ({ midNavigation = [], rightNavigation = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full border-b border-zinc-200 bg-white dark:border-zinc-600 dark:bg-zinc-800">
            <nav className="container mx-auto overflow-hidden">
                <div className="mx-auto items-center px-4 lg:flex lg:px-8">
                    <div className="flex h-20 items-center justify-between py-3 lg:block lg:py-4">
                        <a href="/" title="Daniel Bannert">
                            <svg className="mt-2.5 h-8 w-8" fill="none" viewBox="0 0 159 171" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.500008 85.5L0.499992 171H13.3C112.4 171 115.9 170.9 123.5 169C145.3 163.4 158.4 146.5 158.4 124C158.4 107.9 152 95.2 139.8 87.1L133.2 82.6L137.3 80C143.1 76.3 148.7 69.8 151.9 63.1C154.3 58 155 56.4 155 45.5C155 34.1 154.3 33.2 151.3 26.7C147.2 18.1 139.6 10.4 131 6.20001C118.3 -0.0999875 120.5 1.52588e-05 10.8 1.52588e-05H0.500008V85.5ZM116.1 5.00002C119.1 5.60002 124.7 7.50001 128.5 9.40001C144.9 17.1 153.5 33.2 151 51.1C149.1 64.5 142.3 73.7 130.4 79.1C126.8 80.8 110.8 82.6 111 83.2C111.3 83.9 126.6 85.1 129.1 85.9C142.5 90.7 151.2 101 154.1 115.8C158.1 136.5 147.1 156.1 127.1 164.2C121.6 166.5 120.9 166.5 71 166.8L20.5 167L27.1 164.6C54.5 154.9 73.8 133.1 79.5 105.6C81.6 95.3 81.6 75.7 79.5 65.4C73.8 38.2 55.9 17.6 29 7.3L20.5 4.10001L65.6 4.00002C92.1 4.00002 113 4.40002 116.1 5.00002ZM12.7 6.50002C43.7 13.1 65.8 32 74 59C76.7 68.1 78.3 83 77.5 92C74.3 129.1 52.9 154.5 17.6 163.5C12.2 164.9 6.90001 166 5.90001 166C4.10001 166 4.00001 163.5 4.00001 85.5C4.00001 36.3 4.40001 5.00002 4.90001 5.00002C5.40001 5.00002 8.90001 5.70002 12.7 6.50002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <NavPopover midNavigation={midNavigation} rightNavigation={rightNavigation} />
                    </div>
                    <div
                        className={`flex-1 flex-row justify-between lg:flex lg:h-auto lg:overflow-visible lg:pb-0 lg:pr-0 ${
                            isOpen ? "h-screen pb-20 pr-4" : "hidden"
                        }`}
                    >
                        <div className="ml-6 flex-1">
                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                {/* eslint-disable-next-line radar/no-identical-functions */}
                                {midNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li className="my-8 lg:my-0" key={index}>
                                        {createLink(item, true, () => setIsOpen(!isOpen))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-b p-3 lg:border-0 lg:p-0" />
                        <div>
                            <ul className="ml-6 flex space-x-6 lg:flex-row">
                                {rightNavigation.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li className="my-8 flex-auto lg:my-0" key={index}>
                                        {createLink(item, false, () => setIsOpen(!isOpen))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ml-6">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
