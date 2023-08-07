/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#020912",
                mainColor: "#8d2de2",
                PrimaryColor: "white",
                secondryColor: "#e4e4e4",
                arrow: "rgba(0, 0, 0, 0.05)",
            },
            backgroundImage: {
                icon: "linear-gradient(-45deg, #9633e6, #df1d48)",
                gradient: "linear-gradient(to right, #9633e6, #df1d48)",
            },
            boxShadow: {
                bs: "0 5px 10px rgba(0, 0, 0, 0.3)",
            },
        },
        fontFamily: {
            textStyle: "'Comforter Brush', cursive",
        },
        screens: {
            xs: "575px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
        },
    },
    plugins: [],
};
