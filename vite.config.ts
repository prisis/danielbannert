// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, loadEnv } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ViteFaviconsPlugin } from "vite-plugin-favicon";
// eslint-disable-next-line import/no-extraneous-dependencies
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig(async ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    const productionPlugins = [];

    if (mode === "production") {
        productionPlugins.push(
            ViteFaviconsPlugin({
                logo: "assets/favicon.svg",
            }),
        );
    }

    return {
        plugins: [react(), ssr(), ...productionPlugins],
    };
});
