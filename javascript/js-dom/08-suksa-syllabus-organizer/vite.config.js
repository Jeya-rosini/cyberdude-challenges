import { defineConfig } from "vite";

export default defineConfig({
    base: "/CyberDude-Challenges/js-dom/08-suksa-syllabus-organizer",
    build: {
        target: "es2022"
    },
    esbuild: {
        supported: {
            "top-level-await": true,
        }
    }
})