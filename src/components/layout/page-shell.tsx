import "../../../assets/index.css";

import type { FC, PropsWithChildren } from "react";
import { StrictMode } from "react";

import type { PageContext } from "../../../renderer/types";
import { PageContextProvider } from "../../context/use-page-context";

const PageShell: FC<PropsWithChildren<{ pageContext: PageContext }>> = ({ children, pageContext }) => (
        <StrictMode>
            <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
        </StrictMode>
);

export default PageShell;
