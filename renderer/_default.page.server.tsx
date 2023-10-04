import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
// eslint-disable-next-line import/no-extraneous-dependencies
import { dangerouslySkipEscape, escapeInject } from "vike/server";

import PageShell from "../layout/page-shell";
import SharedHeader from "./shared-header";
import type { PageContextServer } from "./types.d";

const render = async (
    pageContext: PageContextServer,
): Promise<{
    documentHtml: unknown;
    pageContext: Record<string, unknown>;
}> => {
    // See https://vite-plugin-ssr.com/head
    const { Page, pageProps } = pageContext;

    // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!Page) {
        throw new Error("My render() hook expects pageContext.Page to be defined");
    }

    // eslint-disable-next-line @arthurgeron/react-usememo/require-usememo
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
const passToClient = ["pageProps", "documentProps", "someAsyncProps", "urlPathname"];

// eslint-disable-next-line import/no-unused-modules
export { passToClient, render };
