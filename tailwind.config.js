module.exports = {
    content: ["index.html", "./components/**/*.{jsx,tsx}", "./layout/**/*.{jsx,tsx}", "./pages/**/*.{jsx,tsx}"],
    darkMode: "class",
    plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies
        require("@tailwindcss/typography"),
        require("tailwindcss-font-inter"),
    ],
    theme: {
        extend: {
            height: {
                240: "240px",
                320: "320px",
            },
            width: {
                240: "240px",
                320: "320px",
            },
        },
    },
};
