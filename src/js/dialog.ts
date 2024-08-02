import { guid } from "./utils"
import { getPhrase } from "./shared"
import * as bootstrap from "bootstrap"

export type DialogType = "ask" | "tell" | "verify"

export interface DialogOptions {
    title?: string
    icon?: string
    switchPrimaryBtn?: boolean
    acceptBtnText?: string
    cancelBtnText?: string
    inputType?: string
}

export async function ask(text: string, options: DialogOptions = {}): Promise<string | boolean> {
    return await dialog("ask", text, options)
}

export async function tell(text: string, options: DialogOptions = {}): Promise<void> {
    await dialog("tell", text, options)
}

export async function verify(text: string, options: DialogOptions = {}): Promise<boolean> {
    return (await dialog("verify", text, options)) === true
}

async function dialog(dialogType: DialogType, text: string, options: DialogOptions = {}) {
    let {
        title = getPhrase("Message"),
        icon = undefined,
        switchPrimaryBtn = false,
        acceptBtnText = dialogType === "verify" ? getPhrase("Yes") : "OK",
        cancelBtnText = dialogType === "verify" ? getPhrase("No") : getPhrase("Cancel"),
        inputType = "text"
    } = options
    const id = guid()

    const addToDom = () => {
        document.body.insertAdjacentHTML(
            "beforeend",
            /* html */ `        <div
class="modal fade"
id="${id}"
tabindex="-1"
aria-labelledby="${id}-label"
aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    ${icon ? /* html */ `<div class="me-2">${icon}</div>` : ""}
                    <h1 class="modal-title fs-5" id="${id}-label">
                        ${title}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    ${
                        dialogType === "ask"
                            ? /* html */ `<label for="${id}-input">${text}</label>
                        <input type="${inputType}" id="${id}-input" class="form-control mt-3" />`
                            : text
                    }
                </div>
                <div class="modal-footer">
                    ${
                        dialogType === "verify" || dialogType === "ask"
                            ? /* html */ `<button
                        type="button"
                        class="btn ${switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary"}"
                        data-bs-dismiss="modal"
                    >
                        ${cancelBtnText}
                    </button>`
                            : ""
                    }
                    <button
                        type="submit"
                        class="btn ${switchPrimaryBtn ? "blue-btn-plain-primary" : "btn-primary"}"
                    >
                        ${acceptBtnText}
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`
        )
    }

    if (!document.getElementById(id)) {
        addToDom()
    }

    return new Promise<boolean | string>((resolve) => {
        const modalEl = document.getElementById(id)
        const modal = new bootstrap.Modal(modalEl as Element)

        const removeFromDom = () => {
            const modalEl = document.getElementById(id)
            if (modalEl) {
                modalEl.removeEventListener("hidden.bs.modal", onHidden)
                modalEl.remove()
            }
        }

        const onHidden = () => {
            removeFromDom()
            resolve(false)
        }

        modal.show()
        modalEl?.addEventListener("hidden.bs.modal", onHidden)

        modalEl?.querySelector("form")?.addEventListener("submit", (e) => {
            e.preventDefault()

            if (dialogType === "ask") {
                modal.hide()
                removeFromDom()
                resolve((modalEl?.querySelector("input") as HTMLInputElement).value || "")
            }

            modal.hide()
            removeFromDom()
            resolve(true)
        })
    })
}

declare global {
    interface Window {
        blueWeb: any
    }
}

window.blueWeb = window.blueWeb || {}
window.blueWeb.dialog = {
    ask,
    tell,
    verify
}
