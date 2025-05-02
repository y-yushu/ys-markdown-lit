import { LitElement } from 'lit';
import './render';
export default class YsEcharts extends LitElement {
    private config;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-echarts': YsEcharts;
    }
}
