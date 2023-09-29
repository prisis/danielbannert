import type { FC } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import GridBackground from "../components/grid_background";
import Link from "../components/link";
import ProjectList from "../components/project-list";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => (
    <GridBackground>
        <section className="container relative mx-auto space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Open Source</h1>
            <p>
                I&apos;m following{" "}
                <Link className="text-lime-500 transition-colors" href="/codeofconduct">
                    Code of Conduct
                </Link>{" "}
                on all projects at im working on.
            </p>
            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">List of projects that I am proud of</p>
        </section>
        <section className="container relative mx-auto px-2">
            <ProjectList
                list={GitHubProjectList.filter((project) => project.stargazers_count >= 5)
                    .sort((a, b) => (BigInt(a.stargazers_count) > BigInt(b.stargazers_count) ? -1 : 0))
                    .map((project) => {
                        return {
                            description: project.description,
                            language: project.language,
                            stars: project.stargazers_count,
                            title: project.full_name,
                            url: project.html_url,
                        };
                    })}
                ulClasses="grid gap-4 md:grid-cols-2 lg:grid-cols-4 group mt-4"
            />
        </section>
    </GridBackground>
);

// eslint-disable-next-line unicorn/prevent-abbreviations,import/no-unused-modules
export const documentProps = {
    description: "List of projects that I am proud of",
    pageUrl: "/projects",
    title: "Projects - Daniel Bannert",
};
