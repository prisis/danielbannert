import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

type Classes = {
    links?: string;
    root?: string;
};

type NavigationContext = {
    classes: {
        links?: string;
        root?: string;
    };
    isTitleDisabled?: boolean;
    resetClasses: () => void;
    setClasses: (classes: Classes) => void;
    setIsTitleDisabled: (isTitleDisabled: boolean) => void;
};

const defaultClasses = {
    root: "bg-zinc-900",
};

const Context = createContext<NavigationContext>({
    classes: defaultClasses,
    isTitleDisabled: false,
    resetClasses: () => {},
    setClasses: () => {},
    setIsTitleDisabled: () => {},
});

export const NavigationContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [classes, setClasses] = useState<Classes>(defaultClasses);
    const [isTitleDisabled, setIsTitleDisabled] = useState(false);

    return (
        <Context.Provider
            /* eslint-disable-next-line react/jsx-no-constructed-context-values */
            value={{
                classes,
                isTitleDisabled,
                resetClasses: () => setClasses(defaultClasses),
                setClasses,
                setIsTitleDisabled,
            }}
        >
            {children}
        </Context.Provider>
    );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useNavigationContext = () => useContext(Context);
