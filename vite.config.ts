import process from "node:process";

import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig, loadEnv } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";

export default defineConfig(async ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    let baseUrl = "http://0.0.0.0:3000";

    if (process.env["NETLIFY"]) {
        if (process.env["CONTEXT"] === "production") {
            baseUrl = process.env["URL"] as string;
        } else if (process.env["CONTEXT"] !== "production") {
            baseUrl = process.env["DEPLOY_PRIME_URL"] as string;
        }
    }

    return {
        base: baseUrl,
        clearScreen: false,
        optimizeDeps: { include: ["react/jsx-runtime"] },
        plugins: [
            react({
                jsxRuntime: "automatic",
            }),
            svgr(),
            ViteFaviconsPlugin({
                inject: false,
                logo: "public/assets/favicon.svg",
            }),
            ssr({
                prerender: {
                    noExtraDir: true,
                    parallel: 1, // Can be `number` or `boolean`
                    partial: false,
                },
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

        test: {
            environment: "node",
        },
    };
});
