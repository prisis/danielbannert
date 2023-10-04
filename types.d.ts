import type { IconType } from "@icons-pack/react-simple-icons/types";

export type MemoryCard = {
    icon?: IconType;
    id?: number;
    isFlipped: boolean;
    isMatched: boolean;
    name: string;
};
