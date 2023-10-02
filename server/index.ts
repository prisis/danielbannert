// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env.local files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.github.io/) to scaffold a vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)
// eslint-disable-next-line import/no-unused-modules
import { dirname } from "node:path";
import process from "node:process";
import url from "node:url";

import compression from "compression";
import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderPage } from "vike/server";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnv } from "vite";

const root = `${dirname(url.fileURLToPath(import.meta.url))}/..`;
const isProduction = process.env["NODE_ENV"] === "production";

Object.assign(process.env, loadEnv(process.env["NODE_ENV"] as string, process.cwd()));

// eslint-disable-next-line func-style
async function startServer() {
    const app = express();

    app.use(compression());

    // Vite integration
    if (isProduction) {
        // In production, we need to serve our static assets ourselves.
        // (In dev, Vite's middleware serves our static assets.)
        // eslint-disable-next-line import/no-extraneous-dependencies,unicorn/no-await-expression-member
        const sirv = (await import("sirv")).default;

        app.use(sirv(`${root}/dist/client`));
    } else {
        // We instantiate Vite's development server and integrate its middleware to our server.
        // ⚠️ We instantiate it only in development. (It isn't needed in production and it
        // would unnecessarily bloat our production server.)
        // eslint-disable-next-line import/no-extraneous-dependencies
        const vite = await import("vite");

        const viteDevelopmentMiddleware = (
            await vite.createServer({
                root,
                server: { middlewareMode: true },
            })
            // eslint-disable-next-line unicorn/no-await-expression-member
        ).middlewares;

        app.use(viteDevelopmentMiddleware);
    }

    // ...
    // Other middlewares (e.g. some RPC middleware such as Telefunc)
    // ...

    // Vike middleware. It should always be our last middleware (because it's a
    // catch-all middleware superseding any middleware placed after it).
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    app.get("*", async (request, response, next) => {
        const pageContextInit = {
            urlOriginal: request.originalUrl,
        };
        const pageContext = await renderPage(pageContextInit);
        const { httpResponse } = pageContext;

        if (!httpResponse) {
            next();

            return;
        }

        const { body, earlyHints, headers, statusCode } = httpResponse;

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (response.writeEarlyHints !== undefined) {
            response.writeEarlyHints({ link: earlyHints.map((hint) => hint.earlyHintLink) });
        }

        headers.forEach(([name, value]) => response.setHeader(name, value));

        response.status(statusCode);
        // For HTTP streams use httpResponse.pipe() instead, see https://vike.dev/stream
        response.send(body);

    });

    const port = process.env["PORT"] ?? 3000;

    app.listen(port);

    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises,unicorn/prefer-top-level-await
startServer();
