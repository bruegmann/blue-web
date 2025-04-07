"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadView = void 0;
const DRAG_THRESHOLD = 5;

/**
 * A Web Component that displays a read view of its content and allows the user to switch to an edit view.
 * Fires event "EditRequested" when the user clicks the read view.
 * @element read-view
 * @fires EditRequested
 * @cssprop --bs-primary-rgb - The primary color as an RGB value.
 * @cssprop --bs-secondary-bg-subtle - The subtle background color for the read view.
 * @cssprop --bs-border-radius-sm - The border radius for the read view.
 * @slot - The content to display in the read view.
 * @example
 * <read-view id="my-read-view" onEditRequested="setEditing(true)">
 *    <a href="#">bla</a> {value}
 * </read-view>
 * @example
 * document.getElementById("my-read-view").addEventListener("EditRequested", () => {
 *    setEditing(true)
 * })
 */
class ReadView extends HTMLElement {
  startX = 0;
  startY = 0;
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = /* HTML */`
            <style>
                button {
                    display: block;
                    margin: 0;
                    padding: 0;
                    appearance: none;
                    background-color: transparent;
                    border: none;
                    line-height: 1;
                    outline: 0;
                }

                button:focus-visible + div {
                    outline: 0;
                    box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 25%);
                    border-color: rgba(var(--bs-primary-rgb), 50%);
                }

                div {
                    display: inline-block;
                    box-sizing: border-box;
                    width: auto;
                    max-width: 100%;
                    border-color: transparent;
                    border-radius: var(--bs-border-radius-sm, 3px);
                    border: 1px solid transparent;
                    transition: background 0.2s;
                }

                div:hover {
                    background-color: var(--bs-secondary-bg-subtle);
                }
            </style>
            <button aria-label="Edit"></button>
            <div role="presentation">
                <slot></slot>
            </div>
        `;
    this.button = this.shadowRoot.querySelector("button");
    this.container = this.shadowRoot.querySelector("div");
    this.button.addEventListener("click", this.onEditRequested.bind(this));
    this.container.addEventListener("click", this.onReadViewClick.bind(this));
    this.container.addEventListener("mousedown", this.onMouseDown.bind(this));
  }
  onEditRequested() {
    this.dispatchEvent(new CustomEvent("EditRequested", {
      bubbles: true,
      composed: true
    }));
  }
  onMouseDown(event) {
    this.startX = event.clientX;
    this.startY = event.clientY;
  }
  mouseHasMovedAfterMouseDown(event) {
    return Math.abs(this.startX - event.clientX) >= DRAG_THRESHOLD || Math.abs(this.startY - event.clientY) >= DRAG_THRESHOLD;
  }
  onReadViewClick(event) {
    const target = event.target;
    if (target.tagName.toLowerCase() !== "a" && !this.mouseHasMovedAfterMouseDown(event)) {
      event.preventDefault();
      this.onEditRequested();
    }
  }
}
exports.ReadView = ReadView;
customElements.define("read-view", ReadView);