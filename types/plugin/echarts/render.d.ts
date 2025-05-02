import { LitElement, PropertyValues } from 'lit';
export default class YsEchartsRender extends LitElement {
    static styles: import("lit").CSSResult[];
    content: string;
    resizeObserver: ResizeObserver | null;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-echarts-render': YsEchartsRender;
    }
}
