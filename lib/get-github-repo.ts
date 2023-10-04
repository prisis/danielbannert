import process from "node:process";

import type { RestEndpointMethodTypes } from "@octokit/rest";
import { Octokit } from "@octokit/rest";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

Object.assign(process.env, loadEnv("", process.cwd()));

const octokit = new Octokit({
    auth: process.env["VITE_GITHUB_AUTH_TOKEN"],
});

const githubRepoCache: Record<string, RestEndpointMethodTypes["repos"]["listForOrg"]["response"] & { stargazers_count?: number }> = {};

export default async function getRepo(url: string): Promise<unknown> {
    const ownerAndRepo = url.replace("https://github.com/", "");
    const [owner, repo]: string[] = ownerAndRepo.split("/");

    // eslint-disable-next-line security/detect-object-injection
    if (githubRepoCache[ownerAndRepo]) {
        // eslint-disable-next-line security/detect-object-injection
        return githubRepoCache[ownerAndRepo];
    }

    // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
    return await octokit.rest.repos
        .get({
            owner: owner as string,
            repo: repo as string,
        })
        .then(({ data }) => {
            // @ts-expect-error - We're adding a property to the data object.
            // eslint-disable-next-line security/detect-object-injection
            githubRepoCache[ownerAndRepo] = data;

            return data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);

            return "NaN";
        });
}
