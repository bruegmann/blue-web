class Odometer extends HTMLElement {
    private wrapper!: HTMLSpanElement
    private _initialized = false

    static get observedAttributes() {
        return ["value"]
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        if (!this._initialized) {
            this.setup()
            this._initialized = true
            // Initialen Wert anwenden (Markup-Attribut oder default)
            this.updateValue(this.value)
        }
    }

    private setup() {
        const style = document.createElement("style")
        style.textContent = /* CSS */ `
        :host {
          display: inline-flex;
          min-width: 1em;
          height: 1em;
          text-align: center;
          overflow: hidden;
          line-height: 1em;
          transition: background-color 0.3s;
        }
        .numbers {
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .numbers span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 1em;
        }`

        const wrapper = document.createElement("span")
        wrapper.classList.add("numbers")
        wrapper.setAttribute("aria-hidden", "true")

        for (let i = 0; i <= 9; i++) {
            const s = document.createElement("span")
            s.textContent = String(i)
            wrapper.appendChild(s)
        }
        const plus = document.createElement("span")
        plus.textContent = "9+"
        wrapper.appendChild(plus)

        this.shadowRoot!.append(style, wrapper)
        this.wrapper = wrapper
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (name === "value" && newValue !== oldValue && this._initialized) {
            this.updateValue(parseInt(newValue ?? "0", 10))
        }
    }

    private updateValue(value: number) {
        const index = value > 9 ? 10 : Math.max(0, value)
        const height = this.wrapper.getBoundingClientRect().height || 16
        this.wrapper.style.transform = `translateY(-${index * height}px)`
        const displayValue = value > 9 ? "9+" : `${value}`
        this.setAttribute("aria-label", displayValue)
    }

    set value(value: number) {
        const current = this.value
        if (current !== value) {
            this.setAttribute("value", String(value))
            if (this._initialized) {
                this.updateValue(value)
            }
        }
    }

    get value(): number {
        return parseInt(this.getAttribute("value") || "0", 10) || 0
    }
}

if (!customElements.get("bl-odometer")) {
    customElements.define("bl-odometer", Odometer)
}

export { Odometer }
export default Odometer
