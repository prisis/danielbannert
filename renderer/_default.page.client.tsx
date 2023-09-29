import NProgress from "nprogress";
import type { Root } from "react-dom/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import PageShell from "../src/layout/page-shell";
import SharedHeader from "./shared-header";
import type { PageContextClient } from "./types";

export const onTransitionStart = () => {
    NProgress.start();
};
export const onTransitionEnd = () => {
    NProgress.done();
};

let root: Root;

export const render = (pageContext: PageContextClient) => {
    const { Page, isHydration, pageProps } = pageContext;

    if (!Page) {
        throw new Error("Client-side render() hook expects pageContext.Page to be defined");
    }

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
};
