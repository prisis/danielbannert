import { env } from "node:process";

import type { RestEndpointMethodTypes } from "@octokit/rest";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: env.VITE_GITHUB_AUTH_TOKEN,
});

const githubRepoCache: Record<string, RestEndpointMethodTypes["repos"]["listForOrg"]["response"] & { stargazers_count?: number }> = {};

export default async function getRepo(url: string): Promise<any> {
    const ownerAndRepo = url.replace("https://github.com/", "");
    const [owner, repo]: string[] = ownerAndRepo.split("/");

    if (githubRepoCache[ownerAndRepo]) {
        return githubRepoCache[ownerAndRepo];
    }

    // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
    return await octokit.rest.repos
        .get({
            owner: owner as string,
            repo: repo as string,
        })
        .then(({ data }) => {
            // @ts-expect-error
            githubRepoCache[ownerAndRepo] = data;
            // @ts-expect-error
            return data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);

            return "NaN";
        });
}
