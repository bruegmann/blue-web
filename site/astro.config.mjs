// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import remarkRender from "./src/plugins/remark-render.mjs"

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx()],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "legacy",
                    includePaths: ["node_modules"]
                }
            }
        }
    },
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [remarkRender]
    }
})
