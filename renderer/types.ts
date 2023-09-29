import type { ReactElement } from "react";
import type {
    // When using Client Routing https://vike.dev/clientRouting
    // PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
    // When using Server Routing
    PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
    PageContextBuiltInServer,
} from "vike/types";

export type Page = (pageProperties: PageProps) => ReactElement;
export type PageProps = Record<string, unknown>;

export type PageContextCustom = {
    Page: Page;
    exports: {
        documentProps?: {
            description?: string;
            title?: string;
        };
    };
    pageProps?: PageProps;
    urlPathname: string;
};

export type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
