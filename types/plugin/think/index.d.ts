import { LitElement } from 'lit';
export default class YsThink extends LitElement {
    private config;
    static styles: import("lit").CSSResult[];
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleInstance;
    private handleUpdate;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-think': YsThink;
    }
}
