import type { FC } from "react";

import Link from "./link";

const Footer: FC = () => (
    <footer className="relative">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap -mx-5 -my-2">
                <div className="px-5 py-2">
                    <Link href="/impress" title="Impress" key="footer-impress">
                        Impress
                    </Link>
                </div>
            </nav>
            <p className="mt-8 text-base leading-6">
                <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" boldText={false}>
                    CC BY-NC-SA 4.0
                </Link>{" "}
                © 2021 Daniel Bannert. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
