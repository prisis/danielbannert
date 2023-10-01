import type { FC } from "react";

import Link from "./link";

const Footer: FC = () => (
    <footer aria-labelledby="footer-heading" className="relative w-full bg-zinc-900 py-64 text-zinc-100">
        <div className="mx:gap-4 container mx-auto gap-12 px-8 md:gap-4 lg:px-0">
            <h2 className="sr-only" id="footer-heading">
                Footer
            </h2>

            <div className="pb-32">
                <h3 className="mb-6 md:mb-4 text-6xl md:text-8xl font-bold">Thanks for stopping by.</h3>
                <p className="text-4xl md:text-7xl">Feel free to get in touch!</p>
            </div>

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
                    © 2021 Daniel Bannert.
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
        </div>
    </footer>
);

export default Footer;
