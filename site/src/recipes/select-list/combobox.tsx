import { default as Button, type ButtonVariant, type ButtonColor } from "blue-react/dist/components/Button"
import { createContext, useContext, useId, useRef, useState, type CSSProperties, type FC, type ReactNode } from "react"
import { CheckLg, ChevronDown, Search } from "react-bootstrap-icons"

const BlSelectList = "bl-select-list" as unknown as FC<{
    class?: string
    style?: CSSProperties
    id?: string
    for?: string
    children?: ReactNode
    "active-class"?: string
    "onbl-select"?: (event: { index: number; item: HTMLElement }) => void
}>

const SelectedContext = createContext("")
const SearchContext = createContext("")

const t = {
    de: { Select: "Auswählen", Selected: "Ausgewählt", Search: "Suchen", NoItemsFound: "Keine Einträge gefunden" },
    en: { Select: "Select", Selected: "Selected", Search: "Search", NoItemsFound: "No items found" }
}[navigator.language.startsWith("de") ? "de" : "en"]

export function ComboboxOption({ value, children }: { value: string; children?: ReactNode }) {
    const selected = useContext(SelectedContext)
    const search = useContext(SearchContext)
    if (!value.toLowerCase().includes(search.toLowerCase())) return null

    const isThisSelected = selected === (value || children)

    return (
        <button
            className="list-group-item list-group-item-action d-flex"
            data-value={value}
            data-selected={isThisSelected ? "" : undefined}
        >
            {children || value}
            {isThisSelected && (
                <span className="ms-auto">
                    <CheckLg aria-hidden="true" />
                    <span className="visually-hidden">{t.Selected}</span>
                </span>
            )}
        </button>
    )
}

export function Combobox({
    children,
    value = "",
    onChange,
    variant,
    color
}: {
    children?: ReactNode
    value?: string
    onChange?: (value: string) => void
    variant?: ButtonVariant
    color?: ButtonColor
}) {
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useId()
    const popoverRef = useRef<HTMLDivElement>(null)
    const popoverId = useId()
    const listboxId = useId()

    const selectedValue = value || selected

    return (
        <>
            <Button
                label={selectedValue || `${t.Select}...`}
                iconAfter={<ChevronDown />}
                popoverTarget={popoverId}
                variant={variant}
                color={color}
                aria-haspopup="listbox"
            />

            <div
                ref={popoverRef}
                id={popoverId}
                popover=""
                onToggle={(e) => {
                    if (e.newState === "open") {
                        inputRef.current?.focus()
                    }
                }}
                className="blue-anchored blue-anchored-fallback border rounded-4 shadow p-1"
            >
                <div className="blue-input-group input-group mb-1">
                    <label htmlFor={inputId} className="input-group-text">
                        <Search />
                        <span className="visually-hidden">{t.Search}</span>
                    </label>
                    <input
                        ref={inputRef}
                        type="search"
                        className="form-control"
                        id={inputId}
                        placeholder={`${t.Search}...`}
                        autoComplete="off"
                        value={search}
                        onChange={({ target }) => setSearch(target.value)}
                        aria-autocomplete="list"
                    />
                </div>

                <BlSelectList
                    class="blue-empty-message list-group overflow-auto"
                    style={{ "--message": `"${t.NoItemsFound}"` } as CSSProperties}
                    active-class={`bg-${color || "primary"}-subtle text-${color || "primary"}-emphasis`}
                    id={listboxId}
                    for={inputId}
                    onbl-select={({ item }) => {
                        const value = item.dataset.value || item.innerText
                        setSelected(value)
                        onChange?.(value)
                        popoverRef.current?.hidePopover()
                    }}
                >
                    <SelectedContext value={selectedValue}>
                        <SearchContext value={search}>{children}</SearchContext>
                    </SelectedContext>
                </BlSelectList>
            </div>
        </>
    )
}
