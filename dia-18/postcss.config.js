const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
        'sans': ['Inter', 'sans-serif']
        },
        extend: {

        },
    },
    plugins: [],
};