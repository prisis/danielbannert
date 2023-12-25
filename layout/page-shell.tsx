import "../renderer/index.css";

import type { FC, PropsWithChildren } from "react";
import { StrictMode } from "react";
import AnimatedCursor from "react-animated-cursor";

import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { NavigationContextProvider } from "../context/use-navigation-context";
import { PageContextProvider } from "../context/use-page-context";
import type { PageContext } from "../renderer/types";

const PageShell: FC<PropsWithChildren<{ pageContext: PageContext }>> = ({ children, pageContext }) => (
    <StrictMode>
        <PageContextProvider pageContext={pageContext}>
            <NavigationContextProvider>
                <div className="relative min-h-screen w-full antialiased font-inter font-feature-default">
                    <Navigation />
                    <div className="relative mt-24 flex w-full flex-col items-center justify-center align-middle md:mt-32 2xl:mt-48">{children}</div>
                    <Footer />
                </div>
            </NavigationContextProvider>
            <AnimatedCursor
                innerScale={1}
                innerSize={8}
                /* eslint-disable-next-line @arthurgeron/react-usememo/require-usememo */
                innerStyle={{
                    backgroundColor: "var(--cursor-color)",
                }}
                outerAlpha={0}
                outerScale={2}
                outerSize={50}
                /* eslint-disable-next-line @arthurgeron/react-usememo/require-usememo */
                outerStyle={{
                    border: "1px solid var(--cursor-color)",
                }}
                showSystemCursor
            />
        </PageContextProvider>
    </StrictMode>
);

export default PageShell;
