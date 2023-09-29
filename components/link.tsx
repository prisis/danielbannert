import { ArrowSquareOut } from "@phosphor-icons/react";
import type { AnchorHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";

import { usePageContext } from "../context/use-page-context";

const Link: FC<
    PropsWithChildren<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & {
        activeColor?: string;
        baseColor?: string;
        boldText?: boolean;
        darkActiveColor?: string;
        darkColor?: string;
        darkHoverColor?: string;
        external?: boolean;
        hoverColor?: string;
        underline?: boolean;
    }
> = ({
    activeColor = "text-lime-500",
    baseColor = "text-zinc-500",
    boldText,
    children,
    className = "transition-colors",
    darkActiveColor = "dark:text-lime-500",
    darkColor = "dark:text-white",
    darkHoverColor = "dark:hover:text-lime-500",
    external = false,
    hoverColor = "hover:text-lime-500",
    href,
    target,
    underline = false,
    ...other
}) => {
    const pageContext = usePageContext();
    const linkTarget = href?.includes("http") ? "_blank" : target ?? "_self";

    return (
        <a
            className={[
                "transition-colors",
                underline ? "underline" : "",
                pageContext.urlPathname === href ? `${activeColor} ${darkActiveColor}` : `${baseColor}`,
                boldText ? "font-bold" : "",
                `${hoverColor}`,
                `${darkColor}`,
                `${darkHoverColor}`,
                className,
                external ? "inline-flex" : "",
            ]
                .filter(Boolean)
                .join(" ")}
            href={href}
            target={linkTarget}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {children}
            {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            {external && (
                <>
                    <span className="sr-only">Opens in a new tab</span>
                    <ArrowSquareOut aria-hidden="true" className="ml-1 h-4 w-4" />
                </>
            )}
        </a>
    );
};

export default Link;
