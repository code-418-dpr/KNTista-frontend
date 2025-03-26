import { Config } from "tailwindcss";

import { heroui } from "@heroui/react";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {},
    darkMode: "class",
    plugins: [heroui()],
};

export default config;
