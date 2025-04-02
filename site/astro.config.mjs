// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import remarkRender from "./src/plugins/remark-render.mjs"

// https://astro.build/config
export default defineConfig({
    site: "https://bruegmann.github.io/blue-web/vnext",
    base: "/blue-web/vnext/",
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
