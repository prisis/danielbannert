import { renderToString } from "react-dom/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
// eslint-disable-next-line import/no-extraneous-dependencies
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";

import getPageTitle from "../src/helpers/get-page-title";
import PageShell from "../src/components/layout/page-shell";
import type { PageContext } from "./types";

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
    const { Page, pageProps } = pageContext;
    const view = renderToString(
        <PageShell pageContext={pageContext}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Page {...pageProps} />
        </PageShell>,
    );

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext;
    const title = getPageTitle(pageContext);
    const desc = (documentProps && documentProps.description) || "Personal Portfolio";

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
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
