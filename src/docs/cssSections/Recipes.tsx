import HashLink from "../components/HashLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

const menuItemWithDropdown = /*html*/ `<button class="blue-menu-item btn w-100 blue-menu-item-dropdown-toggle w-100 has-label">
<span class="blue-menu-item-icon">
    <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"></path>
    </svg>
</span>
<span class="blue-menu-item-label text-truncate d-inline-block">John Boy</span>
<svg
    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="blue-menu-item-dropdown-caret ms-auto d-inline-block" viewBox="0 0 16 16" style="display: inline-block; vertical-align: -0.125em; transform: rotate(-90deg); transition: transform 0.2s;">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0"></path>
</svg>
</button>

<div class="blue-menu-item-dropdown">
	<button class="blue-menu-item btn w-100 has-label">
		<span class="blue-menu-item-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
				<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"></path>
			</svg>
		</span>
		<span class="blue-menu-item-label text-truncate d-inline-block">I am a child item</span>
	</button>
</div>`

export default function Buttons() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="menu-item-with-dropdown">Menu item with dropdown</HashLink>
                <div
                    dangerouslySetInnerHTML={{
                        __html: menuItemWithDropdown
                    }}
                />

                <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                    {menuItemWithDropdown}
                </SyntaxHighlighter>
            </article>
        </>
    )
}
