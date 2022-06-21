import type { FC, PropsWithChildren, RefObject } from "react";

import style from "./index.module.css";

const Guides: FC<{ borderColorClass: string }> = ({ borderColorClass }) => (
    <div className="container mx-auto h-full relative flex">
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
        <div className={`flex-1 ${style.guides_guid} ${borderColorClass}`} />
    </div>
);

const GridBackground: FC<
    PropsWithChildren<{
        classes?: {
            main?: string;
            background?: string;
            borderColor?: string;
        };
        angle?: boolean;
        anglePosition?: "top" | "bottom" | "both";
        ref?: RefObject<any>;
    }>
> = ({ children, ref, classes, angle = false, anglePosition = "top" }) => {
    const classNames = {
        background: "bg-white dark:bg-zinc-800",
        main: "relative",
        borderColor: "border-zinc-200 dark:border-zinc-600", // rgb(66 71 112 / 0.09)
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
                        <div className="absolute h-full w-full top-0 left-0 pointer-events-none" aria-hidden="true">
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
