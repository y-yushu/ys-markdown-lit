import { LitElement } from 'lit';
export default class YsSvg extends LitElement {
    private config;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-svg': YsSvg;
    }
}
