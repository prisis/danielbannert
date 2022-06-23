import NProgress from "nprogress";
import type { Root } from "react-dom/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { useClientRouter } from "vite-plugin-ssr/client/router";

import PageShell from "../src/layout/page-shell";
import SharedHeader from "./shared-header";
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
        const { Page, pageProps, isHydration } = pageContext;

        const page = (
            <PageShell pageContext={pageContext}>
                <HelmetProvider>
                    <SharedHeader pageContext={pageContext} />
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
