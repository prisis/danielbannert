import type { ReactElement } from "react";
import type {
    // When using Client Routing https://vike.dev/clientRouting
    // PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
    // When using Server Routing
    PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
    PageContextBuiltInServer,
} from "vike/types";

type Page = (pageProperties: PageProperties) => ReactElement;
type PageProperties = Record<string, unknown>;

type PageContextCustom = {
    Page: Page;
    exports: {
        documentProps?: {
            description?: string;
            navigationTitle?: string;
            pageUrl?: string;
            title?: string;
        };
    };
    pageProps?: PageProperties;
    urlPathname: string;
};

export type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
