import type { FC } from "react";
import { Helmet } from "react-helmet-async";

import type { PageContext } from "./types.d";

const defaultDescription =
    "Daniel Bannert is a seasoned Fullstack Developer dedicated to creating robust, user-friendly web solutions tailored to your business needs. Explore a portfolio of diverse projects and get in touch to elevate your digital presence.";

const SharedHeader: FC<{ pageContext: PageContext }> = ({ pageContext }) => (
    <Helmet>
        <title>{pageContext.exports.documentProps?.title ?? "Daniel Bannert"}</title>
        <meta content={pageContext.exports.documentProps?.description ?? defaultDescription} name="description" />
        <meta
            name="keywords"
            content="Fullstack Developer, React Developer, JavaScript Development, Tech Stack Optimization, API Development and Integration, Web Performance Optimization"
        />

        <meta content="Daniel Bannert" name="author" />
        <meta content="7 days" name="revisit-after" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@_prisis_" name="twitter:creator" />
        <meta content={`${(import.meta.env["VITE_DOMAIN_URL"] as string)}/assets/twitter_card.png`} name="twitter:image" />
        <meta
            content={defaultDescription}
            name="twitter:image:alt"
        />

        <meta content={pageContext.exports.documentProps?.title ?? "Daniel Bannert"} property="og:title" />
        <meta
            content={
                pageContext.exports.documentProps?.description ??
                defaultDescription
            }
            property="og:description"
        />
        <meta content={`${(import.meta.env["VITE_DOMAIN_URL"] as string)}/assets/twitter_card.png`} property="og:image" />
        <meta
            content={defaultDescription}
            property="og:image:alt"
        />
        <meta content="en_GB" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content={`${(import.meta.env["VITE_DOMAIN_URL"] as string)}/${pageContext.exports.documentProps?.pageUrl?.trimStart().replaceAll(/^\/+/gu, "")}`} property="og:url" />

        <link href={`${(import.meta.env["VITE_DOMAIN_URL"] as string)}/${pageContext.exports.documentProps?.pageUrl?.trimStart().replaceAll(/^\/+/gu, "")}`} rel="canonical" />

        <link href="/assets/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/assets/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/assets/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/assets/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/assets/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/assets/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/assets/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/assets/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/assets/apple-touch-icon-167x167.png" rel="apple-touch-icon" sizes="167x167" />
        <link href="/assets/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/assets/apple-touch-icon-1024x1024.png" rel="apple-touch-icon" sizes="1024x1024" />
        <link
            href="/assets/apple-touch-startup-image-320x460.png"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-640x920.png"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-640x1096.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-750x1294.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-1182x2208.png"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-1242x2148.png"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-748x1024.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-1496x2048.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-768x1004.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/assets/apple-touch-startup-image-1536x2008.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link href="/assets/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/assets/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/assets/coast-228x228.png" rel="icon" sizes="228x228" type="image/png" />
        <link href={`${import.meta.env["BASE_URL"]}assets/favicon.ico`} rel="shortcut icon" />
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="/assets/mstile-144x144.png" name="msapplication-TileImage" />
        <meta content={`${import.meta.env["BASE_URL"]}assets/browserconfig.xml`} name="msapplication-config" />
        <meta content="#fff" name="theme-color" />

        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {import.meta.env["VITE_FATHOM_SITE"] ?? (
            <script data-site={import.meta.env["VITE_FATHOM_SITE"]} data-spa="auto" defer src="https://cdn.usefathom.com/script.js" />
        )}
    </Helmet>
);

export default SharedHeader;
