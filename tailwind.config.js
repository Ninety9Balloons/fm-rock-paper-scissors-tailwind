/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "scissors-gradient-1": "hsl(39, 89%, 49%)",
                "scissors-gradient-2": "hsl(40, 84%, 53%)",
                "paper-gradient-1": "hsl(230, 89%, 62%)",
                "paper-gradient-2": "hsl(230, 89%, 65%)",
                "rock-gradient-1": "hsl(349, 71%, 52%)",
                "rock-gradient-1": "hsl(349, 70%, 56%)",
                "dark-text": "hsl(229, 25%, 31%)",
                "score-text": "hsl(229, 64%, 46%)",
                "header-outline": "hsl(217, 16%, 45%)",
                "radial-gradient-1": "hsl(214, 47%, 23%)",
                "radial-gradient-2": "hsl(237, 49%, 15%)",
            },
            fontFamily: {
                "barlow-semi-condensed": [
                    "Barlow Semi Condensed",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};
