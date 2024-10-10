import { Link } from "react-router-dom"
import HashLink from "../components/HashLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { A } from "blue-react"

export default function GridLayout() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-btn-smooth">
                    <code>.blue-grid-layout</code>
                </HashLink>
                <p>
                    New approach to use the <code>Layout</code> component by using CSS <code>display: grid</code>.
                    Markup should look something like this:
                </p>

                <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                    {
                        /*html*/ `<div class="blue-layout blue-grid-layout">
    <header class="blue-grid-layout-header"></header>
    <nav class="blue-grid-layout-side"></nav>
    <main class="blue-grid-layout-main"></main>
</div>`
                    }
                </SyntaxHighlighter>

                <h3 className="mt-4 mb-3">Live example</h3>
                <p>
                    See a full page example: <Link to="/grid-layout-example">/grid-layout-example</Link>
                    <br />
                    Source code:{" "}
                    <A
                        href="https://github.com/bruegmann/blue-web/blob/main/src/docs/examples/css/GridLayoutExample.tsx"
                        target="_blank"
                    >
                        https://github.com/bruegmann/blue-web/blob/main/src/docs/examples/css/GridLayoutExample.tsx
                    </A>
                </p>

                <h3 className="mt-4 mb-3">What's the benefit?</h3>
                <p>
                    When using full size third party components like DevExpress DataGrid or Sandbox Embed you might
                    struggle with the sizing and the elements could overflow awkwardly when using the classic layout
                    approach.
                </p>
                <p>You should only use this approach, if you have a global header and sidebar.</p>
                <p>
                    In those cases, you should use this new grid layout approach. This also might become the default
                    layout in the future.
                </p>
            </article>
        </>
    )
}
