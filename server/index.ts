import compression from "compression";
import express from "express";
import path from "node:path";
import url from "node:url";
import { createPageRenderer } from "vite-plugin-ssr";

const isProduction = process.env.NODE_ENV === "production";
const root = `${path.dirname(url.fileURLToPath(import.meta.url))}/..`;

async function startServer() {
    const app = express();

    app.use(compression());

    let viteDevelopmentServer;

    if (isProduction) {
        app.use(express.static(`${root}/dist/client`));
    } else {
        // eslint-disable-next-line import/no-extraneous-dependencies,unicorn/prefer-module
        const vite = require("vite");

        viteDevelopmentServer = await vite.createServer({
            root,
            server: { middlewareMode: "ssr" },
        });
        app.use(viteDevelopmentServer.middlewares);
    }

    const view = createPageRenderer({ viteDevServer: viteDevelopmentServer, isProduction, root });

    // eslint-disable-next-line consistent-return
    app.get("*", async (request, response, next) => {
        const pageContextInit = {
            url: request.originalUrl,
        };
        const pageContext = await view(pageContextInit);
        const { httpResponse } = pageContext;

        if (!httpResponse) {
            return next();
        }

        const { body, statusCode, contentType } = httpResponse;

        response.status(statusCode).type(contentType).send(body);
    });

    const port = process.env.PORT || 3000;

    app.listen(port);

    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port}`);
}

startServer();
