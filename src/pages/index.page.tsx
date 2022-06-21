import type { FC } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import ProjectList from "../components/project-list";

const IndexPage: FC = () => (
    <section className="relative">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 items-center">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-8xl">
                            <span className="block xl:inline">Daniel Bannert</span>
                        </h1>
                        <p className="mx-auto text-base sm:max-w-md lg:text-xl md:max-w-3xl">Hey, I am Daniel Bannert, ....</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:px-3">
                    <h2 className="pt-5 text-sm font-bold tracking-widest uppercase text-zenith">Open Source Projects</h2>
                    <ProjectList
                        ulClasses="grid gap-4 md:grid-cols-2 group mt-4"
                        waterFall
                        list={GitHubProjectList.filter((project) => project.stargazers_count >= 5)
                            .sort((a, b) => (BigInt(a.stargazers_count) > BigInt(b.stargazers_count) ? -1 : 0))
                            .slice(0, 5)
                            .map((project) => {
                                return {
                                    title: project.full_name,
                                    stars: project.stargazers_count,
                                    url: project.html_url,
                                    language: project.language,
                                    description: project.description,
                                };
                            })}
                        showMore
                    />
                </div>
            </div>
        </div>
    </section>
);

export default IndexPage;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const documentProps = {
    title: "Daniel Bannert",
};
