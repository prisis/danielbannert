import "./assets/index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app";

const rootElement = document.querySelector("#root");

createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
