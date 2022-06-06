import type { FC, PropsWithChildren } from "react";

import { usePageContext } from "../context/use-page-context";

const Link: FC<PropsWithChildren<{ href?: string; className?: string }>> = ({
    href, className, children, ...other
}) => {
    const pageContext = usePageContext();

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <a href={href} className={[className, pageContext.urlPathname === href && "is-active"].filter(Boolean).join(" ")} {...other}>{children}</a>;
};

export default Link;
