export class SideLayout extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
        this.addEventListeners()
    }

    render() {
        if (!this.shadowRoot) return
        const language = document.documentElement.lang || navigator.language
        const toggleSidebarText = language.startsWith("de") ? "Seitenleiste umschalten" : "Toggle sidebar"
        this.shadowRoot!.innerHTML = /* HTML */ `
            <style>
                :host {
                    --spacing: 0.25rem;
                    --drawer-side-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                        rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
                    --toggler-size: calc(
                        var(--bs-btn-border-width, 1px) + var(--bs-btn-padding-y, 0.375rem) +
                            (var(--bs-btn-font-size, 1rem) * var(--bs-btn-line-height, 1.5)) +
                            var(--bs-btn-padding-y, 0.375rem) + var(--bs-btn-border-width, 1px)
                    );
                    --side-width: 18rem;
                    --base-z-index: 0;
                }

                .root {
                    position: relative;
                    display: grid;
                    height: 100%;
                    grid-template-columns:
                        0 var(--toggler-size) calc(var(--side-width) - var(--toggler-size))
                        auto;
                    grid-template-rows: var(--toggler-size) auto;
                }

                .hidden-input {
                    position: fixed;
                    --size: 0;
                    height: var(--size);
                    width: var(--size);
                    appearance: none;
                    opacity: 0;
                }

                .toggler {
                    grid-column-start: 2;
                }

                .hidden-input:focus-visible + .toggler ::slotted(*) {
                    --trigger-box-shadow: var(--trigger-focus-box-shadow, inset 0 0 0.25rem);
                }

                @media (width < 64rem) {
                    .toggler[for="layout-expand"] {
                        display: none;
                    }
                }

                @media (width >= 64rem) {
                    .toggler[for="layout-drawer"] {
                        display: none;
                    }
                }

                .toggler svg {
                    display: inline-block;
                    --size: 1em;
                    width: var(--size);
                    height: var(--size);
                    fill: currentColor;
                    margin: calc((var(--toggler-size) - var(--size)) / 2);
                }

                .header {
                    grid-column-start: 3;
                    grid-column-end: 5;
                }

                .side {
                    overflow: auto;
                }

                @media (width < 64rem) {
                    .side {
                        translate: -100% 0;
                        height: 100%;
                        transition: translate 0.2s ease;
                    }

                    #layout-drawer:checked ~ .side {
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: calc(var(--base-z-index) + 1);
                        translate: 0;
                        width: calc(var(--spacing) * 80);
                        box-shadow: var(--drawer-side-shadow);
                    }
                }

                @media (width >= 64rem) {
                    #layout-expand:checked ~ .side {
                        grid-column-start: 2;
                        grid-column-end: 4;
                    }
                }

                .main {
                    overflow: auto;
                    grid-column-start: 2;
                    grid-column-end: 5;
                }

                @media (width >= 64rem) {
                    #layout-expand:checked ~ .main {
                        grid-column-start: 4;
                    }
                }

                .overlay {
                    position: fixed;
                    z-index: var(--base-z-index);
                    inset: 0;
                    display: none;
                }

                @media (width < 64rem) {
                    #layout-drawer:checked ~ .overlay {
                        display: block;
                    }
                }
            </style>

            <div class="root">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <symbol id="bi-list" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        ></path>
                    </symbol>
                </svg>

                <input
                    id="layout-expand"
                    type="checkbox"
                    class="hidden-input"
                    ${!localStorage.getItem("side-layout-shrink") ? "checked" : ""}
                />
                <label class="toggler" for="layout-expand" title="${toggleSidebarText}" role="button">
                    <slot name="expand-toggler">
                        <svg role="img">
                            <use xlink:href="#bi-list"></use>
                        </svg>
                    </slot>
                </label>

                <input id="layout-drawer" type="checkbox" class="hidden-input" />
                <label class="toggler" for="layout-drawer" title="${toggleSidebarText}" role="button">
                    <slot name="drawer-toggler">
                        <svg role="img">
                            <use xlink:href="#bi-list"></use>
                        </svg>
                    </slot>
                </label>

                <header class="header"><slot name="header"></slot></header>
                <div class="side"><slot name="side"></slot></div>
                <main class="main"><slot></slot></main>
                <label aria-label="Close sidebar" for="layout-drawer" class="overlay"
                    ><slot name="overlay"></slot
                ></label>
            </div>
        `
    }

    addEventListeners() {
        if (!this.shadowRoot) return
        const layoutExpandInput = this.shadowRoot.querySelector("#layout-expand") as HTMLInputElement
        layoutExpandInput.addEventListener("change", this.handleLayoutExpandChange.bind(this))
    }

    handleLayoutExpandChange(event: Event) {
        const input = event.target as HTMLInputElement
        if (input.checked) {
            localStorage.removeItem("side-layout-shrink")
        } else {
            localStorage.setItem("side-layout-shrink", "true")
        }
    }
}

customElements.define("side-layout", SideLayout)
