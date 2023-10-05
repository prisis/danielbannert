// eslint-disable-next-line import/no-named-as-default
import clsx from "clsx";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import MemoryBg from "../../assets/memory-bg.svg?react";
import type { MemoryCard } from "../../types";

type CardProperties = {
    card: MemoryCard | undefined;
    disabled: boolean;
    onClick: (card: MemoryCard) => void;
    wrapperClasses: string;
};

const Card: FC<CardProperties> = ({ card, disabled, onClick, wrapperClasses }) => {
    if (card === undefined) {
        return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const Icon = card.icon;

    return (
        <div
            className={twMerge(
                clsx("border border-transparent", wrapperClasses, {
                    "border-lime-500 border": card.isMatched,
                }),
            )}
        >
            <button
                className={twMerge(
                    clsx("absolute inset-1 cursor-pointer rounded-lg bg-zinc-900 opacity-0 transition-all delay-0 ease-in", {
                        "opacity-100 delay-200 cursor-not-allowed z-20": card.isFlipped,
                    }),
                )}
                type="button"
            >
                <Icon className="mx-auto h-full w-12" title={card.name} />
            </button>
            <button
                className={twMerge(
                    clsx("absolute inset-1 z-10 rounded-lg bg-zinc-900 opacity-100 transition-all delay-200 ease-in", {
                        "opacity-0 hidden delay-200": card.isFlipped,
                    }),
                )}
                onClick={() => {
                    if (!disabled) {
                        onClick(card);
                    }
                }}
                type="button"
            >
                <MemoryBg className="mx-auto h-full w-12" />
            </button>
        </div>
    );
};

export default Card;
