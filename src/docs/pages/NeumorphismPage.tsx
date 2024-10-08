import { Page, Body } from "blue-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import NeumorphismExperiments from "../components/NeumorphismExperiments"

export default function NeumorphismPage() {
    return (
        <Page>
            <Body className="pt-0" containerClass="no-container d-flex flex-column docs-min-height-100vh">
                <main className="flex-grow-1">
                    <div className="pt-5 bg-theme text-white">
                        <div className="container py-5 pt-md-0 d-flex gap-5 flex-column flex-md-row">
                            <div
                                className="h1 rounded-5 p-5"
                                style={{ boxShadow: "var(--neu-shadow-5), var(--neu-shadow-inset-switch-2)" }}
                            >
                                Make elements stand out
                            </div>
                            <div
                                className="h1 rounded-5 p-5"
                                style={{ boxShadow: "var(--neu-shadow-2), var(--neu-shadow-inset-5)" }}
                            >
                                with Neumorphism effects
                            </div>
                        </div>

                        <div className="rounded-top bg-body" style={{ height: "1rem" }} />
                    </div>

                    <div className="container pb-5">
                        <h1 className="page-header">
                            Neumorphism SCSS utilities{" "}
                            <small className="badge text-bg-secondary fs-5 neu-shadow-3">Experimental</small>
                        </h1>

                        <p className="lead">
                            Blue Web comes with <code>dist/neu.scss</code> containing some SCSS and CSS utilities to
                            make it easy to apply shadow effects.
                        </p>

                        <article>
                            <h2 className="mt-4 mb-3">Getting started</h2>
                            <ol>
                                <li>
                                    Import <code>neu.css</code> in your main SCSS file:
                                    <br />
                                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="scss">
                                        {`@import "~blue-react/dist/neu";`}
                                    </SyntaxHighlighter>
                                </li>
                                <li>
                                    Apply the mixin "neu()" at the area you want to use it:
                                    <br />
                                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="scss">
                                        {`:root {\n\t@include neu(#610dfd);\n}`}
                                    </SyntaxHighlighter>
                                    First parameter takes the areas's background color. As second parameter you can set
                                    the background color for inset.
                                </li>
                            </ol>

                            <h2 className="mt-4 mb-3">Utility classes</h2>
                            <p>
                                The notation looks like this: <code>{`.neu-shadow{-inset?}{-switch?}{-size}`}</code>
                            </p>

                            <p>
                                Where <em>inset</em> is optional. When you set it, the box-shadow will be set to the
                                inside.
                            </p>

                            <p>
                                Where <em>switch</em> is optional. When you set it, the light and dark shadow colors
                                will be switched.{" "}
                                <strong>
                                    Can only be used together with <em>inset</em>!
                                </strong>
                            </p>

                            <p>
                                Where <em>size</em> is required and one of:
                            </p>
                            <ul>
                                <li>
                                    <code>1</code> - distance and blur values multiplied with <code>.25</code>
                                </li>
                                <li>
                                    <code>2</code> - distance and blur values multiplied with <code>.5</code>
                                </li>
                                <li>
                                    <code>3</code> - distance and blur values multiplied with <code>1</code>
                                </li>
                                <li>
                                    <code>4</code> - distance and blur values multiplied with <code>1.5</code>
                                </li>
                                <li>
                                    <code>5</code> - distance and blur values multiplied with <code>3</code>
                                </li>
                            </ul>
                            <p>
                                Format and the values are inspired by{" "}
                                <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/#notation">Bootstrap</a>
                            </p>

                            <h2 className="mt-4 mb-3">Combining classes</h2>
                            <p>You can combine shadows with inset shadows like this:</p>
                            <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                                {`<div class="neu-shadow-5 neu-shadow-inset-switch-3"></div>`}
                            </SyntaxHighlighter>
                            <div
                                className="neu-shadow-5 neu-shadow-inset-switch-3"
                                style={{
                                    width: 400,
                                    height: 200,
                                    borderRadius: "1rem",
                                    margin: "2rem"
                                }}
                            ></div>

                            <h2 className="mt-4 mb-3">CSS variables</h2>
                            <p>
                                You can use Neu's CSS variables and combine them like this:
                                <br />
                                <code>{`style="var(--neu-shadow-3), var(--neu-shadow-inset-switch-1)"`}</code>
                            </p>
                            <p>The notation is similar to the Utility classes.</p>

                            <h3 className="mt-4 mb-3">Examples</h3>
                            <p>You can combine shadows to different soft effects.</p>

                            <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                                {`<div class="mt-2 rounded-5 p-4 mx-4" style="box-shadow: var(--neu-shadow-5), var(--neu-shadow-inset-switch-1);">
    Neumorph card<br>
    <button class="btn btn-lg btn-primary mt-3" style="var(--neu-shadow-4), var(--neu-shadow-inset-switch-3)">Click me</button>
</div>`}
                            </SyntaxHighlighter>

                            <div
                                className="mt-5 rounded-5 p-4 mx-4"
                                style={{
                                    boxShadow: "var(--neu-shadow-5), var(--neu-shadow-inset-switch-1)"
                                }}
                            >
                                Neumorph card
                                <br />
                                <button
                                    className="btn btn-lg btn-primary mt-3"
                                    style={{ boxShadow: "var(--neu-shadow-4), var(--neu-shadow-inset-switch-3)" }}
                                >
                                    Click me
                                </button>
                            </div>

                            <NeumorphismExperiments />
                        </article>
                    </div>
                </main>
            </Body>
        </Page>
    )
}
