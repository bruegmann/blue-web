import { useEffect, useRef, useState } from "react"
import DemoCode from "../components/DemoCode"
import { A } from "blue-react"

const offcanvasPlacements = ["top", "start", "bottom", "end"]

export default function ModalPage() {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const offcanvasButtonRef = useRef<HTMLButtonElement>(null)

    const [offcanvasPlacement, setOffcanvasPlacement] = useState("start")

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.setAttribute("onclick", `my_modal.showModal()`)
        }
    }, [buttonRef])

    useEffect(() => {
        if (offcanvasButtonRef.current) {
            offcanvasButtonRef.current.setAttribute("onclick", `my_offcanvas.showModal()`)
        }
    }, [offcanvasButtonRef])

    return (
        <>
            <p>
                Allows to use{" "}
                <A href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank">
                    Bootstrap Modals
                </A>{" "}
                but with the native dialog element and without the need of Bootstrap's JavaScript.
            </p>

            <DemoCode>
                <button ref={buttonRef} type="button" className="btn blue-btn-soft-primary">
                    Open modal
                </button>

                <dialog className="blue-modal modal" id="my_modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Modal title</h1>
                                <form method="dialog" style={{ display: "contents" }}>
                                    <button type="submit" className="btn-close" aria-label="Close"></button>
                                </form>
                            </div>
                            <div className="modal-body">Hello World</div>
                        </div>
                    </div>

                    <form method="dialog" className="blue-modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
            </DemoCode>

            <h3 className="mt-4 mb-3">Offcanvas</h3>

            <p>
                Because{" "}
                <A href="https://getbootstrap.com/docs/5.3/components/offcanvas/" target="_blank">
                    Bootstrap Offcanvas
                </A>{" "}
                works quite similar, you can also use <code>.blue-modal</code> with that.
            </p>

            <div className="form-floating mb-3">
                <select
                    id="offcanvasPlacement"
                    className="form-select"
                    value={offcanvasPlacement}
                    onChange={(e) => setOffcanvasPlacement(e.target.value)}
                >
                    {offcanvasPlacements.map((placement) => (
                        <option key={placement} value={placement}>
                            {placement}
                        </option>
                    ))}
                </select>
                <label htmlFor="offcanvasPlacement">Placement of offcanvas</label>
            </div>

            <DemoCode>
                <button ref={offcanvasButtonRef} type="button" className="btn blue-btn-soft-primary">
                    Open offcanvas
                </button>

                <dialog className="blue-modal modal" id="my_offcanvas">
                    <div className={`offcanvas offcanvas-${offcanvasPlacement} show`}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                Offcanvas
                            </h5>
                            <form method="dialog" style={{ display: "contents" }}>
                                <button type="submit" className="btn-close" aria-label="Close"></button>
                            </form>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                text, images, lists, etc.
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="blue-modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
            </DemoCode>
        </>
    )
}
