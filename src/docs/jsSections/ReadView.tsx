import { FC, ReactNode, useId, useState } from "react"
import "../../js/edit-view"
import "../../js/read-view"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { A } from "blue-react"

const EditView = "edit-view" as unknown as FC<{
    onConfirm?: () => void
    onDismiss?: () => void
    children?: ReactNode
}>

const ReadView = "read-view" as unknown as FC<{
    onEditRequested?: () => void
    children?: ReactNode
    hidden?: boolean
    id?: string
}>

const defaultValue = "https://bruegmann.github.io"

export default function ReadViewPage() {
    const [value, setValue] = useState("https://bruegmann.github.io")
    const [editValue, setEditValue] = useState("https://bruegmann.github.io")
    const [editing, setEditing] = useState(false)

    const id = useId()

    const confirm = () => {
        console.log("confirm here")
        console.log(editing)
        setEditing(false)
        setValue(editValue)
    }

    const cancel = () => {
        console.log("cancel here")
        setEditing(false)
        setEditValue(value)
    }

    return (
        <>
            <p>
                A Web Component that displays a read view of its content and allows the user to switch to an edit view.
            </p>

            <div style={{ marginLeft: "-.75rem" }}>
                <label
                    htmlFor={id}
                    className="form-label text-primary-emphasis fw-medium small mb-1"
                    style={{ marginLeft: ".75rem" }}
                >
                    Enter URL
                </label>

                {editing ? (
                    <EditView onDismiss={cancel} onConfirm={confirm}>
                        <textarea
                            id={id}
                            className="form-control"
                            autoFocus
                            value={editValue}
                            onChange={({ target }) => setEditValue(target.value)}
                        />
                    </EditView>
                ) : (
                    <ReadView onEditRequested={() => setEditing(true)} aria-describedby={id}>
                        <div
                            className="form-control-plaintext"
                            style={{ paddingLeft: ".75rem", paddingRight: ".75rem" }}
                        >
                            <A href={value} target="_blank">
                                Open link
                            </A>{" "}
                            {value}
                        </div>
                    </ReadView>
                )}
            </div>

            <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">{
                /* html */ `
<read-view id="my-read-view" onEditRequested="setEditing(true)">

    <a href="#">bla</a> {value}
    `
            }</SyntaxHighlighter>
        </>
    )
}
