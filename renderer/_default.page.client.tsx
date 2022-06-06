import type { Root } from "react-dom/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { useClientRouter } from "vite-plugin-ssr/client/router";
import NProgress from "nprogress";

import PageShell from "../src/components/layout/page-shell";
import getPageTitle from "../src/helpers/get-page-title";
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
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Page {...pageProps} />
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

        document.title = getPageTitle(pageContext);
    },
    onTransitionStart,
    onTransitionEnd,
});

hydrationPromise
    .catch((error) => {
        throw error;
    });
