import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import "../../js/side-layout"
import { LayoutSidebar, LayoutSidebarInset } from "react-bootstrap-icons"
import { CSSProperties } from "react"
import DemoCode from "../components/DemoCode"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "side-layout": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}

export default function SideLayoutPage() {
    return (
        <>
            <p>Layout with a sidebar as a Web Component.</p>
            <DemoCode>
                <side-layout>
                    {" "}
                    <div slot="header">Header</div>
                    <div slot="side">Side</div>
                    Main{" "}
                </side-layout>
            </DemoCode>

            <p>
                The Web Component only has a bare minimum of style to make it as flexible as possible. You can customize
                it with styled slots or by overriding some of the CSS variables.
            </p>

            <h3 className="mt-4 mb-3">Example with Blue Web (Bootstrap)</h3>

            <DemoCode>
                <div className="bg-primary-subtle" style={{ height: "100dvh" }}>
                    <side-layout>
                        {" "}
                        <div slot="expand-toggler" className="w-100 h-100 p-1">
                            <div className="btn blue-btn-plain-theme w-100 h-100">
                                <LayoutSidebar />
                            </div>
                        </div>
                        <div slot="drawer-toggler" className="w-100 h-100 p-1">
                            <div className="btn blue-btn-plain-theme w-100 h-100">
                                <LayoutSidebarInset />
                            </div>
                        </div>
                        <div
                            slot="overlay"
                            className="bg-dark w-100 h-100"
                            style={{ ["--bs-bg-opacity"]: 0.5 } as CSSProperties}
                        />
                        <div slot="side" className="bg-primary-subtle h-100">
                            Side
                        </div>
                        <div className="w-100 h-100 p-1">
                            <div className="w-100 h-100 overflow-auto rounded border p-4 bg-body">
                                <div className="h1 page-header">Hello World</div>
                            </div>
                        </div>{" "}
                    </side-layout>
                </div>
            </DemoCode>

            <h3 className="mt-4 mb-3">Example with Tailwind CSS</h3>

            <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">{
                /* html */ `<div class="text-secondary-500 dark:bg-secondary-900 dark:text-secondary-400 bg-white h-screen">
    <side-layout>
        <div slot="expand-toggler" class="size-full p-1">
            <div class="btn flex size-full items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="bi bi-layout-sidebar"
                >
                    <path
                        d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z"
                    ></path>
                </svg>
            </div>
        </div>
        <div slot="drawer-toggler" class="size-full p-1">
            <div class="btn flex size-full items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="bi bi-layout-sidebar-inset"
                >
                    <path
                        d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"
                    ></path>
                    <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
                </svg>
            </div>
        </div>
        <div class="bg-secondary-950/80 size-full" slot="overlay"></div>
        <div
            slot="side"
            class="max-lg:text-secondary-500 max-lg:dark:bg-secondary-800 max-lg:dark:text-secondary-400 h-full max-lg:bg-white"
        >
            Side
        </div>
        <div class="size-full p-1">
            <div
                class="border-secondary-200 dark:border-secondary-800 size-full overflow-auto rounded-md border p-4"
            >
                <div
                    role="heading"
                    aria-level="1"
                    class="text-secondary-800 dark:text-secondary-100 mt-4 mb-3 font-bold tracking-tight text-3xl border-secondary-200 dark:border-secondary-800 border-b-4 pb-1"
                >
                    Hello World
                </div>
            </div>
        </div>
    </side-layout>
</div>`
            }</SyntaxHighlighter>
        </>
    )
}
