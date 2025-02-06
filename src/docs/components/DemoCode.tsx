import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import prettier from "prettier/standalone"
import parserHtml from "prettier/parser-html"
import { useEffect, useRef, useState } from "react"

export interface DemoCodeProps {
    children: React.ReactNode
    language?: string
}

export default function DemoCode({ children, language = "html" }: DemoCodeProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [markup, setMarkup] = useState<string>("")

    useEffect(() => {
        if (containerRef.current) {
            setMarkup(
                prettier.format(containerRef.current.innerHTML, {
                    parser: "html",
                    plugins: [parserHtml],
                    tabWidth: 4,
                    useTabs: true,
                    singleQuote: false,
                    printWidth: 120
                })
            )
        }
    }, [children])

    return (
        <>
            <div ref={containerRef}>{children}</div>

            <SyntaxHighlighter style={syntaxHighlighterStyle} language={language}>
                {markup}
            </SyntaxHighlighter>
        </>
    )
}
