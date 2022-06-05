import type { FC, PropsWithChildren, RefObject } from "react";

import style from "./index.module.css";

const Guides: FC<{ borderColor: string }> = ({ borderColor }) => (
    <div className="container mx-auto h-full relative flex">
        <div className={`flex-1 ${style.guides_guid}`} style={{ borderLeftColor: borderColor }} />
        <div className={`flex-1 ${style.guides_guid}`} style={{ borderLeftColor: borderColor }} />
        <div className={`flex-1 ${style.guides_guid}`} style={{ borderLeftColor: borderColor }} />
        <div className={`flex-1 ${style.guides_guid}`} style={{ borderLeftColor: borderColor }} />
        <div className={`flex-1 ${style.guides_guid}`} style={{ borderLeftColor: borderColor }} />
    </div>
);

const GridBackground: FC<
PropsWithChildren<{
    classes?: {
        main?: string;
        background?: string;
    };
    borderColor?: string;
    angle?: boolean;
    anglePosition?: "top" | "bottom" | "both";
    ref?: RefObject<any>
}>
> = ({
    children, ref, classes, borderColor = "rgb(66 71 112 / 0.09)", angle = false, anglePosition = "top",
}) => {
    const classNames = {
        background: "bg-white",
        main: "relative",
        ...classes,
    };

    return (
        <div className={`${classNames.main} ${angle ? `angle_position_${anglePosition}` : ""} overflow-hidden`.trim()} ref={ref}>
            <div className="overflow-hidden">
                <div className="absolute h-full w-full overflow-visible">
                    <div
                        className={`relative h-full w-full top-0 left-0 overflow-hidden ${angle && anglePosition && style[`angle_position_${anglePosition}`]} ${
                            classNames.background
                        }`.trim()}
                    >
                        <div className="absolute h-full w-full top-0 left-0 pointer-events-none" aria-hidden="true">
                            <Guides borderColor={borderColor} />
                        </div>
                    </div>
                </div>
                {angle ? <div className={`relative z-10 ${style.angle_section}`}>{children}</div> : children}
            </div>
        </div>
    );
};

export default GridBackground;
