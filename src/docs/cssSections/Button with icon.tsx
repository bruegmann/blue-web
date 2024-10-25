import { useEffect, useRef, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import prettier from "prettier/standalone"
import parserHtml from "prettier/parser-html"
import { A } from "blue-react"

export default function ButtonWithIcon() {
    const ref = useRef<HTMLButtonElement>(null)
    const [markup, setMarkup] = useState<string>("")

    const updateMarkup = () => {
        if (ref.current) {
            setMarkup(
                prettier.format(ref.current.outerHTML, {
                    parser: "html",
                    plugins: [parserHtml],
                    tabWidth: 4,
                    useTabs: false,
                    singleQuote: false
                })
            )
        }
    }

    useEffect(() => {
        updateMarkup()
    }, [ref])

    return (
        <>
            <p>
                Blue Web enhances{" "}
                <A href="https://getbootstrap.com/docs/5.3/helpers/icon-link/#example" target="_blank">
                    Bootstrap's icon link helper
                </A>{" "}
                with the <code>.blue-btn-icon-wrapper</code> class, enabling icons to be wrapped in a <code>span</code>{" "}
                element. This simplifies the integration for Blue React and Blue Blazor by allowing icons to be passed
                as props more easily.
            </p>

            <button
                ref={ref}
                type="button"
                className="btn blue-btn-soft-secondary icon-link icon-link-hover"
                onClick={() => {
                    updateMarkup()
                }}
            >
                Hover me!{" "}
                <span className="blue-btn-icon-wrapper" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10240 10240">
                        <path d="M1634 3023l3200-1600c186-93 386-93 572 0l3200 1600c222 111 354 324 354 573v3688c0 249-132 462-354 573L5406 9457c-186 93-386 93-572 0L1634 7857c-222-111-354-324-354-573V3596c0-249 132-462 354-573zm286 853v3408l2880 1440V5316L1920 3876zm5968-496L5120 1996 2352 3380l2768 1384 2768-1384z"></path>
                    </svg>
                </span>
            </button>

            <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">
                {markup}
            </SyntaxHighlighter>
        </>
    )
}
