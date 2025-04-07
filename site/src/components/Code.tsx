import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import CopyToClipboard from "./CopyToClipboard"

export interface CodeProps {
    code: string
    language?: string
}

export default function Code({ code, language = "html" }: CodeProps) {
    return (
        <div className="position-relative">
            <CopyToClipboard content={code} className="position-absolute top-0 end-0 mt-1 me-1 btn-sm" />

            <SyntaxHighlighter style={syntaxHighlighterStyle} language={language}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
