import { RocketLaunch } from "@phosphor-icons/react";
import type { FC } from "react";

import { MemoryProvider } from "../context/memory-context";
import Link from "./link";
import MemoryContainer from "./memory-game/memory-container";

const Footer: FC = () => (
    <footer aria-labelledby="footer-heading" className="relative w-full bg-zinc-900 pt-64 text-zinc-100">
        <div className="mx:gap-4 container mx-auto max-w-5xl gap-12 px-8 md:gap-4 2xl:max-w-7xl 2xl:px-0">
            <h2 className="sr-only" id="footer-heading">
                Footer
            </h2>

            <div className="pb-32 text-center">
                <h3 className="mb-6 text-6xl font-bold md:mb-4 md:text-8xl">Thanks for stopping by.</h3>
                <p className="text-4xl md:text-6xl">Before you leave, lets play a game.</p>
            </div>

            <MemoryProvider>
                <MemoryContainer />
            </MemoryProvider>

            <span>
                I&apos;m following{" "}
                <Link className="text-lime-500 transition-colors" href="/codeofconduct">
                    Code of Conduct
                </Link>{" "}
                on all projects at im working on.
            </span>

            <div className="md:flex md:items-center md:justify-between">
                <p className="mt-8 text-base leading-6">
                    <Link external href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                        CC BY-NC-SA 4.0
                    </Link>{" "}
                    © {new Date().getFullYear()} Daniel Bannert.
                    <br />
                    All rights reserved.
                    <br />
                </p>
                <nav className="flex flex-wrap">
                    <Link href="/impress" key="footer-impress" title="Impress">
                        Impress
                    </Link>
                </nav>
            </div>

            <div className="flex w-full items-center justify-center py-32">
                <button
                    onClick={() => {
                        window.scrollTo({
                            behavior: "smooth",
                            top: 0,
                        });
                    }}
                    type="button"
                >
                    <RocketLaunch className="h-8 w-8 animate-bounce hover:text-lime-500" />
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
