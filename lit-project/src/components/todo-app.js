import { LitElement, html, css } from 'lit';

export class TodoApp extends LitElement {
  static styles = css`
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
  `;

  static properties = {
    todos: { type: Array }
  };

  constructor() {
    super();
    this.todos = JSON.parse(localStorage.getItem('lit-todos') || '[]');
  }

  render() {
    return html`
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

          ${this.todos.length === 0 ? html`<div class="empty">No tasks yet — add one above.</div>` : html`
            <div class="list">
              ${this.todos.map(t => html`<todo-item .item=${t}></todo-item>`)}
            </div>
          `}

          <div class="footer">
            <div>${this.todos.filter(t=>!t.done).length} remaining</div>
            <div>${this.todos.length} total</div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    // listen for events dispatched from todo-item children
    this.addEventListener('toggle', (e) => this._onToggle(e.detail));
    this.addEventListener('edit', (e) => this._onEdit(e.detail));
    this.addEventListener('delete', (e) => this._onDelete(e.detail));
  }

  _save() {
    localStorage.setItem('lit-todos', JSON.stringify(this.todos));
    this.requestUpdate();
  }

  _addTodo(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector('#newTodo');
    const value = (input?.value || '').trim();
    if (!value) return;
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2,6);
    const newItem = { id, title: value, done: false };
    this.todos = [newItem, ...this.todos];
    input.value = '';
    this._save();
  }

  _onToggle(item) {
    this.todos = this.todos.map(t => t.id === item.id ? {...t, done: !t.done} : t);
    this._save();
  }

  _onEdit(item) {
    const newTitle = prompt('Edit task', item.title);
    if (newTitle === null) return;
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    this.todos = this.todos.map(t => t.id === item.id ? {...t, title: trimmed} : t);
    this._save();
  }

  _onDelete(item) {
    this.todos = this.todos.filter(t => t.id !== item.id);
    this._save();
  }

  _clearCompleted() {
  this.todos = this.todos.filter(t => !t.done);
  this._save();
}
}

customElements.define('todo-app', TodoApp);
