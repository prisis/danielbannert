import { SiJavascript, SiNextdotjs, SiPhp, SiReact, SiSymfony, SiTypescript, SiVite, SiVitest } from "@icons-pack/react-simple-icons";
import type { Dispatch, JSX, ReactNode, SetStateAction } from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { MemoryCard } from "../types.d";

const memoryCards: MemoryCard[] = [
    {
        icon: SiNextdotjs,
        isFlipped: false,
        isMatched: false,
        name: "Next.js",
    },
    {
        icon: SiReact,
        isFlipped: false,
        isMatched: false,
        name: "React",
    },
    {
        icon: SiVite,
        isFlipped: false,
        isMatched: false,
        name: "Vite",
    },
    {
        icon: SiVitest,
        isFlipped: false,
        isMatched: false,
        name: "Vitest",
    },

    {
        icon: SiTypescript,
        isFlipped: false,
        isMatched: false,
        name: "Typescript",
    },
    {
        icon: SiJavascript,
        isFlipped: false,
        isMatched: false,
        name: "Javascript",
    },
    {
        icon: SiPhp,
        isFlipped: false,
        isMatched: false,
        name: "PHP",
    },
    {
        icon: SiSymfony,
        isFlipped: false,
        isMatched: false,
        name: "Symfony",
    },
];

type MemoryProviderType = {
    children: ReactNode;
};

type MemoryContextType = {
    cardLength: number;
    cards: MemoryCard[];
    checkWin: () => boolean;
    disabledCards: boolean;
    handleCardItemClick: (card: MemoryCard) => void;
    setCards: Dispatch<SetStateAction<MemoryCard[]>>;
    startGame: () => void;
    turn: number;
};

const initialState = {
    cardLength: memoryCards.length * 2,
    cards: memoryCards,
    checkWin: () => false,
    disabledCards: false,
    handleCardItemClick: () => {},
    setCards: () => {},
    startGame: () => {},
    turn: 0,
};

// eslint-disable-next-line import/no-unused-modules
export const MemoryContext = createContext<MemoryContextType>(initialState);

export const MemoryProvider = ({ children }: MemoryProviderType): JSX.Element => {
    const [cards, setCards] = useState<MemoryCard[]>(initialState.cards);
    const [turn, setTurn] = useState<number>(initialState.turn);
    const [choiceOne, setChoiceOne] = useState<MemoryCard | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<MemoryCard | null>(null);
    const [disabledCards, setDisabledCards] = useState<boolean>(false);

    const checkWin = useCallback(() => cards.every((card) => card.isMatched), [cards]);

    /**
     * @description
     * This function is used to start the game
     * It shuffles the cards and sets the turn to 0
     * @returns void
     */
    const shuffleCards = () => {
        const shuffledCards = [...memoryCards, ...memoryCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => {
                return { ...card, id: Math.random() };
            });

        setCards(shuffledCards);
    };

    /**
     * @description
     * This function is used to handle the click event on the card
     * It flips the card and checks if the card is a match
     * @param card
     */
    const handleCardItemClick = useCallback(
        (card: MemoryCard) => {
            if (!disabledCards) {
                setCards((previousCard) =>
                    previousCard.map((c) => {
                        if (c.id === card.id) {
                            // eslint-disable-next-line no-param-reassign
                            card.isFlipped = true;

                            return card;
                        }

                        return c;
                    }),
                );
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
        },
        [choiceOne, disabledCards],
    );

    /**
     * @description
     * This function is used to reset the cards
     * @returns void
     */
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurn((previousTurn) => previousTurn + 1);
        setDisabledCards(false);
    };

    /**
     * @description
     * This function is used to start the game
     * It shuffles the cards and sets the turn to 0
     * @returns void
     */
    const startGame = useCallback(() => {
        shuffleCards();
        setTurn(0);
    }, []);

    /**
     * @description
     * This function is used to check if the cards are a match
     * @returns void
     */
    // eslint-disable-next-line sonarjs/cognitive-complexity
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabledCards(true);

            if (choiceOne.name === choiceTwo.name) {
                setCards((previousCards) =>
                    previousCards.map((card) => {
                        if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                            // eslint-disable-next-line no-param-reassign
                            card.isMatched = true;
                            // eslint-disable-next-line no-param-reassign
                            card.isFlipped = true;
                        }

                        return card;
                    }),
                );

                resetTurn();
            } else {
                setTimeout(() => {
                    setCards((previousCard) =>
                        previousCard.map((card) => {
                            if (!card.isMatched) {
                                return { ...card, isFlipped: false };
                            }
                            return card;
                        }),
                    );

                    resetTurn();
                }, 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    /**
     * @description
     * This function is used to check if the cards are a match
     * @returns void
     */
    useEffect(() => {
        shuffleCards();
    }, []);

    const value = useMemo(() => {
        return {
            cardLength: memoryCards.length * 2,
            cards,
            checkWin,
            disabledCards,
            handleCardItemClick,
            setCards,
            startGame,
            turn,
        };
    }, [cards, checkWin, disabledCards, handleCardItemClick, setCards, startGame, turn]);

    return <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>;
};

export const useMemoryCards: () => MemoryContextType = () => {
    const context = useContext<MemoryContextType>(MemoryContext);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!context) {
        throw new Error("useMemoryCards must be used within a MemoryProvider");
    }

    return context;
};
