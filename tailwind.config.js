/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#1b2028",
                main: "#23a9d5",
            },
            keyframes: {
                faster_pulse: {
                    "50%": {
                        opacity: 0,
                    },
                },
            },
            animation: {
                faster_pulse: "faster_pulse 1.5s infinite ",
            },
        },
    },
    plugins: [],
};
