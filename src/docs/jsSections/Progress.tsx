import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

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
        </>
    )
}
