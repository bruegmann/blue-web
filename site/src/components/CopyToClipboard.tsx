import { useEffect, useState } from "react"
import { Clipboard, ClipboardCheck } from "react-bootstrap-icons"

export interface CopyToClipboardProps {
    content: string
    className?: string
}

export default function CopyToClipboard({ content, className }: CopyToClipboardProps) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false)
            }, 2000)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [copied])

    return (
        <button
            className={`btn icon-link ${copied ? "btn-success" : "btn-primary"} ${className}`}
            onClick={() => {
                navigator.clipboard.writeText(content)
                setCopied(true)
            }}
        >
            {copied ? <ClipboardCheck /> : <Clipboard />}
            {copied ? "Copied!" : "Copy"}
        </button>
    )
}
