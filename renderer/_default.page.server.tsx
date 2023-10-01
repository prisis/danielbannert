import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { dangerouslySkipEscape, escapeInject } from "vike/server";

import PageShell from "../src/layout/page-shell";
import SharedHeader from "./shared-header";
import type { PageContextServer } from "./types";

// eslint-disable-next-line import/no-unused-modules,@typescript-eslint/explicit-module-boundary-types
export const render = async (pageContext: PageContextServer) => {
    // See https://vite-plugin-ssr.com/head
    const { Page, pageProps } = pageContext;

    // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
    if (!Page) {
        throw new Error("My render() hook expects pageContext.Page to be defined");
    }

    const helmetContext: { helmet?: HelmetServerState } = {};

    const view = renderToString(
        <PageShell pageContext={pageContext}>
            <HelmetProvider context={helmetContext}>
                <SharedHeader pageContext={pageContext} />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Page {...pageProps} />
            </HelmetProvider>
        </PageShell>,
    );

    const { helmet } = helmetContext;
    const head =
        (helmet as HelmetServerState).title.toString() +
        (helmet as HelmetServerState).priority.toString() +
        (helmet as HelmetServerState).meta.toString() +
        (helmet as HelmetServerState).link.toString() +
        (helmet as HelmetServerState).script.toString();

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(head)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(view)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    };
};

// See https://vike.dev/data-fetching
// eslint-disable-next-line import/no-unused-modules
export const passToClient = ["pageProps", "documentProps", "someAsyncProps", "urlPathname"];
