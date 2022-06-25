import type { FC } from "react";
import { Helmet } from "react-helmet-async";

import type { PageContext } from "./types";

const SharedHeader: FC<{ pageContext: PageContext }> = ({ pageContext }) => (
    <Helmet>
        <title>{pageContext?.pageExports?.documentProps?.title || "Daniel Bannert"}</title>
        <meta
            name="description"
            content={
                pageContext?.pageExports?.documentProps?.description || "A Software Engineer, Consultant and Open Source Enthusiast from Regensburg (Germany)."
            }
        />

        <meta name="author" content="Daniel Bannert" />
        <meta name="revisit-after" content="7 days" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@_prisis_" />

        <meta property="og:title" content={pageContext?.pageExports?.documentProps?.title || "Daniel Bannert"} />
        <meta
            property="og:description"
            content={
                pageContext?.pageExports?.documentProps?.description
                || "I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful."
            }
        />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}assets/twitter_card.png`} />
        <meta
            property="og:image:alt"
            content="I am a software architect and developer building products to make the world a better place by making things easier, faster and more beautiful."
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${import.meta.env.BASE_URL}${pageContext?.pageExports?.documentProps?.pageUrl?.trimStart().replace(/^\/+/g, "")}`} />
        <link rel="canonical" href={`${import.meta.env.BASE_URL}${pageContext?.pageExports?.documentProps?.pageUrl?.trimStart().replace(/^\/+/g, "")}`} />

        <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/assets/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="1024x1024" href="/assets/apple-touch-icon-1024x1024.png" />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
            href="/assets/apple-touch-startup-image-320x460.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
            href="/assets/apple-touch-startup-image-640x920.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            href="/assets/apple-touch-startup-image-640x1096.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            href="/assets/apple-touch-startup-image-750x1294.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
            href="/assets/apple-touch-startup-image-1182x2208.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
            href="/assets/apple-touch-startup-image-1242x2148.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
            href="/assets/apple-touch-startup-image-748x1024.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
            href="/assets/apple-touch-startup-image-1496x2048.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
            href="/assets/apple-touch-startup-image-768x1004.png"
        />
        <link
            rel="apple-touch-startup-image"
            media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
            href="/assets/apple-touch-startup-image-1536x2008.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="228x228" href="/assets/coast-228x228.png" />
        <link rel="manifest" href={`${import.meta.env.BASE_URL}assets/manifest.json`} />
        <link rel="shortcut icon" href={`${import.meta.env.BASE_URL}assets/favicon.ico`} />
        <link rel="yandex-tableau-widget" href={`${import.meta.env.BASE_URL}assets/yandex-browser-manifest.json`} />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png" />
        <meta name="msapplication-config" content={`${import.meta.env.BASE_URL}assets/browserconfig.xml`} />
        <meta name="theme-color" content="#fff" />

        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="UUUYFLMH" defer />
    </Helmet>
);

export default SharedHeader;
