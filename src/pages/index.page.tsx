import type { FC } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import Link from "../components/link";
import ProjectList from "../components/project-list";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => (
    <section className="relative">
        <div className="container mx-auto items-center space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="prose w-full space-y-6 pb-6 dark:prose-invert md:prose-lg lg:prose-xl sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                        <h1>Daniel Bannert</h1>
                        <p>
                            Hey, I am Daniel Bannert, a passionate self-taught Full Stack Software Engineer, Consultant and Open Source Enthusiast. <br />
                            <br /> I take great care in the experience, architecture, and code quality of the things I build. Collaboration is everything to me,
                            and a highlight of my career is when my work gets to become something that helps the community or industry as a whole.
                        </p>
                        <p className="mt-2">
                            Find me on{" "}
                            <Link external href="https://github.com/prisis" title="GitHub">
                                GitHub
                            </Link>
                            ,{" "}
                            <Link external href="https://twitter.com/_prisis_" title="Twitter">
                                Twitter
                            </Link>
                            <br />
                            Mail me at{" "}
                            <Link href="mailto:d.bannert@anolilab.de" title="Mail">
                                d.bannert@anolilab.de
                            </Link>
                        </p>
                        <p>
                            If you like my works, consider sponsoring me on{" "}
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
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-zenith pt-5 text-sm font-bold uppercase tracking-widest md:ml-5">Open Source Projects</h2>
                    <ProjectList
                        list={GitHubProjectList.filter((project) => project.stargazers_count >= 5)
                            .sort((a, b) => (BigInt(a.stargazers_count) > BigInt(b.stargazers_count) ? -1 : 0))
                            .slice(0, 5)
                            .map((project) => {
                                return {
                                    description: project.description,
                                    language: project.language,
                                    stars: project.stargazers_count,
                                    title: project.full_name,
                                    url: project.html_url,
                                };
                            })}
                        showMore
                        ulClasses="grid gap-4 lg:grid-cols-2 group mt-4 md:ml-5"
                        waterFall
                    />
                </div>
            </div>
        </div>
    </section>
);

// eslint-disable-next-line unicorn/prevent-abbreviations,import/no-unused-modules
export const documentProps = {
    description:
        "I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful.",
    pageUrl: "/",
    title: "Daniel Bannert",
};
