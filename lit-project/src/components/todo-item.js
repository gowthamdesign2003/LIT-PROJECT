import { LitElement, html, css } from 'lit';


export class TodoItem extends LitElement {
static properties = {
item: { type: Object }
};


static styles = css`
:host { display:block }
.row { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px; border-radius:12px; transition: transform .18s ease, box-shadow .18s ease; }
.row:hover { transform: translateY(-4px); box-shadow: 0 8px 26px rgba(0,0,0,0.35); }
.left { display:flex; gap:12px; align-items:center }
.title { font-size:15px; color:var(--muted); }
.title.done { text-decoration:line-through; opacity:0.6 }
.actions { display:flex; gap:8px }
.icon { background:transparent; border:0; cursor:pointer; padding:6px; border-radius:8px }
`;


render() {
return html`
<div class="row">
<div class="left">
<input type="checkbox" .checked=${this.item.done} @change=${this._toggle} />
<div class="title ${this.item.done ? 'done' : ''}">${this.item.title}</div>
</div>
<div class="actions">
<button class="icon" @click=${this._edit}>✏️</button>
<button class="icon" @click=${this._delete}>🗑️</button>
</div>
</div>
`;
}


_toggle() {
this.dispatchEvent(new CustomEvent('toggle', { detail: this.item, bubbles: true, composed: true }));
}


_edit() {
this.dispatchEvent(new CustomEvent('edit', { detail: this.item, bubbles: true, composed: true }));
}


_delete() {
this.dispatchEvent(new CustomEvent('delete', { detail: this.item, bubbles: true, composed: true }));
}
}


customElements.define('todo-item', TodoItem);