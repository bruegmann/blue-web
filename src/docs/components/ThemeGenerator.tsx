import { FC, useCallback, useEffect, useRef, useState } from "react"
// import * as sass from "sass"
// import postcss from "postcss"
// dd @ts-expect-error
// import postcssOnlyVars from "postcss-only-vars"

// import "https://elements.colorjs.io/src/channel-slider/channel-slider.js"

// @ts-expect-error
const sass = await import("https://jspm.dev/sass")
// @ts-expect-error
const postcss = await import("https://jspm.dev/postcss")
// @ts-expect-error
const postcssOnlyVars = await import("https://jspm.dev/postcss-only-vars")

const ChannelSlider = "channel-slider" as unknown as FC<{
    ref?: any
    space?: string
    channel?: string
    color?: string
}>

export interface ThemeGeneratorProps {
    onGenerate?: (css: string) => void
}

export default function ThemeGenerator({ onGenerate }: ThemeGeneratorProps) {
    const [theme, setTheme] = useState({ h: 220, s: 16 })
    const [primary, setPrimary] = useState({ h: 240, s: 94 })
    const [gray, setGray] = useState({ h: 200, s: 10 })
    const [soft, setSoft] = useState(false)

    const hueSliderElement = useRef<HTMLElement>(null)
    const saturationSliderElement = useRef<HTMLElement>(null)

    const generate = useCallback(
        async (soft: boolean, moreTones: boolean = false) => {
            setSoft(soft)
            fetch(process.env.PUBLIC_URL + "/merged.scss").then(async (r) => {
                let scss = await r.text()

                if (!moreTones) {
                    primary.h = theme.h
                    primary.s = theme.s
                    gray.h = theme.h
                    gray.s = theme.s
                }

                let newVariables: Record<string, string> = {
                    ["$theme"]: `hsl(${theme.h}deg ${theme.s}% 50%)`,
                    ["$primary"]: `hsl(${primary.h}deg ${primary.s}% 50%)`,
                    ["$white"]: `#fff`,
                    ["$gray-100"]: `hsl(${gray.h}deg 17% 98%)`,
                    ["$gray-200"]: `hsl(${gray.h}deg 16% 93%)`,
                    ["$gray-300"]: `hsl(${gray.h}deg 14% 89%)`,
                    ["$gray-400"]: `hsl(${gray.h}deg 14% 83%)`,
                    ["$gray-500"]: `hsl(${gray.h}deg 11% 71%)`,
                    ["$gray-600"]: `hsl(${gray.h}deg 7% 46%)`,
                    ["$gray-700"]: `hsl(${gray.h}deg 9% 31%)`,
                    ["$gray-800"]: `hsl(${gray.h}deg 10% 23%)`,
                    ["$gray-900"]: `hsl(${gray.h}deg 11% 15%)`,
                    ["$black"]: `#000`
                }

                if (soft) {
                    newVariables = {
                        ...newVariables,
                        ["$theme"]: `hsl(${theme.h}deg ${theme.s}% 94%)`,
                        ["$header-color"]: "$gray-900",
                        ["$sidebar-color"]: "$gray-900"
                    }
                } else {
                    delete newVariables["$theme"]
                    delete newVariables["$header-color"]
                    delete newVariables["$sidebar-color"]
                }

                let newVariablesScss = ""
                Object.keys(newVariables).forEach((i: string) => {
                    if (newVariables[i] !== "") newVariablesScss += i + ": " + newVariables[i] + ";\n"
                })

                scss = newVariablesScss + scss

                const sassResult = sass.compileString(scss)

                const result = await postcss.default([postcssOnlyVars.default]).process(sassResult.css, {
                    from: undefined
                })

                const docsInlineStyle = document.querySelector<HTMLStyleElement>("#docs-inline-style")
                if (docsInlineStyle) {
                    docsInlineStyle.innerHTML = result.css
                }

                if (onGenerate) {
                    onGenerate(result.css)
                }
            })
        },
        [gray, primary, theme]
    )

    const onInput = useCallback(
        (e: any) => {
            setTheme({ ...theme, [e.target.channel]: e.target.value })
        },
        [theme]
    )

    const onChange = useCallback(() => {
        generate(soft)
    }, [generate, soft])

    useEffect(() => {
        const abortController = new AbortController()
        if (hueSliderElement.current) {
            hueSliderElement.current.addEventListener("input", onInput, { signal: abortController.signal })
            hueSliderElement.current.addEventListener("change", onChange, { signal: abortController.signal })
        }

        if (saturationSliderElement.current) {
            saturationSliderElement.current.addEventListener("input", onInput, { signal: abortController.signal })
            saturationSliderElement.current.addEventListener("change", onChange, { signal: abortController.signal })
        }

        return () => {
            abortController.abort()
        }
    }, [hueSliderElement, saturationSliderElement, onInput, onChange])

    return (
        <>
            <label className="form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={soft}
                    onChange={(e) => {
                        generate(!soft)
                    }}
                />
                <span className="form-check-label">Soft appearance</span>
            </label>

            <ChannelSlider ref={hueSliderElement} space="hsl" channel="h"></ChannelSlider>
            <ChannelSlider
                ref={saturationSliderElement}
                space="hsl"
                channel="s"
                color={`hsl(${theme.h}deg ${theme.s}% 50%)`}
            ></ChannelSlider>
        </>
    )
}
