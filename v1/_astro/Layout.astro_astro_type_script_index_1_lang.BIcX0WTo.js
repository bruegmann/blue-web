import{g as f}from"./utils.C5wUAM2-.js";const y={Cancel:["Cancel","Abbrechen"],Yes:["Yes","Ja"],No:["No","Nein"],Message:["Message","Nachricht"],"Toggle menu":["Toggle menu","Menü umschalten"],"Close all":["Close all","Alle schließen"],Error:["Error","Fehler"],Information:["Information","Information"]};function b(t,e=void 0,r=void 0){return e=e||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",r=r||y,r[t]?e.indexOf("de-")>-1?r[t][1]:r[t][0]:t}async function E(t,e={}){return await p("ask",t,e)}async function $(t,e={}){await p("tell",t,e)}async function M(t,e={}){return await p("verify",t,e)===!0}async function p(t,e,r={}){let{title:u=b("Message"),icon:a=void 0,switchPrimaryBtn:o=!1,acceptBtnText:l=t==="verify"?b("Yes"):"OK",cancelBtnText:i=b(t==="verify"?"No":"Cancel"),inputType:c="text"}=r;const s=f(),h=()=>{document.body.insertAdjacentHTML("beforeend",`<dialog class="blue-modal modal" id="${s}" aria-labelledby="${s}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${a?`<div class="me-2">${a}</div>`:""}
                                <h1 class="modal-title fs-5" id="${s}-label">${u}</h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="${i}"
                                    onclick="document.getElementById('${s}').close()"
                                ></button>
                            </div>
                            <div class="modal-body">
                                ${t==="ask"?`<label for="${s}-input">${e}</label>
                                          <input type="${c}" id="${s}-input" class="form-control mt-3" />`:e}
                            </div>
                            <div class="modal-footer">
                                ${t==="verify"||t==="ask"?`<button
                                          type="button"
                                          class="btn ${o?"btn-primary":"blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${s}').close()"
                                      >
                                          ${i}
                                      </button>`:""}
                                <button
                                    type="submit"
                                    class="btn ${o?"blue-btn-plain-primary":"btn-primary"}"
                                >
                                    ${l}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <form method="dialog" class="blue-modal-backdrop">
                    <button>${i}</button>
                </form>
            </dialog>`)};return document.getElementById(s)||h(),new Promise(m=>{const n=document.getElementById(s),g=()=>{const d=document.getElementById(s);d&&d.remove()},v=()=>{g(),m(!1)};n?.showModal(),n?.addEventListener("close",v),n?.querySelector(".modal-content > form")?.addEventListener("submit",d=>{d.preventDefault(),t==="ask"&&(n.close(),g(),m((n?.querySelector("input")).value||"")),n.close(),g(),m(!0)})})}window.blueWeb=window.blueWeb||{};window.blueWeb.dialog={ask:E,tell:$,verify:M};window.blueWeb=window.blueWeb||{};window.blueWeb.progress={progress:0};window.blueWeb.progress={...window.blueWeb.progress,start:(t="blueWebProgress",e=document.body,r="Loading data",u="fixed-top")=>{const a=typeof e=="string"||e instanceof String?document.querySelector(e.toString()):e;let o=document.getElementById(t);o||(o=document.createElement("div"),o.id=t,o.className=`progress ${u} rounded-0`,o.setAttribute("style","--bs-progress-height: 0.25rem"),o.setAttribute("role","progressbar"),o.setAttribute("aria-label",r),o.setAttribute("aria-valuemin","0"),o.setAttribute("aria-valuemax","100"),o.innerHTML='<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>',a.appendChild(o));const l=o.querySelector(".progress-bar");if(l){window.blueWeb.progress.progress=0;var i=setInterval(function(){var c=Math.random()*5;window.blueWeb.progress.progress+=c,window.blueWeb.progress.progress=Math.min(window.blueWeb.progress.progress,100),l.style.width=window.blueWeb.progress.progress+"%",o?.setAttribute("aria-valuenow",Math.round(window.blueWeb.progress.progress).toString()),window.blueWeb.progress.progress>=100&&clearInterval(i)},200)}},stop:(t="blueWebProgress")=>{const e=document.getElementById(t);e&&(window.blueWeb.progress.progress=100,setTimeout(()=>{e.remove()},500))}};window.blueWeb.progress;const w=5;class W extends HTMLElement{button;container;startX=0;startY=0;constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
        `,this.button=this.shadowRoot.querySelector("button"),this.container=this.shadowRoot.querySelector("div"),this.button.addEventListener("click",this.onEditRequested.bind(this)),this.container.addEventListener("click",this.onReadViewClick.bind(this)),this.container.addEventListener("mousedown",this.onMouseDown.bind(this)))}onEditRequested(){this.dispatchEvent(new CustomEvent("EditRequested",{bubbles:!0,composed:!0}))}onMouseDown(e){this.startX=e.clientX,this.startY=e.clientY}mouseHasMovedAfterMouseDown(e){return Math.abs(this.startX-e.clientX)>=w||Math.abs(this.startY-e.clientY)>=w}onReadViewClick(e){e.target.tagName.toLowerCase()!=="a"&&!this.mouseHasMovedAfterMouseDown(e)&&(e.preventDefault(),this.onEditRequested())}}customElements.define("read-view",W);
