// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
import process from "node:process";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, loadEnv } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
// eslint-disable-next-line import/no-extraneous-dependencies
import ssr from "vite-plugin-ssr/plugin";
// eslint-disable-next-line import/no-extraneous-dependencies
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(async ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    return {
        base: process.env.VITE_DOMAIN,
        plugins: [
            react(),
            ssr(),
            ViteFaviconsPlugin({
                logo: "assets/favicon.svg",
                inject: false,
            }),
            viteStaticCopy({
                targets: [
                    {
                        src: "assets/avatar.jpeg",
                        dest: "assets",
                    },
                    {
                        src: "assets/twitter_card.png",
                        dest: "assets",
                    },
                ],
            }),
        ],
        clearScreen: false,
    };
});
