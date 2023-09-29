import type { FC, PropsWithChildren, RefObject } from "react";

import style from "./index.module.css";

const Guides: FC<{ borderColorClass: string }> = ({ borderColorClass }) => (
    <div className="container relative mx-auto flex h-full">
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
    </div>
);

const GridBackground: FC<
    PropsWithChildren<{
        angle?: boolean;
        anglePosition?: "both" | "bottom" | "top";
        classes?: {
            background?: string;
            borderColor?: string;
            main?: string;
        };
        ref?: RefObject<any>;
    }>
> = ({ angle = false, anglePosition = "top", children, classes, ref }) => {
    const classNames = {
        background: "bg-white dark:bg-zinc-800",
        borderColor: "border-zinc-200 dark:border-zinc-600", // rgb(66 71 112 / 0.09)
        main: "relative",
        ...classes,
    };

    return (
        <div className={`${classNames.main} ${angle ? `angle_position_${anglePosition}` : ""} overflow-hidden`.trim()} ref={ref}>
            <div className="overflow-hidden">
                <div className="absolute h-full w-full overflow-visible">
                    <div
                        className={`relative h-full w-full topborder-b", "border-dashed",-0 left-0 overflow-hidden ${
                            angle && anglePosition && style[`angle_position_${anglePosition}`]
                        } ${classNames.background}`.trim()}
                    >
                        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-full">
                            <Guides borderColorClass={classNames.borderColor} />
                        </div>
                    </div>
                </div>
                {angle ? <div className={`relative z-10 ${style.angle_section}`}>{children}</div> : children}
            </div>
        </div>
    );
};

export default GridBackground;
