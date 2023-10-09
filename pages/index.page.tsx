import { ArrowRight } from "@phosphor-icons/react";
import type { FC } from "react";
import { useEffect, useState } from "react";

import charuJainImageProperties from "../assets/charu-jain-vuipFCLsIKU-unsplash.jpg?jsx";
import Link from "../components/link";
import ProjectList from "../components/project-list";
// @ts-expect-error: file will be generated
import GitHubProjectList from "../data/github-projects-list.json";
import type { GithubProject } from "../types.d";

// eslint-disable-next-line import/no-unused-modules
export const Page: FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <div
                className="relative w-full bg-[#ECEFF0]"
                style={
                    isMounted
                        ? {
                              backgroundImage: "url('/assets/bg-pattern.png')",
                          }
                        : {}
                }
            >
                <div className="container relative z-10 mx-auto flex max-w-5xl flex-col gap-4 px-8 pb-5 pt-10 font-semibold uppercase md:flex-row 2xl:max-w-7xl 2xl:px-0">
                    <span className="text-zinc-400">Open Source Enthusiast</span>
                    <span className="text-zinc-500">Senior Fullstack Developer</span>
                </div>

                <h1 className="-ml-1.5 mb-8 w-full overflow-hidden text-[80px] font-bold uppercase text-white transition-all duration-1000 md:-mt-10 md:mb-0 md:text-[160px] lg:text-[130px] xl:-ml-3 xl:text-[140px] 2xl:text-[200px]">
                    Daniel Bannert
                </h1>

                <div className="container mx-auto flex max-w-5xl flex-col gap-4 px-8 pb-5 md:flex-row 2xl:max-w-7xl 2xl:px-0">
                    <h2 className="text-xl font-semibold uppercase text-zinc-400 transition-all duration-1000">
                        Senior Fullstack Developer with a Decade of Tailored Experience
                    </h2>
                </div>

                <div className="container mx-auto max-w-5xl 2xl:max-w-7xl">
                    <div className="my-32 hidden md:block">
                        <div className="group relative mx-auto h-24 w-24 rounded-full border-8 border-zinc-200 opacity-75">
                            <h3 className="sr-only">Scroll down</h3>
                            <div className="scroll-downs">
                                <div className="mouse-y group-hover:border-lime-600">
                                    <div className="scroller" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="p-8 uppercase text-zinc-500 md:pr-10 lg:absolute lg:bottom-0 lg:right-0 lg:p-12">Over 12 years of experience</p>
            </div>

            <div className="container mx-auto flex max-w-5xl flex-col gap-12 px-8 py-64 transition-all duration-1000 md:flex-row md:gap-4 2xl:max-w-7xl 2xl:px-0">
                <div className="w-full md:w-4/12">
                    <h3 className="text-3xl font-bold">
                        Who the <span className="pointer-events-none text-zinc-300">f@#%</span> <br /> is Daniel Bannert?
                    </h3>
                </div>
                <div className="prose prose-2xl prose-zinc w-full transition-all duration-1000 md:w-8/12">
                    <p>
                        Hey there! I’m Daniel, a self-taught Full Stack Software Engineer and a coding aficionado who’s been fervently turning coffee into code
                        for over a decade. My mission? To meticulously transform your big ideas into digital reality. With a strong knack for both front-end
                        finesse and back-end brawn, I’m all about building web solutions that are not just functional, but fantastic.
                    </p>
                    <p>
                        I am also an open-source enthusiast, deeply committed to the collaborative spirit that drives the tech community. I take immense care in
                        ensuring the experience, architecture, and code quality of the projects I handle are top-notch. Every highlight of my career is marked
                        by the moments when my work transcends individual goals and becomes a valuable asset for the community or industry as a whole.
                    </p>
                    <p>
                        I am passionate about what I do, and nothing excites me more than witnessing the transformative power of well-crafted code in action.
                        Ready to check my Resume out?
                    </p>

                    <a className="my-20 block no-underline" href="https://resume.danielbannert.com" rel="noreferrer" target="_blank" title="Resume">
                        <div className="prose prose-zinc flex gap-4">
                            <span className="relative z-10 font-bold uppercase before:absolute before:-left-6 before:-top-3.5 before:-z-10 before:inline-block before:h-14 before:w-14 before:rounded-full before:bg-zinc-200 before:transition-all before:hover:bg-lime-500">
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

            <div className="relative h-96 w-full overflow-hidden shadow-inner [clip-path:inset(0)]">
                <img
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...charuJainImageProperties}
                    alt="By Charu Jain"
                    className="fixed left-0 top-0 h-screen w-screen object-cover"
                    decoding="async"
                    loading="lazy"
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
                    list={(GitHubProjectList as GithubProject[])
                        .filter((project) => project.stargazers_count >= 5)
                        .sort((a, b) => (BigInt(a.stargazers_count) > BigInt(b.stargazers_count) ? -1 : 0))
                        .slice(0, 5)}
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
    navigationTitle: "Welcome",
    pageUrl: "/",
    title: "Daniel Bannert",
};
