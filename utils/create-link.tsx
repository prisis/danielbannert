import type { MouseEventHandler, ReactElement } from "react";

import Link from "../components/link";

interface LinkProperties {
    external?: boolean;
    icon?: ReactElement;
    path: string;
    title: string;
}

const createLink = (
    { external, icon, path, title }: LinkProperties,
    showOnlyText?: boolean,
    onClick?: MouseEventHandler<unknown>,
    linkStyling?: {
        baseColor?: string;
        className?: string;
    }
): ReactElement => {
    if (icon && !showOnlyText) {
        return (
            <Link baseColor={linkStyling?.baseColor} className={linkStyling?.className} href={path} onClick={onClick} title={title}>
                <span className="sr-only">{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <Link baseColor={linkStyling?.baseColor} className={linkStyling?.className} external={external} href={path} onClick={onClick} title={title}>
            {title}
        </Link>
    );
};

export default createLink;
