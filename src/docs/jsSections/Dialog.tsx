import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { ask, tell, verify } from "../../js/dialog"

export default function DialogPage() {
    return (
        <>
            <p>
                These functions are meant as a nicer alternative to the native <code>alert</code>, <code>confirm</code>{" "}
                and <code>prompt</code> functions. They are not meant to be used as a replacement for more complex
                modals.
            </p>

            <div className="row">
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-secondary"
                        onClick={async () => {
                            const yesOrNo = await verify("Do you want to continue?")
                            await tell(yesOrNo ? "You clicked yes" : "You clicked no")
                        }}
                    >
                        Verify
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `import { verify, tell } from "blue-web/dist/js/dialog.js"

(async () => {
    const yesOrNo = await verify("Do you want to continue?")
    await tell(yesOrNo ? "You clicked yes" : "You clicked no")
})()`
                    }</SyntaxHighlighter>
                </div>
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-secondary"
                        onClick={async () => {
                            await tell("A message for you")
                        }}
                    >
                        Tell
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `import { tell } from "blue-web/dist/js/dialog.js"

(async () => {
    await tell("A message for you")
})()`
                    }</SyntaxHighlighter>
                </div>
                <div className="col-md">
                    <button
                        type="button"
                        className="btn blue-btn-soft-secondary"
                        onClick={async () => {
                            const answer = await ask("What is the question?", {
                                title: "Question"
                            })
                            await tell("You asked: " + answer)
                        }}
                    >
                        Ask
                    </button>

                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{
                        /* javascript */ `import { ask, tell } from "blue-web/dist/js/dialog.js"

(async () => {
    const answer = await ask("What is the question?", {
        title: "Question"
    })
    await tell("You asked: " + answer)
})()`
                    }</SyntaxHighlighter>
                </div>
            </div>

            <p>
                To use these functions outside of a module, you can also use <code>window.blueWeb.dialog.ask</code>,{" "}
                <code>window.blueWeb.dialog.tell</code> and <code>window.blueWeb.dialog.verify</code>.
            </p>
        </>
    )
}
