import type { IconType } from "@icons-pack/react-simple-icons/types";

export type MemoryCard = {
    icon?: IconType;
    id?: number;
    isFlipped: boolean;
    isMatched: boolean;
    name: string;
};

export type GithubProject = { description: string; full_name: string; html_url: string; language: string; stargazers_count: number };
