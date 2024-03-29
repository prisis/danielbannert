import type { Root } from "react-dom/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import PageShell from "../layout/page-shell";
import SharedHeader from "./shared-header";
import type { PageContextClient } from "./types";

let root: Root;

const render = (pageContext: PageContextClient): void => {
    const { Page, isHydration, pageProps } = pageContext;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const container = document.querySelector("#page-view")!;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (isHydration) {
        root = hydrateRoot(container, page);
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!root) {
            root = createRoot(container);
        }

        root.render(page);
    }
};

// eslint-disable-next-line import/no-unused-modules,import/prefer-default-export
export { render };
