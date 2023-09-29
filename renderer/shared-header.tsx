import type { FC } from "react";
import { Helmet } from "react-helmet-async";

import type { PageContext } from "./types";

const SharedHeader: FC<{ pageContext: PageContext }> = ({ pageContext }) => (
    <Helmet>
        <title>{pageContext.exports.documentProps?.title || "Daniel Bannert"}</title>
        <meta
            content={
                pageContext.exports.documentProps?.description || "A Software Engineer, Consultant and Open Source Enthusiast from Regensburg (Germany)."
            }
            name="description"
        />

        <meta content="Daniel Bannert" name="author" />
        <meta content="7 days" name="revisit-after" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@_prisis_" name="twitter:creator" />
        <meta content={`${import.meta.env.BASE_URL}assets/twitter_card.png`} name="twitter:image" />
        <meta
            content="I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful."
            name="twitter:image:alt"
        />

        <meta content={pageContext.exports.documentProps?.title || "Daniel Bannert"} property="og:title" />
        <meta
            content={
                pageContext.exports.documentProps?.description ||
                "I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful."
            }
            property="og:description"
        />
        <meta content={`${import.meta.env.BASE_URL}assets/twitter_card.png`} property="og:image" />
        <meta
            content="I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful."
            property="og:image:alt"
        />
        <meta content="en_GB" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content={`${import.meta.env.BASE_URL}${pageContext.exports.documentProps?.pageUrl?.trimStart().replaceAll(/^\/+/g, "")}`} property="og:url" />
        <link href={`${import.meta.env.BASE_URL}${pageContext.exports.documentProps?.pageUrl?.trimStart().replaceAll(/^\/+/g, "")}`} rel="canonical" />

        <link href="/public/assets/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/public/assets/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/public/assets/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/public/assets/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/public/assets/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/public/assets/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/public/assets/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/public/assets/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/public/assets/apple-touch-icon-167x167.png" rel="apple-touch-icon" sizes="167x167" />
        <link href="/public/assets/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/public/assets/apple-touch-icon-1024x1024.png" rel="apple-touch-icon" sizes="1024x1024" />
        <link
            href="/public/assets/apple-touch-startup-image-320x460.png"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-640x920.png"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-640x1096.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-750x1294.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-1182x2208.png"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-1242x2148.png"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-748x1024.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-1496x2048.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-768x1004.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image"
        />
        <link
            href="/public/assets/apple-touch-startup-image-1536x2008.png"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
        />
        <link href="/public/assets/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/public/assets/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/public/assets/coast-228x228.png" rel="icon" sizes="228x228" type="image/png" />
        <link href={`${import.meta.env.BASE_URL}assets/manifest.json`} rel="manifest" />
        <link href={`${import.meta.env.BASE_URL}assets/favicon.ico`} rel="shortcut icon" />
        <link href={`${import.meta.env.BASE_URL}assets/yandex-browser-manifest.json`} rel="yandex-tableau-widget" />
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="/assets/mstile-144x144.png" name="msapplication-TileImage" />
        <meta content={`${import.meta.env.BASE_URL}assets/browserconfig.xml`} name="msapplication-config" />
        <meta content="#fff" name="theme-color" />

        <script data-site="UUUYFLMH" data-spa="auto" defer src="https://cdn.usefathom.com/script.js" />
    </Helmet>
);

export default SharedHeader;
