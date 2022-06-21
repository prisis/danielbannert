import NProgress from "nprogress";
import type { Root } from "react-dom/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { useClientRouter } from "vite-plugin-ssr/client/router";

import getPageTitle from "../src/helpers/get-page-title";
import PageShell from "../src/layout/page-shell";
import type { PageContext } from "./types";

function onTransitionStart() {
    NProgress.start();
}
function onTransitionEnd() {
    NProgress.done();
}

let root: Root;
// eslint-disable-next-line react-hooks/rules-of-hooks
const { hydrationPromise } = useClientRouter({
    render(pageContext: PageContextBuiltInClient & PageContext) {
        const { Page, pageProps, documentProps, isHydration } = pageContext;

        const page = (
            <PageShell pageContext={pageContext}>
                <HelmetProvider>
                    <Helmet>
                        <title>{getPageTitle(pageContext)}</title>
                        <meta name="description" content={(documentProps && documentProps.description) || "Personal Portfolio"} />
                    </Helmet>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Page {...pageProps} />
                </HelmetProvider>
            </PageShell>
        );

        const container = document.querySelector("#page-view")!;

        if (isHydration) {
            root = hydrateRoot(container, page);
        } else {
            if (!root) {
                root = createRoot(container);
            }

            root.render(page);
        }
    },
    onTransitionStart,
    onTransitionEnd,
});

hydrationPromise.catch((error) => {
    throw error;
});
