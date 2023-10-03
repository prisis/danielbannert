import { ArrowRight, DribbbleLogo, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import type { FC } from "react";
import { useRef } from "react";

import GitHubProjectList from "../../data/github-projects-list.json";
import Link from "../components/link";
import ProjectList from "../components/project-list";
import createLink from "../utils/create-link";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => {
    const socialLinks = useRef([
        {
            external: true,
            icon: <GithubLogo className="mx-auto h-6 w-6" />,
            path: "https://github.com/prisis",
            title: "Github",
        },
        {
            external: true,
            icon: <TwitterLogo className="mx-auto h-6 w-6" />,
            path: "https://twitter.com/_prisis_",
            title: "Twitter",
        },
        {
            external: true,
            icon: <DribbbleLogo className="mx-auto h-6 w-6" />,
            path: "https://dribbble.com/danielbannert",
            title: "Dribbble",
        },
        {
            external: true,
            icon: <LinkedinLogo className="mx-auto h-6 w-6" />,
            path: "https://www.linkedin.com/in/daniel-bannert-b3635a99/",
            title: "LinkedIn",
        },
    ]);

    return (
        <>
            <div
                className="relative w-full"
                style={{
                    background: "url('/assets/bg-pattern.png')",
                }}
            >
                <div className="container relative z-10 mx-auto flex max-w-5xl flex-col gap-4 px-8 py-5 font-semibold uppercase md:flex-row 2xl:max-w-7xl 2xl:px-0">
                    <span className="text-zinc-400">Open Source Enthusiast</span>
                    <span className="text-zinc-500">Senior Fullstack Developer</span>
                </div>

                <h1 className="-ml-1.5 mb-8 w-full overflow-hidden text-[80px] font-bold uppercase text-white md:-ml-3 md:-mt-10 md:mb-0 md:text-[160px] lg:text-[200px]">
                    Daniel Bannert
                </h1>

                <div className="container mx-auto flex max-w-5xl flex-col gap-4 px-8 pb-5 font-semibold uppercase md:flex-row 2xl:max-w-7xl 2xl:px-0">
                    <span className="text-zinc-500">Frontend Developer</span>
                    <span className="text-zinc-400">Backend Developer</span>
                    <span className="text-zinc-500">Graphic Designer</span>
                </div>

                <div className="container mx-auto max-w-5xl 2xl:max-w-7xl">
                    <div className="my-32 flex items-end">
                        <div className="mx-auto hidden md:block">
                            <div className="group relative ml-72 h-24 w-24 rounded-full border-8 border-zinc-200 opacity-75">
                                <h3 className="sr-only">Scroll down</h3>
                                <div className="scroll-downs">
                                    <div className="mouse-y group-hover:border-lime-600">
                                        <div className="scroller" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-8 md:w-72 2xl:px-0">
                            <ul className="flex items-center justify-center space-x-6">
                                {socialLinks.current.map((item, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li className="flex-auto lg:my-0" key={index}>
                                        {createLink(item, false, () => {})}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="absolute bottom-0 right-0 p-12 pr-8 uppercase text-zinc-500 md:pr-10">Over 12 years of experience</p>
            </div>

            <div className="container mx-auto flex max-w-5xl flex-col gap-12 px-8 py-64 md:flex-row md:gap-4 2xl:max-w-7xl 2xl:px-0">
                <div className="w-full md:w-4/12">
                    <h3 className="text-3xl font-bold">
                        Who the <span className="pointer-events-none text-zinc-300">f@#%</span> <br /> is Daniel Bannert?
                    </h3>
                </div>
                <div className="prose prose-2xl prose-zinc w-full md:w-8/12">
                    <p>
                        I&apos;m a passionate self-taught Full Stack Software Engineer and Open Source Enthusiast. <br />I take great care in the experience,
                        architecture, and code quality of the things I build. Collaboration is everything to me, and a highlight of my career is when my work
                        gets to become something that helps the community or industry as a whole.
                    </p>

                    <a className="my-20 block no-underline" href="https://resume.danielbannert.com" rel="noreferrer" target="_blank" title="Resume">
                        <div className="prose prose-zinc flex gap-4">
                            <span className="relative z-10 hidden font-bold uppercase before:absolute before:-left-6 before:-top-3.5 before:-z-10 before:inline-block before:h-14 before:w-14 before:rounded-full before:bg-zinc-200 before:transition-all before:hover:bg-lime-500 md:block">
                                Check out my resume
                            </span>{" "}
                            <ArrowRight className="mt-1.5 h-4 w-4" />
                        </div>
                    </a>

                    <p className="mt-2 text-base">
                        Find me on{" "}
                        <Link external href="https://github.com/prisis" title="GitHub">
                            GitHub
                        </Link>
                        ,{" "}
                        <Link className="mr-2" external href="https://twitter.com/_prisis_" title="Twitter">
                            Twitter
                        </Link>
                        or Mail me at{" "}
                        <Link href="mailto:d.bannert@anolilab.de" title="Mail">
                            d.bannert@anolilab.de
                        </Link>
                    </p>
                </div>
            </div>

            <div className="relative h-96 w-full overflow-hidden shadow-inner">
                <div
                    className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('assets/charu-jain-vuipFCLsIKU-unsplash.jpg')" }}
                    title="Photo by Charu Jain"
                />
            </div>

            <div className="mx:gap-4 container mx-auto flex max-w-5xl gap-12 px-8 py-64 md:gap-4 2xl:max-w-7xl 2xl:px-0">
                <div className="w-full xl:w-4/12">
                    <h3 className="mb-4 text-3xl font-bold">Crafted with love.</h3>
                    <span>These are a selection of my open source projects.</span>
                </div>
            </div>

            <div className="w-full">
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
                    showMore
                />
            </div>
        </>
    );
};

// eslint-disable-next-line unicorn/prevent-abbreviations,import/no-unused-modules
export const documentProps = {
    description:
        "I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful.",
    pageUrl: "/",
    title: "Daniel Bannert",
};
