import { Combobox, ComboboxOption } from "$/recipes/select-list/combobox"
import { useState } from "react"
import Button from "blue-react/dist/components/Button"

export default function Usage() {
    const [selectedValue, setSelectedValue] = useState("Banana")

    return (
        <div className="row g-5 row-cols-lg-3">
            <div className="col">
                <h3>Bindable</h3>

                <Combobox value={selectedValue} onChange={setSelectedValue}>
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                    <ComboboxOption value="Elderberry" />
                    <ComboboxOption value="Fig" />
                    <ComboboxOption value="Grape" />
                    <ComboboxOption value="Honeydew" />
                </Combobox>

                <div className="mt-2">Selected: {selectedValue}</div>

                <Button
                    label="Change to 'Grape' from outside"
                    variant="outline"
                    sm
                    onClick={() => setSelectedValue("Grape")}
                />
            </div>

            <div className="col">
                <h3>Variants and colors</h3>

                <p>Color prop will affect the button and active item.</p>

                <Combobox variant="filled" color="dark" className="mb-1">
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                </Combobox>
                <br />

                <Combobox variant="menu-item" className="mb-1">
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                </Combobox>
                <br />

                <Combobox variant="plain" color="success">
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                </Combobox>
            </div>

            <div className="col">
                <h3>Scrollable</h3>

                <Combobox>
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                    <ComboboxOption value="Elderberry" />
                    <ComboboxOption value="Fig" />
                    <ComboboxOption value="Grape" />
                    <ComboboxOption value="Honeydew" />
                    <ComboboxOption value="Kiwi" />
                    <ComboboxOption value="Lemon" />
                    <ComboboxOption value="Mango" />
                    <ComboboxOption value="Nectarine" />
                    <ComboboxOption value="Orange" />
                    <ComboboxOption value="Papaya" />
                    <ComboboxOption value="Quince" />
                    <ComboboxOption value="Raspberry" />
                </Combobox>
            </div>

            <div className="col">
                <h3>Custom content and styling</h3>

                <Combobox>
                    <ComboboxOption value="Apple" className="fw-bold">
                        🍎 Apple
                    </ComboboxOption>
                    <ComboboxOption value="Banana" className="fw-bold">
                        🍌 Banana
                    </ComboboxOption>
                    <ComboboxOption value="Cherry" className="fw-bold">
                        🍒 Cherry
                    </ComboboxOption>
                    <ComboboxOption value="Kiwi" className="fw-bold">
                        🥝 Kiwi
                    </ComboboxOption>
                </Combobox>
            </div>

            <div className="col">
                <h3>Empty state</h3>

                <p>
                    If the listbox is empty or there are no search matches, a localized message will be shown using{" "}
                    <code>.blue-empty-message</code>.
                </p>

                <Combobox></Combobox>
            </div>

            <div className="col">
                <h3>Grouped with input</h3>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={selectedValue}
                        onChange={({ target }) => setSelectedValue(target.value)}
                    />
                    <Combobox
                        value={selectedValue}
                        onChange={setSelectedValue}
                        className="rounded-end blue-btn-square"
                        popoverEnd
                        labelHidden
                    >
                        <ComboboxOption value="Apple" />
                        <ComboboxOption value="Banana" />
                        <ComboboxOption value="Cherry" />
                        <ComboboxOption value="Date" />
                    </Combobox>
                </div>
            </div>
        </div>
    )
}
