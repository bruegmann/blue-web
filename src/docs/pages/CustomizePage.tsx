import { A, Body, Page } from "blue-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function CustomizePage() {
    return (
        <Page>
            <Body containerClass="container">
                <h1 className="page-header">Customize Blue Web</h1>

                <p>
                    Since Blue Web is based on Bootstrap, you can customize many things by overriding Sass or CSS
                    variables. For more information, see the{" "}
                    <a href="https://getbootstrap.com/docs/5.3/customize/overview/" target="_blank" rel="noreferrer">
                        Bootstrap documentation
                    </a>
                    . Blue Web also provides some additional variables that you can use and override. Take a look at{" "}
                    <a href="https://github.com/bruegmann/blue-web/blob/main/dist/styles/_variables.scss">
                        dist/styles/_variables.scss
                    </a>{" "}
                    to see all of them.
                </p>

                <p>Here is an example of how to override variables using Sass:</p>

                <SyntaxHighlighter style={syntaxHighlighterStyle} language="scss">{
                    /* css */ `// Override Bootstrap Sass variable
$primary: tomato;

// Override Blue Web Sass variable
$theme: orange;

// Stylesheet for Blue Web. Already contains Bootstrap.
@import "~blue-web/dist/style";`
                }</SyntaxHighlighter>

                <p>An example of how to override CSS variables:</p>

                <SyntaxHighlighter style={syntaxHighlighterStyle} language="css">{
                    /* css */ `:root {
    /* Override Bootstrap CSS variable */
    --bs-body-font-family: "Inter", sans-serif;

    /* Override Blue Web CSS variable */
    --blue-sidebar-bg: #333;
}`
                }</SyntaxHighlighter>
                <p>
                    The{" "}
                    <A href="https://github.com/bruegmann/themify-cli" target="_blank">
                        Themify CLI
                    </A>{" "}
                    can be a useful tool to customize Blue Web. It allows you to easily create themes.
                </p>
            </Body>
        </Page>
    )
}
