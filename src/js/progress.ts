window.blueWeb = window.blueWeb || {}

window.blueWeb.progress = {
    progress: 0,
    interval: null as any,
    showTimeout: null as any,
    isVisible: false
}

window.blueWeb.progress = {
    ...window.blueWeb.progress,
    start: (
        id = "blueWebProgress",

        /**
         * @type {HTMLElement | string}
         * @description Parent element to append the progress bar to. Can be a selector string or an HTMLElement.
         */
        parent = document.body,
        ariaLabel = "Loading data",
        positionClass = "fixed-top",
        toleranceTime = 300 // Toleranzzeit in ms
    ) => {
        const parentEl =
            typeof parent === "string" || parent instanceof String ? document.querySelector(parent.toString()) : parent

        window.blueWeb.progress.progress = 0
        window.blueWeb.progress.isVisible = false

        window.blueWeb.progress.showTimeout = setTimeout(() => {
            let progressEl = document.getElementById(id)

            if (!progressEl) {
                progressEl = document.createElement("div")
                progressEl.id = id
                progressEl.className = `progress ${positionClass} rounded-0`
                progressEl.setAttribute("style", "--bs-progress-height: 0.25rem")
                progressEl.setAttribute("role", "progressbar")
                progressEl.setAttribute("aria-label", ariaLabel)
                progressEl.setAttribute("aria-valuemin", "0")
                progressEl.setAttribute("aria-valuemax", "100")
                progressEl.innerHTML = /*html*/ `<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>`
                parentEl!.appendChild(progressEl)
            }

            window.blueWeb.progress.isVisible = true

            const progressBar = progressEl.querySelector(".progress-bar") as HTMLElement | null
            if (!progressBar) return

            window.blueWeb.progress.interval = setInterval(function () {
                // Simuliere einen natürlichen Anstieg
                var increment = Math.random() * 5 // Zufälliger Anstieg zwischen 0 und 5
                window.blueWeb.progress.progress += increment
                window.blueWeb.progress.progress = Math.min(window.blueWeb.progress.progress, 90) // Fortschritt darf nicht über 90% gehen während des Ladens

                // Aktualisiere die Progressbar
                progressBar.style.width = window.blueWeb.progress.progress + "%"
                progressEl?.setAttribute("aria-valuenow", Math.round(window.blueWeb.progress.progress).toString())

                // Stoppe das Intervall, wenn 90% erreicht sind
                if (window.blueWeb.progress.progress >= 90) {
                    clearInterval(window.blueWeb.progress.interval)
                }
            }, 200) // Update alle 200ms
        }, toleranceTime)
    },
    stop: (id = "blueWebProgress") => {
        // Stoppe Timeout falls noch nicht abgelaufen
        if (window.blueWeb.progress.showTimeout) {
            clearTimeout(window.blueWeb.progress.showTimeout)
        }

        // Stoppe das Intervall
        if (window.blueWeb.progress.interval) {
            clearInterval(window.blueWeb.progress.interval)
        }

        const progressEl = document.getElementById(id)

        // Wenn der Ladebalken noch nicht sichtbar war, entferne nichts
        if (!progressEl || !window.blueWeb.progress.isVisible) {
            window.blueWeb.progress.isVisible = false
            return
        }

        const progressBar = progressEl.querySelector(".progress-bar") as HTMLElement | null
        if (!progressBar) return

        // Setze auf 100%
        window.blueWeb.progress.progress = 100
        progressBar.style.width = "100%"
        progressEl.setAttribute("aria-valuenow", "100")

        // Entferne nach kurzer Verzögerung
        setTimeout(() => {
            progressEl.remove()
            window.blueWeb.progress.isVisible = false
        }, 300)
    }
}

export default window.blueWeb.progress
