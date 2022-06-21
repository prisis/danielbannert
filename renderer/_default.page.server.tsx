import { renderToString } from "react-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
// eslint-disable-next-line import/no-extraneous-dependencies
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";

import PageShell from "../src/layout/page-shell";
import SharedHeader from "./shared-header";
import type { PageContext } from "./types";

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
    // See https://vite-plugin-ssr.com/head
    const { Page, pageProps, documentProps } = pageContext;
    const helmetContext: { helmet?: HelmetServerState } = {};

    const view = renderToString(
        <PageShell pageContext={pageContext}>
            <HelmetProvider context={helmetContext}>
                <SharedHeader documentProps={documentProps} />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Page {...pageProps} />
            </HelmetProvider>
        </PageShell>,
    );

    const { helmet } = helmetContext;
    const head = (helmet as HelmetServerState).title.toString()
        + (helmet as HelmetServerState).priority.toString()
        + (helmet as HelmetServerState).meta.toString()
        + (helmet as HelmetServerState).link.toString()
        + (helmet as HelmetServerState).script.toString();

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

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "documentProps", "someAsyncProps"];
