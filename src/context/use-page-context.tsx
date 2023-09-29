// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

import type { PageContext } from "../../renderer/types";

const Context = createContext<PageContext>({} as PageContext);

export const PageContextProvider: FC<PropsWithChildren<{ pageContext: PageContext }>> = ({ children, pageContext }) => (
    <Context.Provider value={pageContext}>{children}</Context.Provider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePageContext = () => useContext(Context);
