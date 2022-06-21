import type { AnchorHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

import { usePageContext } from "../context/use-page-context";

const Link: FC<PropsWithChildren<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & { boldText?: boolean }> = ({
    href,
    className = "text-gray-600 hover:text-lime-500 dark:text-white transition-colors",
    boldText,
    target,
    children,
    ...other
}) => {
    const pageContext = usePageContext();
    const linkTarget = href?.includes("http") ? "_blank" : ((target || "_self") as HTMLAttributeAnchorTarget);

    return (
        <a
            href={href}
            className={[className, pageContext.urlPathname === href && "text-lime-500 dark:text-lime-500", boldText ? "font-bold" : ""]
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
