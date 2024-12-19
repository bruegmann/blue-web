import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function IntroductionSections() {
    const sections = [
        {
            title: "Bootstrap",
            body: (
                <>
                    An adapted Bootstrap is mainly used for the stylesheet.
                    <br />
                    Bootstrap documentation is available here:{" "}
                    <a href="https://getbootstrap.com/docs/" target="_blank" rel="noopener noreferrer">
                        https://getbootstrap.com/docs/
                    </a>
                </>
            )
        },
        {
            title: "Implementation",
            body: (
                <>
                    <p>
                        If you have a React or Blazor project, you should use the components of{" "}
                        <a href="https://bruegmann.github.io/blue-react">Blue React</a> or{" "}
                        <a href="https://bruegmann.github.io/blue-blazor">Blue Blazor</a>. Otherwise you can also write
                        the markup of those components directly in HTML. Here is a basic example:
                    </p>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                        {
                            /* html */ `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Try Blue Web</title>

        <link
            rel="stylesheet"
            href="./node_modules/blue-web/dist/style.min.css"
        />
    </head>
    <body>
        <div class="blue-layout">
            <div class="router-page active">
                <div class="blue-page">
                    <div class="container">
                        <h1 class="blue-page-header">Hello Blue Web</h1>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
            import { guid } from "./node_modules/blue-web/dist/js/utils.js"

            console.log(guid())
        </script>
    </body>
</html>
`
                        }
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "Customization and theming",
            body: (
                <>
                    <p>
                        Since Blue Web is based on Bootstrap, you can customize many things by overriding Sass or CSS
                        variables. For more information, see the{" "}
                        <a
                            href="https://getbootstrap.com/docs/5.3/customize/overview/"
                            target="_blank"
                            rel="noreferrer"
                        >
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
                </>
            )
        }
    ]

    return (
        <div className="row">
            <div className="col-md-12">
                {sections.map((s, i) => (
                    <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                        <h2 className="page-header">{s.title}</h2>
                        {s.body}
                    </article>
                ))}
            </div>
        </div>
    )
}
