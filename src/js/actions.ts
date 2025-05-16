export function init(
    actionsElement: HTMLElement,
    menu: HTMLElement | undefined = undefined,
    collapseMenu: HTMLElement | undefined = undefined
) {
    if (!menu) menu = actionsElement.querySelector<HTMLElement>(".BLUE-actions-menu")!
    if (!collapseMenu) collapseMenu = actionsElement.querySelector<HTMLElement>(".BLUE-actions-collapse-menu")!

    function updateActions() {
        // reset
        for (const item of menu!.children) {
            ;(item as HTMLElement).style.display = "none"
        }
        for (const item of collapseMenu!.children) {
            ;(item as HTMLElement).style.display = ""
            item.classList.add("BLUE-actions-collapse-visible")
        }

        let i = 0
        for (const item of menu!.children) {
            ;(item as HTMLElement).style.display = ""
            ;(collapseMenu!.children[i] as HTMLElement).style.display = "none"
            collapseMenu!.children[i].classList.remove("BLUE-actions-collapse-visible")
            if (actionsElement.scrollWidth > actionsElement.clientWidth) {
                ;(item as HTMLElement).style.display = "none"
                ;(collapseMenu!.children[i] as HTMLElement).style.display = ""
                collapseMenu!.children[i].classList.add("BLUE-actions-collapse-visible")
                break
            }
            i++
        }
    }
    updateActions()

    const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(updateActions)
    })
    resizeObserver.observe(actionsElement)

    const outsideClickHandler = (event: MouseEvent) => {
        if (!actionsElement) return
        const openDetails = actionsElement.querySelectorAll("details[open]")
        if (!openDetails || openDetails.length <= 0) return
        openDetails.forEach((details) => {
            if (!details.contains(event.target as Node)) {
                details.removeAttribute("open")
            }
        })
    }
    document.addEventListener("click", outsideClickHandler)

    return {
        updateActions,
        resizeObserver,
        destroy() {
            resizeObserver.disconnect()
            document.removeEventListener("click", outsideClickHandler)
        }
    }
}

window.blueWeb = window.blueWeb || {}
window.blueWeb.actions = {
    init
}
