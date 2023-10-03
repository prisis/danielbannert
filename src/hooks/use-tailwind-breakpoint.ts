
import { useMediaQuery } from "react-responsive";
import type { ScreensConfig } from "tailwindcss/types/config";

const breakpoints = {
    "2xl": "1536px",
    lg: "1024px",
    md: "768px",
    sm: "640px",
    xl: "1280px",
    xs: "480px",
} as ScreensConfig;

type BreakpointKey = "2xl" | "lg" | "md" | "sm" | "xl" | "xs";

/**
 * @desc The 'useBreakpoint()' hook is used to get the current
 *       screen breakpoint based on the TailwindCSS config.
 *
 * @usage
 *    import { useBreakpoint } from "@/hooks/useBreakpoint";
 *
 *    const { isMd } = useBreakpoint("md");
 *    const { isLg } = useBreakpoint("lg");
 *    const { is2Xl } = useBreakpoint("2xl");
 *    console.log({ isMd, isLg, is2Xl });
 */
const useBreakpoint = <K extends BreakpointKey>(breakpointKey: K): Record<`is${Capitalize<K>}`, boolean> & Record<K, number> => {
    const breakpointValue = breakpoints[breakpointKey as keyof ScreensConfig];
    const bool = useMediaQuery({
        query: `(min-width: ${breakpointValue as string})`,
    });
    const capitalizedKey = (breakpointKey[0] as string).toUpperCase() + breakpointKey.slice(1);

    type Key = `is${Capitalize<K>}`;

    return {
        [`is${capitalizedKey}`]: bool,
        [breakpointKey]: Number(String(breakpointValue).replaceAll(/\D/gu, "")),
    } as Record<K, number> & Record<Key, boolean>;
};

export default useBreakpoint;
