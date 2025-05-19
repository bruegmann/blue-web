import{g as W}from"./utils.C5wUAM2-.js";const k={Cancel:["Cancel","Abbrechen"],Yes:["Yes","Ja"],No:["No","Nein"],Message:["Message","Nachricht"],"Toggle menu":["Toggle menu","Menü umschalten"],"Close all":["Close all","Alle schließen"],Error:["Error","Fehler"],Information:["Information","Information"]};function u(e,t=void 0,o=void 0){return t=t||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",o=o||k,o[e]?t.indexOf("de-")>-1?o[e][1]:o[e][0]:e}async function A(e,t={}){return await w("ask",e,t)}async function S(e,t={}){await w("tell",e,t)}async function L(e,t={}){return await w("verify",e,t)===!0}async function w(e,t,o={}){let{title:a=u("Message"),icon:d=void 0,switchPrimaryBtn:r=!1,acceptBtnText:i=e==="verify"?u("Yes"):"OK",cancelBtnText:s=u(e==="verify"?"No":"Cancel"),inputType:l="text"}=o;const n=W(),y=()=>{document.body.insertAdjacentHTML("beforeend",`<dialog class="blue-modal modal" id="${n}" aria-labelledby="${n}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${d?`<div class="me-2">${d}</div>`:""}
                                <h1 class="modal-title fs-5" id="${n}-label">${a}</h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="${s}"
                                    onclick="document.getElementById('${n}').close()"
                                ></button>
                            </div>
                            <div class="modal-body">
                                ${e==="ask"?`<label for="${n}-input">${t}</label>
                                          <input type="${l}" id="${n}-input" class="form-control mt-3" />`:t}
                            </div>
                            <div class="modal-footer">
                                ${e==="verify"||e==="ask"?`<button
                                          type="button"
                                          class="btn ${r?"btn-primary":"blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${n}').close()"
                                      >
                                          ${s}
                                      </button>`:""}
                                <button
                                    type="submit"
                                    class="btn ${r?"blue-btn-plain-primary":"btn-primary"}"
                                >
                                    ${i}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <form method="dialog" class="blue-modal-backdrop">
                    <button>${s}</button>
                </form>
            </dialog>`)};return document.getElementById(n)||y(),new Promise(h=>{const c=document.getElementById(n),g=()=>{const b=document.getElementById(n);b&&b.remove()},E=()=>{g(),h(!1)};c?.showModal(),c?.addEventListener("close",E),c?.querySelector(".modal-content > form")?.addEventListener("submit",b=>{b.preventDefault(),e==="ask"&&(c.close(),g(),h((c?.querySelector("input")).value||"")),c.close(),g(),h(!0)})})}window.blueWeb=window.blueWeb||{};window.blueWeb.dialog={ask:A,tell:S,verify:L};window.blueWeb=window.blueWeb||{};window.blueWeb.progress={progress:0};window.blueWeb.progress={...window.blueWeb.progress,start:(e="blueWebProgress",t=document.body,o="Loading data",a="fixed-top")=>{const d=typeof t=="string"||t instanceof String?document.querySelector(t.toString()):t;let r=document.getElementById(e);r||(r=document.createElement("div"),r.id=e,r.className=`progress ${a} rounded-0`,r.setAttribute("style","--bs-progress-height: 0.25rem"),r.setAttribute("role","progressbar"),r.setAttribute("aria-label",o),r.setAttribute("aria-valuemin","0"),r.setAttribute("aria-valuemax","100"),r.innerHTML='<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>',d.appendChild(r));const i=r.querySelector(".progress-bar");if(i){window.blueWeb.progress.progress=0;var s=setInterval(function(){var l=Math.random()*5;window.blueWeb.progress.progress+=l,window.blueWeb.progress.progress=Math.min(window.blueWeb.progress.progress,100),i.style.width=window.blueWeb.progress.progress+"%",r?.setAttribute("aria-valuenow",Math.round(window.blueWeb.progress.progress).toString()),window.blueWeb.progress.progress>=100&&clearInterval(s)},200)}},stop:(e="blueWebProgress")=>{const t=document.getElementById(e);t&&(window.blueWeb.progress.progress=100,setTimeout(()=>{t.remove()},500))}};window.blueWeb.progress;const p=5;class $ extends HTMLElement{button;container;startX=0;startY=0;constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["disabled"]}connectedCallback(){this.render()}attributeChangedCallback(t,o,a){t==="disabled"&&this.updateDisabledState()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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

                :host([disabled]) div {
                    background-color: transparent;
                }
            </style>
            <button aria-label="Edit"></button>
            <div role="presentation">
                <slot></slot>
            </div>
        `,this.button=this.shadowRoot.querySelector("button"),this.container=this.shadowRoot.querySelector("div"),this.button.addEventListener("click",this.onEditRequested.bind(this)),this.container.addEventListener("click",this.onReadViewClick.bind(this)),this.container.addEventListener("mousedown",this.onMouseDown.bind(this)),this.updateDisabledState())}updateDisabledState(){const t=this.hasAttribute("disabled");this.button?.setAttribute("aria-disabled",String(t)),this.container?.setAttribute("aria-disabled",String(t))}onEditRequested(){this.hasAttribute("disabled")||this.dispatchEvent(new CustomEvent("EditRequested",{bubbles:!0,composed:!0}))}onMouseDown(t){this.hasAttribute("disabled")||(this.startX=t.clientX,this.startY=t.clientY)}mouseHasMovedAfterMouseDown(t){return Math.abs(this.startX-t.clientX)>=p||Math.abs(this.startY-t.clientY)>=p}onReadViewClick(t){if(this.hasAttribute("disabled"))return;t.target.tagName.toLowerCase()!=="a"&&!this.mouseHasMovedAfterMouseDown(t)&&(t.preventDefault(),this.onEditRequested())}}customElements.define("read-view",$);const f=()=>localStorage.getItem("blue-web-color-mode"),v=()=>{const e=f();return e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},M=e=>{e==="auto"?localStorage.removeItem("blue-web-color-mode"):localStorage.setItem("blue-web-color-mode",e),m()},m=()=>{const e=v();e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",e)},B=()=>{localStorage.removeItem("blue-web-color-mode"),m()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",B);m();window.blueWeb=window.blueWeb||{};window.blueWeb.colorMode={getStored:f,getPreferred:v,set:M,init:m};function D(e,t=void 0,o=void 0){t||(t=e.querySelector(".BLUE-actions-menu")),o||(o=e.querySelector(".BLUE-actions-collapse-menu"));function a(){for(const s of t.children)s.style.display="none";for(const s of o.children)s.style.display="",s.classList.add("BLUE-actions-collapse-visible");let i=0;for(const s of t.children){if(s.style.display="",o.children[i].style.display="none",o.children[i].classList.remove("BLUE-actions-collapse-visible"),e.scrollWidth>e.clientWidth){s.style.display="none",o.children[i].style.display="",o.children[i].classList.add("BLUE-actions-collapse-visible");break}i++}}a();const d=new ResizeObserver(()=>{requestAnimationFrame(a)});d.observe(e);const r=i=>{if(!e)return;const s=e.querySelectorAll("details[open]");!s||s.length<=0||s.forEach(l=>{l.contains(i.target)||l.removeAttribute("open")})};return document.addEventListener("click",r),{updateActions:a,resizeObserver:d,destroy(){d.disconnect(),document.removeEventListener("click",r)}}}window.blueWeb=window.blueWeb||{};window.blueWeb.actions={init:D};
