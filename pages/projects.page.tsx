import type { FC } from "react";

import clarkTibbsImageProperties from "../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg?jsx";
import Link from "../components/link";
import ProjectList from "../components/project-list";
import GitHubProjectList from "../data/github-projects-list.json";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => (
    <>
        <div className="relative h-48 w-full overflow-hidden bg-black shadow-inner [clip-path:inset(0)] md:h-96">
            <img
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...clarkTibbsImageProperties}
                alt="By Clark Tibbs"
                /* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */
                className="fixed -top-[18%] left-0 h-screen w-screen object-contain md:object-cover lg:top-20 xl:-top-5 2xl:-top-[15%]"
                decoding="async"
                loading="lazy"
            />
        </div>

        <div className="mx:gap-4 container mx-auto flex max-w-5xl gap-12 px-8 py-32 md:gap-4 2xl:max-w-7xl 2xl:px-0">
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
