import { ArrowRight } from "@phosphor-icons/react";
import type { FC } from "react";

import type { GithubProject } from "../types";
import Link from "./link";

const ProjectList: FC<{
    list: GithubProject[];
    showMore?: boolean;
}> = ({ list, showMore = false }) => (
    <>
        <ul className="flex flex-col">
            {list.map(({ description, full_name: title, html_url: url, language }, index) => (
                <li className="group relative border-b border-zinc-100 bg-zinc-50 py-12 transition-all last:border-none hover:bg-white hover:py-16" key={title}>
                    <div
                        /* eslint-disable-next-line react/no-unknown-property */
                        after-dynamic-value={index + 1 < 10 ? `0${index + 1}` : index + 1}
                        className={[
                            "container mx-auto max-w-5xl lg:transition-all px-8 lg:pl-10 lg:group-hover:pl-20 2xl:max-w-7xl 2xl:pr-0",
                            "xl:before:absolute xl:before:left-0 xl:before:top-[55%] xl:before:inline-block xl:before:h-0.5 xl:before:w-[6%] xl:before:bg-zinc-400 xl:before:transition-all xl:before:group-hover:w-[9%]",
                            "xl:after:absolute xl:after:left-[9%] xl:after:transition-all xl:after:group-hover:left-[12%] xl:after:top-[49%] xl:after:content-[attr(after-dynamic-value)]",
                        ].join(" ")}
                    >
                        <a className="block py-5" href={url} rel="noopener noreferrer" target="_blank">
                            <div className="flex w-full items-center">
                                <div className="prose prose-zinc">
                                    <h3 itemProp="name">{title}</h3>
                                    <p className="text-xs font-bold uppercase">{language}</p>
                                    <p className="mt-4">{description}</p>
                                </div>
                                <div className="grow" />
                                <div className="prose prose-zinc flex gap-4">
                                    <span className="relative z-10 hidden font-bold uppercase before:absolute before:-left-6 before:-top-3.5 before:-z-10 before:inline-block before:h-14 before:w-14 before:rounded-full before:bg-zinc-200 before:transition-all before:group-hover:bg-lime-500 md:block">
                                        View Project
                                    </span>{" "}
                                    <ArrowRight className="mt-2 h-4 w-4" />
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            ))}
        </ul>

        <div className="mx:gap-4 container mx-auto flex max-w-5xl gap-12 px-8 pt-32 md:gap-4 2xl:max-w-7xl 2xl:px-0">
            <p className="prose prose-2xl prose-zinc mt-8">
                If you like my work, consider sponsoring me on{" "}
                <Link external href="https://github.com/sponsors/prisis" title="GitHub Sponsor">
                    GitHub Sponsor
                </Link>{" "}
                or{" "}
                <Link external href="https://opencollective.com/_prisis_" title="open collective">
                    open collective
                </Link>{" "}
                to keep them sustainable.
            </p>
        </div>

        {showMore && (
            <div className="mx:gap-4 container mx-auto flex max-w-5xl gap-12 px-8 pb-64 pt-32 md:gap-4 2xl:max-w-7xl 2xl:px-0">
                <Link className="mt-8 w-full" href="/projects">
                    <div className="w-full lg:w-4/12">
                        <span className="text-xs uppercase">There&apos;s more</span>
                        <h3 className="mt-4 flex text-3xl font-bold">
                            view all projects <ArrowRight className="ml-12 mt-2 h-6 w-6" />
                        </h3>
                    </div>
                </Link>
            </div>
        )}
    </>
);

export default ProjectList;
