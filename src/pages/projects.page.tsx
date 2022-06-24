import type { FC } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import GridBackground from "../components/grid_background";
import Link from "../components/link";
import ProjectList from "../components/project-list";

const ImpressPage: FC = () => (
    <GridBackground>
        <section className="relative container mx-auto px-4 lg:px-8 py-12 mx-auto space-y-8 overflow-hidden sm:px-6">
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Open Source</h1>
            <p>
                I&apos;m following{" "}
                <Link href="/codeofconduct" className="text-lime-500 transition-colors">
                    Code of Conduct
                </Link>{" "}
                on all projects at im working on.
            </p>
            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">List of projects that I am proud of</p>
        </section>
        <section className="relative container mx-auto px-2">
            <ProjectList
                ulClasses="grid gap-4 md:grid-cols-2 lg:grid-cols-4 group mt-4"
                list={GitHubProjectList.filter((project) => project.stargazers_count >= 5)
                    .sort((a, b) => (BigInt(a.stargazers_count) > BigInt(b.stargazers_count) ? -1 : 0))
                    .map((project) => {
                        return {
                            title: project.full_name,
                            stars: project.stargazers_count,
                            url: project.html_url,
                            language: project.language,
                            description: project.description,
                        };
                    })}
            />
        </section>
    </GridBackground>
);

export default ImpressPage;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const documentProps = {
    title: "Projects - Daniel Bannert",
    description: "List of projects that I am proud of",
    pageUrl: "/projects",
};
