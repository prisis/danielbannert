import { writeFileSync } from "node:fs";
import { env, exit } from "node:process";

// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

import getRepo from "../lib/get-github-repo";

Object.assign(process.env, loadEnv("", process.cwd()));

const projects = env.VITE_GITHUB_PROJECTS?.split(",") || [];

// eslint-disable-next-line compat/compat
Promise.all(projects.map(async (project: string) => await getRepo(project)))
    // eslint-disable-next-line promise/always-return
    .then((repos) => {
        const preparedData = repos.map((repo) => {
            return {
                description: repo.description,
                full_name: repo.full_name,
                html_url: repo.html_url,
                language: repo.language,
                name: repo.name,
                stargazers_count: repo.stargazers_count,
                topics: repo.topics,
                watchers_count: repo.watchers_count,
            };
        });

        // eslint-disable-next-line no-console
        console.log("Writing to file...");

        writeFileSync("./data/github-projects-list.json", JSON.stringify(preparedData, undefined, 2));

        exit(0);
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        exit(1);
    });
