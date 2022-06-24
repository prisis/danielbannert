import type { FC } from "react";

import Link from "../link";
import style from "./index.module.css";

const ProjectList: FC<{
    list: { url: string; title: string; language: string; description: string; stars: number }[];
    showMore?: boolean;
    ulClasses?: string;
    waterFall?: boolean;
}> = ({
    list, showMore = false, ulClasses = "grid gap-4 md:grid-cols-2 group mt-4", waterFall = false,
}) => (
    <ul className={ulClasses}>
        {list.map(({
            url, title, language, description, stars,
        }, index) => {
            let waterFallClasses = "";

            if (waterFall) {
                waterFallClasses = index % 2 !== 0 ? "lg:mt-4" : "lg:mb-4";
            }

            return (
                <li
                    key={title}
                    className={`transition bg-white dark:bg-zinc-700 shadow-md duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg ${waterFallClasses} ${style.githubLogo}`}
                >
                    <a className="block p-5" href={url} target="_blank" rel="noopener noreferrer">
                        <p className="text-xs font-bold tracking-widest uppercase text-zenith">{language}</p>
                        <h3 className="mt-4 text-lg font-semibold leading-tight text-zenith" itemProp="name">
                            {title}
                        </h3>
                        <p className="mt-4 text-md">{description}</p>
                        <div className="flex items-center mt-2">
                            <div className="w-8 h-8 p-2">
                                <svg viewBox="0 0 46.4 46.4" aria-hidden="true" className="w-full h-full -mt-px fill-current">
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
                <Link href="/projects" className="border p-3 hover:border-lime-500 hover:border-2">
                    Show more
                </Link>
            </li>
        )}
    </ul>
);

export default ProjectList;
