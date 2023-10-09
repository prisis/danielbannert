import { GameController } from "@phosphor-icons/react";
// eslint-disable-next-line import/no-named-as-default
import clsx from "clsx";
import type { FC } from "react";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useMemoryCards } from "../../context/memory-context";
import useTailwindBreakpoint from "../../hooks/use-tailwind-breakpoint";
import Card from "./card";
import ConfettiAnimation from "./confetti-animation";

const getRandomNumber = (counterSize: number, outputSize: number): Map<number, number> => {
    if (outputSize > counterSize) {
        throw new Error("Output size cannot be greater than counter size.");
    }

    const randomNumbers = new Set<number>();
    const mappedNumbers = new Map<number, number>();

    // eslint-disable-next-line no-loops/no-loops
    while (randomNumbers.size !== outputSize) {
        const randomValue = Math.floor(Math.random() * counterSize) + 1;

        if (!randomNumbers.has(randomValue)) {
            randomNumbers.add(randomValue);
            mappedNumbers.set(randomValue, randomNumbers.size - 1);
        }
    }

    return mappedNumbers;
};

const getBorderClasses = (breakpoint: "2xl" | "lg" | "md" | undefined, position: number, index: number, fieldsLength: number): Record<string, boolean> => {
    switch (breakpoint) {
        case "2xl": {
            return {
                "border-b border-b-zinc-600": position < fieldsLength - 9,
                "border-l-0": [0, 10, 20, 30, 40].includes(index),
            };
        }
        case "lg": {
            return {
                "border-b border-b-zinc-600": position < fieldsLength - 6,
                "border-l-0": [0, 7, 14, 21, 28, 35].includes(index),
            };
        }
        case "md": {
            return {
                "border-b border-b-zinc-600": position < fieldsLength - 4,
                "border-l-0": [0, 5, 10, 15, 20, 25, 30].includes(index),
            };
        }
        default: {
            return {
                "border-b border-b-zinc-600": position < fieldsLength - 2,
                "border-l-0": [0, 3, 6, 9, 12, 15].includes(index),
            };
        }
    }
};

const MemoryContainer: FC = () => {
    const { cardLength, cards, checkWin, disabledCards, handleCardItemClick, startGame, turn } = useMemoryCards();
    const [newGame, setNewGame] = useState<boolean>(false);
    const [fields, setFields] = useState<(number | undefined)[] | undefined>();
    const [breakpoint, setBreakpoint] = useState<"2xl" | "lg" | "md" | undefined>(undefined); // ["md", "lg", "2xl"
    const { isMd } = useTailwindBreakpoint("md");
    const { isLg } = useTailwindBreakpoint("lg");
    const { is2xl } = useTailwindBreakpoint("2xl");

    useEffect(() => {
        let generatedFields = Array.from({ length: 18 });

        if (is2xl) {
            generatedFields = Array.from({ length: 50 });
            setBreakpoint("2xl");
        } else if (isLg) {
            generatedFields = Array.from({ length: 42 });
            setBreakpoint("lg");
        } else if (isMd) {
            generatedFields = Array.from({ length: 35 });
            setBreakpoint("md");
        }

        const randomMap = getRandomNumber(generatedFields.length, cardLength);

        setFields(
            generatedFields.map((_, index) => {
                if (randomMap.has(index + 1)) {
                    return randomMap.get(index + 1);
                }

                return undefined;
            }),
        );

        setNewGame(false);
    }, [setFields, cardLength, newGame, setNewGame, is2xl, isLg, isMd]);

    const handleNewGame = useCallback(() => {
        startGame();
        setNewGame(true);
    }, [startGame, setNewGame]);

    if (checkWin()) {
        return (
            <div className="h-96 w-full">
                <ConfettiAnimation />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center text-4xl font-bold">You Win!</h2>

                    <button className="group mt-8 flex items-center justify-center gap-4" onClick={handleNewGame} type="button">
                        <span className="text-zinc-500 group-hover:text-zinc-100 group-hover:transition-colors">Reset the Game</span>{" "}
                        <GameController className="h-6 w-6 group-hover:text-lime-500 group-hover:transition-colors" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {fields === undefined ? (
                <div className="relative mb-12 grid w-full rounded-lg border border-zinc-600">
                    <div className="flex h-[485px] w-full items-center justify-center md:h-[564px] 2xl:h-[564px]">
                        <div className="loader p-12" />
                    </div>
                </div>
            ) : (
                <div className="relative mb-12 grid w-full grid-cols-3 rounded-lg border border-zinc-600 transition-all duration-1000 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10">
                    {fields.map((value, index) => {
                        const position = index + 1;

                        const sharedClasses = twMerge(
                            clsx("relative border-l border-l-zinc-600 p-10 text-center 2xl:p-14", getBorderClasses(breakpoint, position, index, fields.length)),
                        );

                        if (value !== undefined) {
                            return (
                                <Card
                                    card={cards[value as number]}
                                    disabled={disabledCards}
                                    key={position}
                                    onClick={handleCardItemClick}
                                    position={position}
                                    wrapperClasses={sharedClasses}
                                />
                            );
                        }

                        return <div className={sharedClasses} key={position} />;
                    })}
                </div>
            )}

            <div className="flex w-full pb-24">
                <div>Turn: {turn}</div>
                <div className="grow" />
                <button className="group flex items-center justify-center gap-4" onClick={handleNewGame} type="button">
                    <span className="text-zinc-500 group-hover:text-zinc-100 group-hover:transition-colors">Reset the Game</span>{" "}
                    <GameController className="h-6 w-6 group-hover:text-lime-500 group-hover:transition-colors" />
                </button>
            </div>
        </>
    );
};

export default MemoryContainer;
