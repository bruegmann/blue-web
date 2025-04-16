import{g as f}from"./utils.C5wUAM2-.js";const y={Cancel:["Cancel","Abbrechen"],Yes:["Yes","Ja"],No:["No","Nein"],Message:["Message","Nachricht"],"Toggle menu":["Toggle menu","Menü umschalten"],"Close all":["Close all","Alle schließen"],Error:["Error","Fehler"],Information:["Information","Information"]};function u(t,e=void 0,s=void 0){return e=e||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",s=s||y,s[t]?e.indexOf("de-")>-1?s[t][1]:s[t][0]:t}async function E(t,e={}){return await h("ask",t,e)}async function $(t,e={}){await h("tell",t,e)}async function M(t,e={}){return await h("verify",t,e)===!0}async function h(t,e,s={}){let{title:a=u("Message"),icon:d=void 0,switchPrimaryBtn:r=!1,acceptBtnText:l=t==="verify"?u("Yes"):"OK",cancelBtnText:n=u(t==="verify"?"No":"Cancel"),inputType:c="text"}=s;const o=f(),w=()=>{document.body.insertAdjacentHTML("beforeend",`<dialog class="blue-modal modal" id="${o}" aria-labelledby="${o}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${d?`<div class="me-2">${d}</div>`:""}
                                <h1 class="modal-title fs-5" id="${o}-label">${a}</h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="${n}"
                                    onclick="document.getElementById('${o}').close()"
                                ></button>
                            </div>
                            <div class="modal-body">
                                ${t==="ask"?`<label for="${o}-input">${e}</label>
                                          <input type="${c}" id="${o}-input" class="form-control mt-3" />`:e}
                            </div>
                            <div class="modal-footer">
                                ${t==="verify"||t==="ask"?`<button
                                          type="button"
                                          class="btn ${r?"btn-primary":"blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${o}').close()"
                                      >
                                          ${n}
                                      </button>`:""}
                                <button
                                    type="submit"
                                    class="btn ${r?"blue-btn-plain-primary":"btn-primary"}"
                                >
                                    ${l}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <form method="dialog" class="blue-modal-backdrop">
                    <button>${n}</button>
                </form>
            </dialog>`)};return document.getElementById(o)||w(),new Promise(m=>{const i=document.getElementById(o),g=()=>{const b=document.getElementById(o);b&&b.remove()},v=()=>{g(),m(!1)};i?.showModal(),i?.addEventListener("close",v),i?.querySelector(".modal-content > form")?.addEventListener("submit",b=>{b.preventDefault(),t==="ask"&&(i.close(),g(),m((i?.querySelector("input")).value||"")),i.close(),g(),m(!0)})})}window.blueWeb=window.blueWeb||{};window.blueWeb.dialog={ask:E,tell:$,verify:M};window.blueWeb=window.blueWeb||{};window.blueWeb.progress={progress:0};window.blueWeb.progress={...window.blueWeb.progress,start:(t="blueWebProgress",e=document.body,s="Loading data",a="fixed-top")=>{const d=typeof e=="string"||e instanceof String?document.querySelector(e.toString()):e;let r=document.getElementById(t);r||(r=document.createElement("div"),r.id=t,r.className=`progress ${a} rounded-0`,r.setAttribute("style","--bs-progress-height: 0.25rem"),r.setAttribute("role","progressbar"),r.setAttribute("aria-label",s),r.setAttribute("aria-valuemin","0"),r.setAttribute("aria-valuemax","100"),r.innerHTML='<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>',d.appendChild(r));const l=r.querySelector(".progress-bar");if(l){window.blueWeb.progress.progress=0;var n=setInterval(function(){var c=Math.random()*5;window.blueWeb.progress.progress+=c,window.blueWeb.progress.progress=Math.min(window.blueWeb.progress.progress,100),l.style.width=window.blueWeb.progress.progress+"%",r?.setAttribute("aria-valuenow",Math.round(window.blueWeb.progress.progress).toString()),window.blueWeb.progress.progress>=100&&clearInterval(n)},200)}},stop:(t="blueWebProgress")=>{const e=document.getElementById(t);e&&(window.blueWeb.progress.progress=100,setTimeout(()=>{e.remove()},500))}};window.blueWeb.progress;const p=5;class A extends HTMLElement{button;container;startX=0;startY=0;constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["disabled"]}connectedCallback(){this.render()}attributeChangedCallback(e,s,a){e==="disabled"&&this.updateDisabledState()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
        `,this.button=this.shadowRoot.querySelector("button"),this.container=this.shadowRoot.querySelector("div"),this.button.addEventListener("click",this.onEditRequested.bind(this)),this.container.addEventListener("click",this.onReadViewClick.bind(this)),this.container.addEventListener("mousedown",this.onMouseDown.bind(this)),this.updateDisabledState())}updateDisabledState(){const e=this.hasAttribute("disabled");this.button?.setAttribute("aria-disabled",String(e)),this.container?.setAttribute("aria-disabled",String(e))}onEditRequested(){this.hasAttribute("disabled")||this.dispatchEvent(new CustomEvent("EditRequested",{bubbles:!0,composed:!0}))}onMouseDown(e){this.hasAttribute("disabled")||(this.startX=e.clientX,this.startY=e.clientY)}mouseHasMovedAfterMouseDown(e){return Math.abs(this.startX-e.clientX)>=p||Math.abs(this.startY-e.clientY)>=p}onReadViewClick(e){if(this.hasAttribute("disabled"))return;e.target.tagName.toLowerCase()!=="a"&&!this.mouseHasMovedAfterMouseDown(e)&&(e.preventDefault(),this.onEditRequested())}}customElements.define("read-view",A);
