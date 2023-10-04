import type { FC } from "react";

import Link from "../components/link";
import ProjectList from "../components/project-list";
import GitHubProjectList from "../data/github-projects-list.json";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => (
    <>
        <div className="relative h-96 w-full overflow-hidden shadow-inner">
            <div
                className="h-full w-full bg-cover bg-center bg-no-repeat md:bg-fixed"
                style={{ backgroundImage: "url('assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg')", backgroundPositionY: "85%" }}
                title="Photo by Clark Tibbs"
            />
        </div>
        <div className="container mx-auto flex gap-4 pb-64 pt-32">
            <div className="w-full md:w-4/12">
                <h1 className="mb-4 text-3xl font-bold">Open Source</h1>
                <p>
                    I&apos;m following{" "}
                    <Link className="text-lime-500 transition-colors" href="/codeofconduct">
                        Code of Conduct
                    </Link>{" "}
                    on all projects that im working on.
                </p>
                <p>List of projects that I am proud of</p>
            </div>
        </div>
        <div className="w-full pb-64">
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
            />
        </div>
    </>
);

// eslint-disable-next-line unicorn/prevent-abbreviations,import/no-unused-modules
export const documentProps = {
    description: "List of projects that I am proud of",
    pageUrl: "/projects",
    title: "Projects - Daniel Bannert",
};
