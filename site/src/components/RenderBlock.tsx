import { Prism } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function RenderBlock({ code }: { code: string }) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: code }} />
            <pre>
                <Prism language="html" style={synthwave84}>
                    {code}
                </Prism>
            </pre>
        </div>
    )
}
