import type {
    AnchorHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributeAnchorTarget, PropsWithChildren,
} from "react";

import { usePageContext } from "../context/use-page-context";

const Link: FC<
PropsWithChildren<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & {
    boldText?: boolean;
    baseColor?: string;
    hoverColor?: string;
    darkColor?: string;
    darkHoverColor?: string;
    underline?: boolean;
    activeColor?: string;
    darkActiveColor?: string;
}
> = ({
    href,
    className = "transition-colors",
    baseColor = "text-gray-600",
    hoverColor = "hover:text-lime-500",
    darkColor = "dark:text-white",
    darkHoverColor = "dark:hover:text-lime-500",
    activeColor = "text-lime-500",
    darkActiveColor = "dark:text-lime-500",
    boldText,
    underline = false,
    target,
    children,
    ...other
}) => {
    const pageContext = usePageContext();
    const linkTarget = href?.includes("http") ? "_blank" : ((target || "_self") as HTMLAttributeAnchorTarget);

    return (
        <a
            href={href}
            className={[
                "transition-colors",
                underline ? "underline" : "",
                pageContext.urlPathname === href ? `${activeColor} ${darkActiveColor}` : `${baseColor}`,
                boldText ? "font-bold" : "",
                `${hoverColor}`,
                `${darkColor}`,
                `${darkHoverColor}`,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            target={linkTarget}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {children}
        </a>
    );
};

export default Link;
