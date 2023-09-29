import process from "node:process";

import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig, loadEnv } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";
import { imagetools, OutputFormat } from "vite-imagetools";

export default defineConfig(async ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    return {
        clearScreen: false,
        optimizeDeps: { include: ["react/jsx-runtime"] },
        plugins: [
            react({
                jsxRuntime: "automatic",
            }),
            svgr(),
            imagetools({
                extendOutputFormats(builtins) {
                    const jsx: OutputFormat = () => (metadatas) => {
                        const srcSet = metadatas.map((meta) => `${meta["src"]} ${meta["width"]}w`).join(", ");

                        let largestImage: any;
                        let largestImageSize = 0;

                        for (let i = 0; i < metadatas.length; i++) {
                            const m = metadatas[i] as any;

                            if (m.width > largestImageSize) {
                                largestImage = m;
                                largestImageSize = m.width;
                            }
                        }

                        return {
                            srcSet,
                            src: largestImage === null || largestImage === void 0 ? void 0 : largestImage.src,
                            width: largestImage === null || largestImage === void 0 ? void 0 : largestImage.width,
                            height: largestImage === null || largestImage === void 0 ? void 0 : largestImage.height,
                        };
                    };

                    return {
                        ...builtins,
                        jsx,
                    };
                },
                defaultDirectives: (url) => {
                    if (url.searchParams.has("jsx")) {
                        const { jsx, ...params } = Object.fromEntries(url.searchParams.entries());

                        return new URLSearchParams({
                            format: "webp",
                            quality: "75",
                            w: "200;400;600;800;1200",
                            withoutEnlargement: "",
                            ...params,
                            as: "jsx",
                        });
                    }
                    return new URLSearchParams();
                },
            }),
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
