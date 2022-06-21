import { writeFileSync } from "node:fs";
import { env, exit } from "node:process";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

import getRepo from "../lib/get-github-repo";

Object.assign(process.env, loadEnv("", process.cwd()));

const projects = env?.VITE_GITHUB_PROJECTS?.split(",") || [];

// eslint-disable-next-line compat/compat
Promise.all(projects.map(async (project) => getRepo(project)))
    // eslint-disable-next-line promise/always-return
    .then((repos) => {
        const preparedData = repos.map((repo) => {
            return {
                name: repo.name,
                full_name: repo.full_name,
                stargazers_count: repo.stargazers_count,
                description: repo.description,
                watchers_count: repo.watchers_count,
                language: repo.language,
                topics: repo.topics,
                html_url: repo.html_url,
            };
        });

        // eslint-disable-next-line no-console
        console.log("Writing to file...");

        writeFileSync("./data/github-projects-list.json", JSON.stringify(preparedData, undefined, 2));
        // eslint-disable-next-line unicorn/no-process-exit
        exit(0);
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        // eslint-disable-next-line unicorn/no-process-exit
        exit(1);
    });
