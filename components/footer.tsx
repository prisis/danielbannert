import { RocketLaunch } from "@phosphor-icons/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { MemoryProvider } from "../context/memory-context";
import { useNavigationContext } from "../context/use-navigation-context";
import Link from "./link";
import MemoryContainer from "./memory-game/memory-container";

const settings = { threshold: 0.5 };

const Footer: FC = () => {
    const [reference, inView] = useInView(settings);
    const { resetClasses, setClasses, setIsTitleDisabled } = useNavigationContext();

    useEffect(() => {
        if (inView) {
            setClasses({
                links: "text-zinc-900",
                root: "bg-white text-zinc-900",
            });
            setIsTitleDisabled(true);
        } else {
            resetClasses();
            setIsTitleDisabled(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <footer aria-labelledby="footer-heading" className="relative w-full bg-zinc-900 pt-64 text-zinc-100" ref={reference}>
            <div className="mx:gap-4 container mx-auto max-w-5xl gap-12 px-8 md:gap-4 2xl:max-w-7xl 2xl:px-0">
                <h2 className="sr-only" id="footer-heading">
                    Footer
                </h2>

                <div className="pb-32 text-center">
                    <h3 className="mb-6 text-5xl font-bold transition-all duration-1000 md:mb-4 md:text-7xl xl:text-8xl">Thanks for stopping by.</h3>
                    <p className="text-3xl transition-all duration-1000 md:text-5xl xl:text-6xl">Before you leave, lets play a game.</p>
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
                        <span className="font-light">in cahoots with</span> <span className="font-bold">anolilab.de</span>
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
                        title="Scroll to top"
                        type="button"
                    >
                        <span className="sr-only">Scroll to top</span>
                        <RocketLaunch className="h-8 w-8 animate-bounce hover:text-lime-500" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
