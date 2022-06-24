import type { FC } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import Link from "../components/link";
import ProjectList from "../components/project-list";

const IndexPage: FC = () => (
    <section className="relative">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 items-center">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 prose md:prose-lg lg:prose-xl dark:prose-invert">
                        <h1>Daniel Bannert</h1>
                        <p>
                            Hey, I am Daniel Bannert, a passionate self-taught Full Stack Software Engineer, Consultant and Open Source Enthusiast. <br />
                            <br /> I take great care in the experience, architecture, and code quality of the things I build. Collaboration is everything to me,
                            and a highlight of my career is when my work gets to become something that helps the community or industry as a whole.
                        </p>
                        <p className="mt-2">
                            Find me on{" "}
                            <Link href="https://github.com/prisis" title="GitHub">
                                GitHub
                            </Link>
                            ,{" "}
                            <Link href="https://twitter.com/_prisis_" title="Twitter">
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
                            <Link href="https://github.com/sponsors/prisis" title="GitHub Sponsor">
                                GitHub Sponsor
                            </Link>{" "}
                            or{" "}
                            <Link href="https://opencollective.com/_prisis_" title="open collective">
                                open collective
                            </Link>{" "}
                            to keep them sustainable.
                        </p>
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
    description:
        "I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful.",
};
