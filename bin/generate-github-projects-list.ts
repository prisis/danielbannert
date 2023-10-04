// eslint-disable-next-line import/no-unused-modules
import { writeFileSync } from "node:fs";
import process from "node:process";

// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

import getRepo from "../lib/get-github-repo";

Object.assign(process.env, loadEnv("", process.cwd()));

const projects = process.env["VITE_GITHUB_PROJECTS"]?.split(",") ?? [];

// eslint-disable-next-line compat/compat
Promise.all(projects.map(async (project: string) => await getRepo(project)))
    // eslint-disable-next-line promise/always-return
    .then((repos) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const preparedData = repos.map((repo: any) => {
            return {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                description: repo.description,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                full_name: repo.full_name,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                html_url: repo.html_url,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                language: repo.language,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                name: repo.name,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                stargazers_count: repo.stargazers_count,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                topics: repo.topics,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                watchers_count: repo.watchers_count,
            };
        });

        // eslint-disable-next-line no-console
        console.log("Writing to file...");

        writeFileSync("./data/github-projects-list.json", JSON.stringify(preparedData, undefined, 2));

        // eslint-disable-next-line unicorn/no-process-exit
        process.exit(0);
    })
    // eslint-disable-next-line unicorn/prefer-top-level-await
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        // eslint-disable-next-line unicorn/no-process-exit
        process.exit(1);
    });
