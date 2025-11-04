import { DxfViewer as DxfViewerLib } from "dxf-viewer"

export class DxfViewer extends HTMLElement {
    private viewer: DxfViewerLib | null = null
    private container: HTMLDivElement | null = null
    private resizeObserver: ResizeObserver | null = null
    private THREE: any = null

    static get observedAttributes() {
        return ["src", "clear-color", "auto-resize"]
    }

    async connectedCallback() {
        if (!this.THREE) {
            this.THREE = await import("three")
        }
        this.render()
        this.loadDxf()
    }

    disconnectedCallback() {
        this.cleanup()
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue === newValue) return

        if (name === "src") {
            this.loadDxf()
        }
    }

    private render() {
        this.container = document.createElement("div")
        this.container.style.width = "100%"
        this.container.style.height = "100%"
        this.container.style.minHeight = "400px"
        this.appendChild(this.container)

        if (this.getAttribute("auto-resize") !== "false") {
            this.resizeObserver = new ResizeObserver(() => {
                if (this.viewer && this.container) {
                    this.viewer.SetSize(this.container.clientWidth, this.container.clientHeight)
                }
            })
            this.resizeObserver.observe(this.container)
        }
    }

    private async loadDxf() {
        if (!this.container) return

        const src = this.getAttribute("src")
        if (!src) return

        try {
            if (this.viewer) {
                this.viewer.Destroy()
                this.viewer = null
            }

            this.container.innerHTML = ""

            this.viewer = new DxfViewerLib(this.container, {
                clearColor: this.parseClearColor(this.getAttribute("clear-color") || "#ffffff"),
                autoResize: this.getAttribute("auto-resize") !== "false",
                sceneOptions: {
                    wireframeMesh: this.getAttribute("wireframe") === "true"
                }
            })

            const fontsAttr = this.getAttribute("fonts")
            const fonts = fontsAttr ? fontsAttr.split(",").map((f) => f.trim()) : null

            await this.viewer.Load({
                url: src,
                fonts: fonts
            })

            this.viewer.Subscribe("loaded", () => {
                this.dispatchEvent(
                    new CustomEvent("dxf-loaded", {
                        detail: { viewer: this.viewer }
                    })
                )
            })

            this.viewer.Subscribe("message", (event: any) => {
                console.log("DXF Viewer message:", event.message)
            })
        } catch (error) {
            console.error("Error loading DXF file:", error)
            this.dispatchEvent(
                new CustomEvent("dxf-error", {
                    detail: { error }
                })
            )
        }
    }

    private parseClearColor(color: string | null): any {
        if (!this.THREE) return null
        if (!color) return new this.THREE.Color(0xffffff)
        return new this.THREE.Color(color)
    }

    private cleanup() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect()
            this.resizeObserver = null
        }

        if (this.viewer) {
            this.viewer.Destroy()
            this.viewer = null
        }
    }

    public getViewer(): DxfViewerLib | null {
        return this.viewer
    }

    public async reload() {
        await this.loadDxf()
    }

    public showLayer(name: string, show: boolean) {
        if (this.viewer) {
            this.viewer.ShowLayer(name, show)
        }
    }

    public fitView(minX: number, maxX: number, minY: number, maxY: number, padding: number = 0) {
        if (this.viewer) {
            this.viewer.FitView(minX, maxX, minY, maxY, padding)
        }
    }

    public getLayers() {
        return this.viewer ? Array.from(this.viewer.GetLayers()) : []
    }

    public getBounds() {
        return this.viewer?.GetBounds() || null
    }
}

customElements.define("dxf-viewer", DxfViewer)
