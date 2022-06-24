import type { FC } from "react";

import Link from "./link";

const Footer: FC = () => (
    <footer className="relative" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="px-5 py-12 container mx-auto md:flex md:items-center md:justify-between px-4 lg:px-8">
            <p className="mt-8 text-base leading-6">
                <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" boldText={false} underline>
                    CC BY-NC-SA 4.0
                </Link>{" "}
                © 2021 Daniel Bannert. All rights reserved.
            </p>
            <nav className="flex flex-wrap">
                <Link href="/impress" title="Impress" key="footer-impress">
                    Impress
                </Link>
            </nav>
        </div>
    </footer>
);

export default Footer;
