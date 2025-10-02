import { LitElement } from 'lit';
export default class YsKatex extends LitElement {
    private config;
    static styles: import("lit").CSSResult[];
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleUpdate;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-katex': YsKatex;
    }
}
