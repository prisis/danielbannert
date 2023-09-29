module.exports = {
    content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies
        require("@tailwindcss/typography"),
    ],
    theme: {
        extend: {
            fontFamily: {
                "noto-sans": ["Nunito Sans", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "sans-serif"],
            },
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
