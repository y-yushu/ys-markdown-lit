import { LitElement } from 'lit';
export default class YsKatex extends LitElement {
    private config;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-katex': YsKatex;
    }
}
