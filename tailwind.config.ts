import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";

const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                xl: "1280px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            gray: {
                light: "#EEEEEE",
                dark: "#464646",
                medium: "#BDBDBD",
                gray: colors.gray,
            },
            blue: {
                dark: "#003362",
                light: "#2F80ED",
                gray: colors.blue,
            },
            red: {
                light: "#EB5757",
                red: colors.red,
            },
            green: {
                dark: "#219653",
                light: "#27AE60",
                green: colors.green,
            },
            yellow: {
                light: "#F2C94C",
                yellow: colors.yellow,
            },
            orange: {
                light: "#F2994A",
                orange: colors.orange,
            },
            brown: {
                light: "#F2994A",
                orange: colors.orange,
            },
            amber: colors.amber,
            white: colors.white,
            black: colors.black,
            transparent: colors.transparent,
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [animate],
} satisfies Config;

export default config;
