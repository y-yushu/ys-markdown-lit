import { LitElement } from 'lit';
import { ThemeData } from '../../utils/context';
export default class YsEcharts extends LitElement {
    private config;
    static styles: import("lit").CSSResult[];
    themeData?: ThemeData;
    private charts;
    private observers;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleInstance;
    private handleUpdate;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-echarts': YsEcharts;
    }
}
