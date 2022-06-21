// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

import type { PageContext } from "../../renderer/types";

const Context = createContext<PageContext>(undefined as any);

// eslint-disable-next-line max-len
export const PageContextProvider: FC<PropsWithChildren<{ pageContext: PageContext }>> = ({ pageContext, children }) => (
    <Context.Provider value={pageContext}>{children}</Context.Provider>
);

export const usePageContext = () => useContext(Context);
