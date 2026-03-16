const MENU_ITEM_SELECTOR = ".blue-menu-item"
const LABEL_SELECTOR = ".blue-menu-item-label, .text-truncate"
const AUTO_TOOLTIP_ATTR = "data-blue-overflow-tooltip"
const AUTO_TOOLTIP_CLASS_ATTR = "data-blue-overflow-tooltip-class"
const TOOLTIP_ATTR = "data-tooltip"
const TOOLTIP_CLASS = "blue-tooltip-end"

let initialized = false
let started = false
let mutationObserver: MutationObserver | null = null
let resizeObserver: ResizeObserver | null = null
let observedLabels = new WeakSet<HTMLElement>()
let scheduled = false
let resizeHandler: (() => void) | null = null

function getLabelElement(menuItem: HTMLElement): HTMLElement {
    return menuItem.querySelector<HTMLElement>(LABEL_SELECTOR) || menuItem
}

function getTooltipText(labelElement: HTMLElement): string {
    return (labelElement.textContent || "").trim()
}

function isOverflowing(labelElement: HTMLElement): boolean {
    return labelElement.scrollWidth > labelElement.clientWidth + 1
}

function clearAutoTooltip(menuItem: HTMLElement) {
    if (menuItem.getAttribute(AUTO_TOOLTIP_ATTR) === "true") {
        menuItem.removeAttribute(TOOLTIP_ATTR)
        menuItem.removeAttribute("title")
        menuItem.removeAttribute(AUTO_TOOLTIP_ATTR)
    }

    if (menuItem.getAttribute(AUTO_TOOLTIP_CLASS_ATTR) === "true") {
        menuItem.classList.remove(TOOLTIP_CLASS)
        menuItem.removeAttribute(AUTO_TOOLTIP_CLASS_ATTR)
    }
}

function applyAutoTooltip(menuItem: HTMLElement, text: string) {
    menuItem.removeAttribute("title")
    menuItem.setAttribute(TOOLTIP_ATTR, text)
    menuItem.setAttribute(AUTO_TOOLTIP_ATTR, "true")

    if (!menuItem.classList.contains(TOOLTIP_CLASS)) {
        menuItem.classList.add(TOOLTIP_CLASS)
        menuItem.setAttribute(AUTO_TOOLTIP_CLASS_ATTR, "true")
    }
}

function updateMenuItem(menuItem: HTMLElement) {
    const labelElement = getLabelElement(menuItem)

    if (resizeObserver && !observedLabels.has(labelElement)) {
        resizeObserver.observe(labelElement)
        observedLabels.add(labelElement)
    }

    const hasManualTooltip =
        (menuItem.hasAttribute(TOOLTIP_ATTR) && menuItem.getAttribute(AUTO_TOOLTIP_ATTR) !== "true") ||
        (menuItem.hasAttribute("title") && menuItem.getAttribute(AUTO_TOOLTIP_ATTR) !== "true")

    if (hasManualTooltip) {
        return
    }

    const text = getTooltipText(labelElement)
    if (!text) {
        clearAutoTooltip(menuItem)
        return
    }

    if (isOverflowing(labelElement)) {
        applyAutoTooltip(menuItem, text)
    } else {
        clearAutoTooltip(menuItem)
    }
}

function updateAll(root: ParentNode = document) {
    root.querySelectorAll<HTMLElement>(MENU_ITEM_SELECTOR).forEach((menuItem) => {
        updateMenuItem(menuItem)
    })
}

function scheduleUpdateAll() {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
        scheduled = false
        updateAll()
    })
}

function start() {
    if (started) return
    started = true

    if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const labelElement = entry.target as HTMLElement
                const menuItem = labelElement.closest<HTMLElement>(MENU_ITEM_SELECTOR)
                if (menuItem) {
                    updateMenuItem(menuItem)
                }
            })
        })
    }

    updateAll()

    resizeHandler = () => scheduleUpdateAll()
    window.addEventListener("resize", resizeHandler)

    mutationObserver = new MutationObserver(() => scheduleUpdateAll())
    if (document.body) {
        mutationObserver.observe(document.body, { childList: true, subtree: true, characterData: true })
    }
}

export function initMenuItemOverflowTooltips() {
    if (initialized) return
    initialized = true

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start, { once: true })
    } else {
        start()
    }
}

export function updateMenuItemOverflowTooltips() {
    updateAll()
}

export function destroyMenuItemOverflowTooltips() {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()

    if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler)
    }

    resizeObserver = null
    mutationObserver = null
    resizeHandler = null
    observedLabels = new WeakSet<HTMLElement>()
    initialized = false
    started = false
}

window.blueWeb = window.blueWeb || {}
window.blueWeb.menuItemOverflowTooltips = {
    init: initMenuItemOverflowTooltips,
    update: updateMenuItemOverflowTooltips,
    destroy: destroyMenuItemOverflowTooltips
}

initMenuItemOverflowTooltips()
