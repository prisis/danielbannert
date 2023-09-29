import type { FC } from "react";

import Link from "./link";

const Footer: FC = () => (
    <footer aria-labelledby="footer-heading" className="relative">
        <h2 className="sr-only" id="footer-heading">
            Footer
        </h2>
        <div className="container mx-auto px-4 px-5 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <p className="mt-8 text-base leading-6">
                <Link boldText={false} external href="https://creativecommons.org/licenses/by-nc-sa/4.0/" underline>
                    CC BY-NC-SA 4.0
                </Link>{" "}
                © 2021 Daniel Bannert.
                <br />
                All rights reserved.
            </p>
            <nav className="flex flex-wrap">
                <Link href="/impress" key="footer-impress" title="Impress">
                    Impress
                </Link>
            </nav>
        </div>
    </footer>
);

export default Footer;
