import HashLink from "../components/HashLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function ContainerGrid() {
    const demoColClassNames = "bg-primary-subtle border border-primary text-primary p-3 text-center"

    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-container-grid">
                    <code>.blue-container-grid</code>
                </HashLink>
                <p>
                    Adds container query support to Bootstrap's grid system. By default, Bootstrap's breakpoint classes
                    only react to changes in the viewport width. With container queries, you can apply breaks based on a
                    custom container.
                </p>

                <ul>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read more about container queries
                        </a>
                    </li>
                    <li>
                        <a href="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank" rel="noreferrer">
                            About Bootstrap's grid system
                        </a>
                    </li>
                </ul>

                <div
                    className="blue-container-grid border-primary-subtle px-3"
                    style={{ resize: "both", overflow: "auto", border: "1px dashed" }}
                >
                    <div className="row">
                        <div className={"col-md-4 " + demoColClassNames}>col-md-4</div>

                        <div className={"col-md-8 " + demoColClassNames}>col-md-8</div>
                    </div>
                    This is a container grid. Resize the box around to see the effect.
                </div>

                <div
                    className="blue-container-grid border-primary-subtle px-3"
                    style={{ resize: "both", overflow: "auto", border: "1px dashed" }}
                >
                    <div className="row">
                        <div className={"col-md-4 " + demoColClassNames}>col-md-4</div>

                        <div className={"col-md-8 col-lg-7 col-xl-6 col-xxl-5 " + demoColClassNames}>
                            col-md-8 col-lg-7 col-xl-6 col-xxl-5
                        </div>
                    </div>
                    This is a container grid. Resize the box around to see the effect.
                </div>

                <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">{
                    /*html*/ `<div class="blue-container-grid">
    <div class="row">
        <div class="col-md-4">col-md-4</div>
        <div class="col-md-8">col-md-8</div>
    </div>
</div>`
                }</SyntaxHighlighter>
            </article>
        </>
    )
}
