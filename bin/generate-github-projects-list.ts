// eslint-disable-next-line import/no-unused-modules
import { writeFileSync } from "node:fs";
import { env, exit } from "node:process";

// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

import getRepo from "../lib/get-github-repo";

Object.assign(process.env, loadEnv("", process.cwd()));

const projects = env["VITE_GITHUB_PROJECTS"]?.split(",") ?? [];

// eslint-disable-next-line compat/compat
Promise.all(projects.map(async (project: string) => await getRepo(project)))
    // eslint-disable-next-line promise/always-return
    .then((repos) => {
        const preparedData = repos.map((repo) => {
            return {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                description: repo.description,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                full_name: repo.full_name,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                html_url: repo.html_url,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                language: repo.language,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                name: repo.name,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                stargazers_count: repo.stargazers_count,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                topics: repo.topics,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                watchers_count: repo.watchers_count,
            };
        });

        // eslint-disable-next-line no-console
        console.log("Writing to file...");

        writeFileSync("./data/github-projects-list.json", JSON.stringify(preparedData, undefined, 2));

        exit(0);
    })
    // eslint-disable-next-line unicorn/prefer-top-level-await
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        exit(1);
    });
