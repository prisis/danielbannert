import type { ReactNode } from "react";

// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
    Page: ReactNode;
    pageExports: {
        documentProps?: {
            title: string;
            description: string;
            pageUrl?: string;
        };
    };
    urlPathname: string;
    pageProps: Record<string, unknown>;
};
