import type { MouseEventHandler, ReactElement } from "react";

import Link from "../components/link";

interface LinkProperties {
    external?: boolean;
    icon?: ReactElement;
    path: string;
    title: string;
}

const createLink = ({ external, icon, path, title }: LinkProperties, showOnlyText?: boolean, onClick?: MouseEventHandler<any>): ReactElement => {
    if (icon && !showOnlyText) {
        return (
            <Link href={path} onClick={onClick} title={title}>
                <span className="sr-only">{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <Link external={external} href={path} onClick={onClick} title={title}>
            {title}
        </Link>
    );
};

export default createLink;
