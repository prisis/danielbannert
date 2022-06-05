// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    // eslint-disable-next-line consistent-return
    onPreBuild: async ({ utils: { build, run } }) => {
        try {
            await run.command("npm install -g pnpm");
            await run.command("pnpm install --frozen-lockfile=false");
        } catch (error) {
            return build.failBuild(error);
        }
    },
};
