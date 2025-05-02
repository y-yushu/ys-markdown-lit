import { LitElement } from 'lit';
export default class YsThink extends LitElement {
    private config;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-think': YsThink;
    }
}
