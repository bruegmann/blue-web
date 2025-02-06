import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import "../../js/progress"
import DemoCode from "../components/DemoCode"

export default function ProgressPage() {
    return (
        <>
            <p>A "fake" progress bar that will appear fixed at the top of the page.</p>

            <div className="row">
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-secondary"
                        onClick={() => window.blueWeb.progress.start()}
                    >
                        Start
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `window.blueWeb.progress.start()`
                    }</SyntaxHighlighter>
                </div>
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-secondary"
                        onClick={() => window.blueWeb.progress.stop()}
                    >
                        Stop
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `window.blueWeb.progress.stop()`
                    }</SyntaxHighlighter>
                </div>
            </div>

            <p>
                You can customize the element further by setting a custom ID, parent element and position class name.
                This allows you to attach the progress element to some other element than the body.
            </p>

            <DemoCode>
                <div
                    id="myElement"
                    className="bg-secondary-subtle border border-primary rounded-2 p-3 position-relative"
                >
                    Add progress bar to this
                </div>
            </DemoCode>

            <div className="row">
                <div className="col-md">
                    <button
                        type="button"
                        id="btnStartLoading"
                        className="btn btn-primary me-1"
                        onClick={() =>
                            window.blueWeb.progress.start(
                                "myElementProgress",
                                document.getElementById("myElement"),
                                "Loading data for my element",
                                "position-absolute top-0 start-0 end-0"
                            )
                        }
                    >
                        Start loading
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `window.blueWeb.progress.start(
    "myElementProgress",
    document.getElementById("myElement"),
    "Loading data for my element",
    "position-absolute top-0 start-0 end-0"
)`
                    }</SyntaxHighlighter>
                </div>
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-primary"
                        onClick={() => window.blueWeb.progress.stop("myElementProgress")}
                    >
                        Stop loading
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `window.blueWeb.progress.stop("myElementProgress")`
                    }</SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}
