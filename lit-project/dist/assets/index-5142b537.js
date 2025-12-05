var pt=Object.defineProperty;var ut=(o,t,e)=>t in o?pt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var S=(o,t,e)=>(ut(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),F=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}};const ft=o=>new nt(typeof o=="string"?o:o+"",void 0,Y),J=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new nt(e,o,Y)},gt=(o,t)=>{if(W)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},Z=W?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:$t,getOwnPropertyDescriptor:bt,getOwnPropertyNames:_t,getOwnPropertySymbols:yt,getPrototypeOf:vt}=Object,m=globalThis,G=m.trustedTypes,xt=G?G.emptyScript:"",z=m.reactiveElementPolyfillSupport,P=(o,t)=>o,B={toAttribute(o,t){switch(t){case Boolean:o=o?xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},at=(o,t)=>!mt(o,t),Q={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:at};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&$t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);r==null||r.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[..._t(e),...yt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var r,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:B;this._$Em=i;const h=a.fromAttribute(e,l.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const r=this.constructor,n=this[t];if(s??(s=r.getPropertyOptions(t)),!((s.hasChanged??at)(n,e)||s.useDefault&&s.reflect&&n===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i){const{wrapped:l}=n,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[P("elementProperties")]=new Map,x[P("finalized")]=new Map,z==null||z({ReactiveElement:x}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,R=k.trustedTypes,X=R?R.createPolicy("lit-html",{createHTML:o=>o}):void 0,lt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+g,At=`<${dt}>`,v=document,O=()=>v.createComment(""),U=o=>o===null||typeof o!="object"&&typeof o!="function",K=Array.isArray,wt=o=>K(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",D=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,$=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,ht=/^(?:script|style|textarea|title)$/i,Et=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),A=Et(1),w=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ot=new WeakMap,b=v.createTreeWalker(v,129);function ct(o,t){if(!K(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const St=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=C;for(let l=0;l<e;l++){const a=o[l];let h,p,d=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===C?p[1]==="!--"?n=tt:p[1]!==void 0?n=et:p[2]!==void 0?(ht.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??C,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?$:p[3]==='"'?it:st):n===it||n===st?n=$:n===tt||n===et?n=C:(n=$,i=void 0);const f=n===$&&o[l+1].startsWith("/>")?" ":"";r+=n===C?a+At:d>=0?(s.push(h),a.slice(0,d)+lt+a.slice(d)+g+f):a+g+(d===-2?l:f)}return[ct(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[h,p]=St(t,e);if(this.el=T.createElement(h,s),b.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=b.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(lt)){const u=p[n++],f=i.getAttribute(d).split(g),N=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:N[2],strings:f,ctor:N[1]==="."?Pt:N[1]==="?"?kt:N[1]==="@"?Ot:L}),i.removeAttribute(d)}else d.startsWith(g)&&(a.push({type:6,index:r}),i.removeAttribute(d));if(ht.test(i.tagName)){const d=i.textContent.split(g),u=d.length-1;if(u>0){i.textContent=R?R.emptyScript:"";for(let f=0;f<u;f++)i.append(d[f],O()),b.nextNode(),a.push({type:2,index:++r});i.append(d[u],O())}}}else if(i.nodeType===8)if(i.data===dt)a.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:r}),d+=g.length-1}r++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function E(o,t,e=o,s){var n,l;if(t===w)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(o,i._$AS(o,t.values),i,s)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);b.currentNode=i;let r=b.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new H(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new Ut(r,this,t)),this._$AV.push(h),a=s[++l]}n!==(a==null?void 0:a.index)&&(r=b.nextNode(),n++)}return b.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(ct(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const n=new Ct(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new T(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new H(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{const l=t;let a,h;for(t=r[0],a=0;a<r.length-1;a++)h=E(this,l[s+a],e,a),h===w&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===c?t=c:t!==c&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class kt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Ot extends L{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??c)===w)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const I=k.litHtmlPolyfillSupport;I==null||I(T,H),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.3.1");const Tt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new H(t.insertBefore(O(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class y extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}var rt;y._$litElement$=!0,y.finalized=!0,(rt=_.litElementHydrateSupport)==null||rt.call(_,{LitElement:y});const j=_.litElementPolyfillSupport;j==null||j({LitElement:y});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.1");const Ht="/assets/lit-c8dae599.svg",Nt="/vite.svg";class V extends y{render(){return A`
<div class="row">
<div class="left">
<input type="checkbox" .checked=${this.item.done} @change=${this._toggle} />
<div class="title ${this.item.done?"done":""}">${this.item.title}</div>
</div>
<div class="actions">
<button class="icon" @click=${this._edit}>✏️</button>
<button class="icon" @click=${this._delete}>🗑️</button>
</div>
</div>
`}_toggle(){this.dispatchEvent(new CustomEvent("toggle",{detail:this.item,bubbles:!0,composed:!0}))}_edit(){this.dispatchEvent(new CustomEvent("edit",{detail:this.item,bubbles:!0,composed:!0}))}_delete(){this.dispatchEvent(new CustomEvent("delete",{detail:this.item,bubbles:!0,composed:!0}))}}S(V,"properties",{item:{type:Object}}),S(V,"styles",J`
:host { display:block }
.row { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px; border-radius:12px; transition: transform .18s ease, box-shadow .18s ease; }
.row:hover { transform: translateY(-4px); box-shadow: 0 8px 26px rgba(0,0,0,0.35); }
.left { display:flex; gap:12px; align-items:center }
.title { font-size:15px; color:var(--muted); }
.title.done { text-decoration:line-through; opacity:0.6 }
.actions { display:flex; gap:8px }
.icon { background:transparent; border:0; cursor:pointer; padding:6px; border-radius:8px }
`);customElements.define("todo-item",V);class q extends y{constructor(){super(),this.todos=JSON.parse(localStorage.getItem("lit-todos")||"[]")}render(){return A`
      <div class="page-bg"></div>
      <div class="app">
        <div class="glass">
          <header>
            <div>
              <h1>DayTrack</h1>
              <div class="sub">Track your day. Achieve more.</div>
            </div>
            <div>
             <button class="ghost" @click=${this._clearCompleted}>Clear completed</button>
            </div>
          </header>

          <form @submit=${this._addTodo}>
            <div class="input">
              <input id="newTodo" type="text" placeholder="Add a new task..." autocomplete="off" />
            </div>
            <button type="submit" class="primary">Add</button>
          </form>

          ${this.todos.length===0?A`<div class="empty">No tasks yet — add one above.</div>`:A`
            <div class="list">
              ${this.todos.map(t=>A`<todo-item .item=${t}></todo-item>`)}
            </div>
          `}

          <div class="footer">
            <div>${this.todos.filter(t=>!t.done).length} remaining</div>
            <div>${this.todos.length} total</div>
          </div>
        </div>
      </div>
    `}firstUpdated(){this.addEventListener("toggle",t=>this._onToggle(t.detail)),this.addEventListener("edit",t=>this._onEdit(t.detail)),this.addEventListener("delete",t=>this._onDelete(t.detail))}_save(){localStorage.setItem("lit-todos",JSON.stringify(this.todos)),this.requestUpdate()}_addTodo(t){t.preventDefault();const e=this.renderRoot.querySelector("#newTodo"),s=((e==null?void 0:e.value)||"").trim();if(!s)return;const r={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:s,done:!1};this.todos=[r,...this.todos],e.value="",this._save()}_onToggle(t){this.todos=this.todos.map(e=>e.id===t.id?{...e,done:!e.done}:e),this._save()}_onEdit(t){const e=prompt("Edit task",t.title);if(e===null)return;const s=e.trim();s&&(this.todos=this.todos.map(i=>i.id===t.id?{...i,title:s}:i),this._save())}_onDelete(t){this.todos=this.todos.filter(e=>e.id!==t.id),this._save()}_clearCompleted(){this.todos=this.todos.filter(t=>!t.done),this._save()}}S(q,"styles",J`
    :host { display:block; font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial; }

    /* full-screen centered container */
    .app {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 28px;
      z-index: 10;
    }

    /* center card (glass) */
    .glass {
      width: 640px;
      max-width: calc(100% - 48px);
      background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 22px 60px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.02);
      backdrop-filter: blur(14px) saturate(120%);
      -webkit-backdrop-filter: blur(14px) saturate(120%);
      border: 1px solid rgba(255,255,255,0.04);
      transition: transform .36s cubic-bezier(.2,.9,.3,1), box-shadow .25s ease, opacity .28s ease;
      transform: translateY(0);
      opacity: 0;
      animation: cardIn .48s forwards cubic-bezier(.2,.9,.3,1);
    }

    /* subtle scale/slide & fade in */
    @keyframes cardIn {
      0%   { transform: translateY(12px) scale(.995); opacity: 0; }
      60%  { transform: translateY(-6px) scale(1.002); opacity: 1; }
      100% { transform: translateY(0) scale(1); opacity: 1; }
    }

    .glass:hover { transform: translateY(-6px); box-shadow: 0 32px 80px rgba(0,0,0,0.75); }

    header { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px }
    h1 { margin:0; color:#f7fafc; font-size:20px; letter-spacing:0.2px }
    .sub { color:rgba(255,255,255,0.6); font-size:13px }

    form { display:flex; gap:12px; align-items:center; margin-bottom:18px }
    .input {
      flex:1; display:flex; align-items:center; gap:12px; padding:12px 14px; border-radius:12px; background: rgba(0,0,0,0.45);
      border: 1px solid rgba(255,255,255,0.03); color: #e6eef8; box-shadow: 0 4px 18px rgba(0,0,0,0.45) inset;
      transition: transform .12s ease, box-shadow .12s ease;
    }
    .input:focus-within { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.55) inset; }

    input[type="text"] { background:transparent; border:0; outline:none; color:#e6eef8; font-size:14px; width:100% }

    button.primary { background: linear-gradient(180deg,#0f1724,#0b1220); color:white; border:0; padding:10px 14px; border-radius:10px; cursor:pointer; box-shadow: 0 8px 20px rgba(3,7,18,0.6); }
    button.ghost { background:transparent; border:1px solid rgba(255,255,255,0.06); color:rgba(255,255,255,0.8); padding:8px 12px; border-radius:10px; cursor:pointer }

    .list { display:flex; flex-direction:column; gap:10px; max-height:360px; overflow:auto; padding-right:6px }

    .empty { color:rgba(255,255,255,0.65); text-align:center; padding:28px 0 }

    .footer { display:flex; align-items:center; justify-content:space-between; margin-top:18px; color:rgba(255,255,255,0.6); font-size:13px }

    :host { --bg1: #0f1112; --bg2: #1a1b1d }
    .page-bg { position:fixed; inset:0; background: radial-gradient(800px 400px at 10% 20%, rgba(99,102,241,0.06), transparent 10%), radial-gradient(600px 300px at 90% 80%, rgba(236,72,153,0.04), transparent 12%), linear-gradient(180deg,var(--bg1), var(--bg2)); z-index:0; }

    .list::-webkit-scrollbar { width:8px }
    .list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius:6px }

    @media (max-width:720px) {
      .glass { width: 94%; padding:22px; border-radius:16px }
    }
  `),S(q,"properties",{todos:{type:Array}});customElements.define("todo-app",q);class Mt extends y{static get properties(){return{docsHint:{type:String},count:{type:Number}}}constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return A`
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src=${Nt} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Ht} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}static get styles(){return J`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}}window.customElements.define("my-element",Mt);
