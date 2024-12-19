import { Status } from "blue-react"
import {
    startLoading,
    finishLoading,
    showSuccess,
    hideSuccess,
    setAlertMessage,
    resetAlertMessage,
    guid,
    scrollToTop
} from "../../js/utils"
import { CheckCircleFill, ExclamationCircleFill, InfoCircleFill, PlayFill, XCircleFill } from "react-bootstrap-icons"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

const utilitiesFunctions = [
    {
        definition: "startLoading()",
        description: "Shows loading animation.",
        demo: (
            <button className="btn btn-light" onClick={() => startLoading()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "finishLoading()",
        description: "Hides loading animation.",
        demo: (
            <button className="btn btn-light" onClick={() => finishLoading()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "showSuccess()",
        description: "Shows success symbol.",
        demo: (
            <button className="btn btn-light" onClick={() => showSuccess()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "hideSuccess()",
        description: "Hides success symbol.",
        demo: (
            <button className="btn btn-light" onClick={() => hideSuccess()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "setAlertMessage(message, alertClassName, close, detailText)",
        description: (
            <span>
                Shows an alert message.
                <br />
                Possible values for alertClassName: <code>loading</code>, <code>success</code>, <code>info</code>,{" "}
                <code>warning</code>, <code>danger</code>
            </span>
        ),
        demo: (
            <button
                className="btn btn-light"
                onClick={() =>
                    setAlertMessage(
                        "Hey, this is a message",
                        "danger",
                        true,
                        `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
`
                    )
                }
            >
                <PlayFill />
            </button>
        )
    },
    {
        definition: "resetAlertMessage(alertClassName)",
        description: "Resets alert message and removes it.",
        demo: (
            <button className="btn btn-light" onClick={() => resetAlertMessage("danger")}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "guid()",
        description: "Returns string of random characters.",
        demo: (
            <button className="btn btn-light" onClick={() => alert("Generated GUID: " + guid())}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "scrollToTop()",
        description: "Scrolls to the top of the page.",
        demo: (
            <button className="btn btn-light" onClick={() => scrollToTop()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "fetchData(input, init?, showErrorDetail? = true)",
        description: (
            <span>
                Uses native <code>fetch</code> function, but adds error handling and shows error messages if there are
                any.
            </span>
        )
    }
]

export default function UtilsPage() {
    const sections = [
        {
            title: "Usage",
            body: (
                <>
                    <p>You can import functions inidivually like this:</p>

                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="javascript"
                    >{`import { startLoading } from "blue-web/dist/js/utils.js"
                        
startLoading()`}</SyntaxHighlighter>

                    <p>
                        When using TypeScript, just import from <code>"blue-web/dist/js/utils"</code>.
                    </p>

                    <p>
                        <code>utils.js</code> is provided as ESM, so you can use it as a module in the browser:
                    </p>

                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<button type="button" id="btn" class="btn blue-btn-soft-primary">
Start loader
</button>

<script type="module">
import { startLoading } from "./node_modules/blue-web/dist/js/utils.js"

document.getElementById("btn").addEventListener("click", () => {
    startLoading()
})
</script>`}</SyntaxHighlighter>
                </>
            )
        },
        {
            title: "Required markup",
            body: (
                <>
                    <p>
                        Some of the util functions to show status information require to have some HTML elements
                        available. If you use the{" "}
                        <a href="https://bruegmann.github.io/blue-react/v9/component/Layout">
                            <code>Layout</code> React component
                        </a>
                        , you don't have to worry about this. Otherwise you can add the following markup to the bottom
                        of your HTML:
                    </p>

                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<div class="blue-status-circle blue-loading blue-status-loading"><div class="spinner-bounce-circle"><div></div><div></div></div></div>
<div class="blue-status-circle blue-status-success"><svg class="bi bi-check-circle-fill" fill=currentColor height=1em viewBox="0 0 16 16" width=1em xmlns=http://www.w3.org/2000/svg><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></div>
<div class="blue-status-circle blue-status-info"><svg class="bi bi-info-circle-fill" fill=currentColor height=1em viewBox="0 0 16 16" width=1em xmlns=http://www.w3.org/2000/svg><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path></svg></div>
<div class="blue-status-circle blue-status-warning"><svg class="bi bi-exclamation-circle-fill" fill=currentColor height=1em viewBox="0 0 16 16" width=1em xmlns=http://www.w3.org/2000/svg><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg></div>
<div class="blue-status-circle blue-status-danger"><svg class="bi bi-x-circle-fill" fill=currentColor height=1em viewBox="0 0 16 16" width=1em xmlns=http://www.w3.org/2000/svg><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"></path></svg></div>
<div class="alert blue-status-alert"><button aria-label=Close class="btn-close float-end mb-1" type=button></button><div class=alert-body></div></div>`}</SyntaxHighlighter>
                </>
            )
        },
        {
            title: "JavaScript Functions",
            body: (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Definition</th>
                                <th>Description</th>
                                <th>Demo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {utilitiesFunctions
                                .sort((a, b) =>
                                    a.definition > b.definition ? 1 : b.definition > a.definition ? -1 : 0
                                )
                                .map((fun, index) => (
                                    <tr key={index}>
                                        <td>
                                            <code>{fun.definition}</code>
                                        </td>
                                        <td>{fun.description}</td>
                                        {fun.demo ? <td>{fun.demo}</td> : <td />}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </>
            )
        }
    ]
    return (
        <>
            <div className="container flex-grow-1">
                <div className="row">
                    <div className="col-md-12">
                        {sections.map((s, i) => (
                            <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                <h3 className="mt-4 mb-3">{s.title}</h3>
                                {s.body}
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <Status
                dangerIcon={<XCircleFill />}
                infoIcon={<InfoCircleFill />}
                successIcon={<CheckCircleFill />}
                warningIcon={<ExclamationCircleFill />}
            />
        </>
    )
}
