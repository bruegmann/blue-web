import { Combobox, ComboboxOption } from "$/recipes/select-list/combobox"
import { useState } from "react"
import Button from "blue-react/dist/components/Button"

export default function Usage() {
    const [selectedValue, setSelectedValue] = useState("Banana")

    return (
        <div className="row">
            <div className="col">
                <h3>Bindable</h3>

                <Combobox value={selectedValue} onChange={setSelectedValue}>
                    <ComboboxOption value="Apple">🍎 Apple</ComboboxOption>
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
                <h3>Color prop will affect the button and active item</h3>

                <Combobox variant="filled" color="dark">
                    <ComboboxOption value="Apple" />
                    <ComboboxOption value="Banana" />
                    <ComboboxOption value="Cherry" />
                    <ComboboxOption value="Date" />
                </Combobox>
            </div>
        </div>
    )
}
