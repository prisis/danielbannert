import type { FC } from "react";

import Link from "../link";
import style from "./index.module.css";

const ProjectList: FC<{
    list: { description: string; language: string; stars: number; title: string; url: string }[];
    showMore?: boolean;
    ulClasses?: string;
    waterFall?: boolean;
}> = ({ list, showMore = false, ulClasses = "grid gap-4 md:grid-cols-2 group mt-4", waterFall = false }) => (
    <ul className={ulClasses}>
        {list.map(({ description, language, stars, title, url }, index) => {
            let waterFallClasses = "";

            if (waterFall) {
                waterFallClasses = index % 2 === 0 ? "lg:mb-4" : "lg:mt-4";
            }

            return (
                <li
                    className={`bg-white shadow-md transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg dark:bg-zinc-700${waterFallClasses} ${style.githubLogo}`}
                    key={title}
                >
                    <a className="block p-5" href={url} rel="noopener noreferrer" target="_blank">
                        <p className="text-zenith text-xs font-bold uppercase tracking-widest">{language}</p>
                        <h3 className="text-zenith mt-4 text-lg font-semibold leading-tight" itemProp="name">
                            {title}
                        </h3>
                        <p className="text-md mt-4">{description}</p>
                        <div className="mt-2 flex items-center">
                            <div className="h-8 w-8 p-2">
                                <svg aria-hidden="true" className="-mt-px h-full w-full fill-current" viewBox="0 0 46.4 46.4">
                                    <path d="M21.6 2c.3-.6.9-1 1.6-1 .7 0 1.3.4 1.6 1l5.8 11.7c.3.5.8.9 1.4 1l12.8 1.9c.7.1 1.2.6 1.4 1.2.2.6 0 1.4-.5 1.8l-9.3 9.1c-.4.4-.6 1-.5 1.6l2.2 12.9c.1.7-.2 1.4-.7 1.8-.6.4-1.3.5-1.9.1L24 39c-.5-.3-1.1-.3-1.7 0l-11.5 6.1c-.6.3-1.3.3-1.9-.1-.6-.4-.8-1.1-.7-1.8l2.2-12.9c.1-.6-.1-1.2-.5-1.6l-9.4-9c-.5-.5-.7-1.2-.5-1.8.2-.6.8-1.1 1.4-1.2l12.9-1.9c.6-.1 1.1-.5 1.4-1L21.6 2z" />
                                </svg>
                            </div>
                            <span className="-mt-px text-xs font-semibold leading-none tracking-wider" data-gh-api={url}>
                                {stars}
                                <span className="sr-only">stars</span>
                            </span>
                        </div>
                    </a>
                </li>
            );
        })}

        {showMore && (
            <li className="flex items-center justify-center">
                <Link className="mt-8 border p-3 hover:border-2 hover:border-lime-500 lg:mt-0" href="/projects">
                    Show more
                </Link>
            </li>
        )}
    </ul>
);

export default ProjectList;
