import{r as o,R as a}from"./index.F28aNuxU.js";function k(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=k(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function d(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=k(e))&&(r&&(r+=" "),r+=t);return r}function R(e,t){o.useEffect(function(){function n(r){e.current&&!e.current.contains(r.target)&&t&&t(r)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}},[e])}function L(e){var t=e.children,n=e.className,r=e.onClickOutside,i=e.onClick,l=e.style,u=e.wrapperRef,c=o.useRef(null);return R(u||c,r),a.createElement("div",{ref:u||c,className:n,style:l,onClick:i},t)}function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M(e,t,n){return(t=I(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=F(e,"string");return v(t)=="symbol"?t:t+""}function F(e,t){if(v(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(v(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T(e){var t=e.open,n=e.mirrored,r=e.className,i=e.style,l=window.matchMedia("(prefers-reduced-motion)").matches;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:r,style:D(D({},i),{},{display:"inline-block",verticalAlign:"-0.125em",transform:"rotate(".concat(t&&n?-90:t?90:0,"deg)"),transition:l?"none":"transform 0.2s"}),viewBox:"0 0 16 16"},n?a.createElement("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0"}):a.createElement("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708"}))}function N(e,t){return K(e)||H(e,t)||B(e,t)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,t){if(e){if(typeof e=="string")return A(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,l,u,c=[],f=!0,b=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(f=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);f=!0);}catch(s){b=!0,i=s}finally{try{if(!f&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(b)throw i}}return c}}function K(e){if(Array.isArray(e))return e}function W(e,t){for(;e&&!e.classList.contains(t);)e=e.parentElement;return e}function $(e){var t="blue-menu-item-wrapper-".concat(Math.random().toString(36).substring(7)),n=o.useState(!1),r=N(n,2),i=r[0],l=r[1],u=o.useState(!1),c=N(u,2),f=c[0],b=c[1],s=o.useRef(null),S=function(){b(!!(e.href&&window.location.hash.indexOf(e.href)>-1||e.isHome&&(window.location.hash===""||window.location.hash==="#/")))},j=function(m){e.href==="#"&&m.preventDefault(),e.onClick&&e.onClick(m),e.children&&l(!i),e.onClickAttached!==void 0&&e.onClickAttached(m)},P=function(m){var g=m.target,w=e.outsideIgnoreClasses||[t];if(w&&g){for(var E=0;E<w.length;E++)if(g!=null&&g.classList.contains(w[E])||W(g,w[E]))return}l(!1)};o.useEffect(function(){S(),window.addEventListener("hashchange",function(){S()})},[]),o.useEffect(function(){e.showDropdown!==void 0&&l(e.showDropdown)},[e.showDropdown]),o.useEffect(function(){e.onShowDropdown&&e.onShowDropdown(i)},[e.onShowDropdown,i]),o.useEffect(function(){if(s&&s.current){var h=s.current,m=h.getBoundingClientRect();h.style.setProperty("--offset-top",Math.round(m.top)+"px")}},[s,i]);var x="blue-menu-item btn"+(e.isActive?" active":"")+(e.className?" "+e.className:"")+(e.children?" blue-menu-item-dropdown-toggle w-100":"")+(e.highlighted?" highlighted":""),O,y;return typeof e.icon=="string"?O=a.createElement("span",{className:e.icon+(e.children?" blue-menu-item-dropdown-icon":"")}):O=e.icon,typeof e.iconForActive=="string"?y=a.createElement("span",{className:e.iconForActive+(e.children?" blue-menu-item-dropdown-icon":"")}):y=e.iconForActive,a.createElement("div",{className:"blue-menu-item-wrapper ".concat(t)},o.createElement(e.elementType||(e.href?"a":"button"),{to:e.to,href:e.href,exact:e.exact,className:x+(e.isActive||f?" active":"")+(e.label?" has-label":""),onClick:j,target:e.target,rel:e.rel,title:e.title,onDragStart:e.onDragStart,onDrag:e.onDrag,onDragEnd:e.onDragEnd,onDragEnter:e.onDragEnter,onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDrop:e.onDrop,draggable:e.draggable,"data-tooltip":e["data-tooltip"],disabled:e.disabled,style:e.style,type:e.type,id:e.id},a.createElement(a.Fragment,null,e.draggable&&e.hideDraggableIcon!==!0&&a.createElement(a.Fragment,null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:".5em",height:"1em",fill:"currentColor",className:"bi bi-grip-vertical opacity-50",viewBox:"0 0 8 16"},a.createElement("path",{d:"M3.376 1.876c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1"}))," "),e.icon!==void 0&&a.createElement("span",{className:d("blue-menu-item-icon",e.iconClassName,{hasIconForActive:y})},O),y&&a.createElement("span",{className:d("blue-menu-item-icon iconForActive",e.iconClassName)},y),e.label&&a.createElement("span",{className:d("blue-menu-item-label text-truncate",e.labelClassName)},e.label),e.children&&a.createElement(T,{open:i,mirrored:!0,className:d("blue-menu-item-dropdown-caret ms-auto",e.caretClassName),style:e.caretStyle}))),i&&(e.supportOutside?a.createElement(L,{wrapperRef:s,className:d("blue-menu-item-dropdown",e.dropdownClassName),onClickOutside:P,style:e.dropdownStyle},e.children):a.createElement("div",{ref:s,className:d("blue-menu-item-dropdown",e.dropdownClassName),style:e.dropdownStyle},e.children)))}export{$ as M,L as O};
