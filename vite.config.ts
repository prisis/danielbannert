import process from "node:process";

import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig, loadEnv } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(async ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    return {
        base: process.env["VITE_DOMAIN"] as string,
        build: {
            outDir: "../dist/",
        },
        clearScreen: false,
        optimizeDeps: { include: ["react/jsx-runtime"] },
        plugins: [
            react({
                jsxRuntime: "automatic",
            }),
            ssr({
                prerender: {
                    noExtraDir: true,
                    parallel: 1, // Can be `number` or `boolean`
                    partial: true,
                },
            }),
            ViteFaviconsPlugin({
                inject: false,
                logo: "public/assets/favicon.svg",
            }),
            ViteImageOptimizer({}),
            viteStaticCopy({
                targets: [
                    {
                        dest: "assets",
                        src: "public/assets/avatar.jpeg",
                    },
                    {
                        dest: "assets",
                        src: "public/assets/twitter_card.png",
                    },
                ],
            }),
        ],
        root: "src/",

        test: {},
    };
});
