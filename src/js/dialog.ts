import { guid } from "./utils"
import { getPhrase } from "./shared"

export type DialogType = "ask" | "tell" | "verify"

export interface DialogOptions {
    title?: string
    icon?: string
    switchPrimaryBtn?: boolean
    acceptBtnText?: string
    cancelBtnText?: string
    inputType?: string
    defaultValue?: string
}

export async function ask(text: string, options: DialogOptions | string = {}): Promise<string | boolean> {
    return await dialog("ask", text, options)
}

export async function tell(text: string, options: DialogOptions | string = {}): Promise<void> {
    await dialog("tell", text, options)
}

export async function verify(text: string, options: DialogOptions | string = {}): Promise<boolean> {
    return (await dialog("verify", text, options)) === true
}

async function dialog(dialogType: DialogType, text: string, options: DialogOptions | string = {}) {
    let {
        title = getPhrase("Message"),
        icon = undefined,
        switchPrimaryBtn = false,
        acceptBtnText = dialogType === "verify" ? getPhrase("Yes") : "OK",
        cancelBtnText = dialogType === "verify" ? getPhrase("No") : getPhrase("Cancel"),
        inputType = "text",
        defaultValue
    } = typeof options === "string" ? JSON.parse(options) : options
    const id = guid()

    const addToDom = () => {
        document.body.insertAdjacentHTML(
            "beforeend",
            /* HTML */ `<dialog class="blue-modal modal" id="${id}" aria-labelledby="${id}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${icon ? /* html */ `<div class="me-2">${icon}</div>` : ""}
                                <h1 class="modal-title fs-5" id="${id}-label">${title}</h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="${cancelBtnText}"
                                    onclick="document.getElementById('${id}').close()"
                                ></button>
                            </div>
                            <div class="modal-body">
                                ${dialogType === "ask"
                                    ? /* HTML */ `<label for="${id}-input">${text}</label>
                                          <input
                                              type="${inputType}"
                                              ${defaultValue !== undefined ? ` value="${defaultValue}"` : ""}
                                              id="${id}-input"
                                              class="form-control mt-3"
                                          />`
                                    : text}
                            </div>
                            <div class="modal-footer">
                                ${dialogType === "verify" || dialogType === "ask"
                                    ? /* HTML */ `<button
                                          type="button"
                                          class="btn ${switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${id}').close()"
                                      >
                                          ${cancelBtnText}
                                      </button>`
                                    : ""}
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

                <form method="dialog" class="blue-modal-backdrop">
                    <button>${cancelBtnText}</button>
                </form>
            </dialog>`
        )
    }

    if (!document.getElementById(id)) {
        addToDom()
    }

    return new Promise<boolean | string>((resolve) => {
        const modalEl = document.getElementById(id) as HTMLDialogElement | null

        const removeFromDom = () => {
            const modalEl = document.getElementById(id)
            if (modalEl) {
                modalEl.remove()
            }
        }

        const onHidden = () => {
            removeFromDom()
            resolve(false)
        }

        modalEl?.showModal()
        modalEl?.addEventListener("close", onHidden)

        modalEl?.querySelector(".modal-content > form")?.addEventListener("submit", (e) => {
            e.preventDefault()

            if (dialogType === "ask") {
                modalEl.close()
                removeFromDom()
                resolve((modalEl?.querySelector("input") as HTMLInputElement).value || "")
            }

            modalEl.close()
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
