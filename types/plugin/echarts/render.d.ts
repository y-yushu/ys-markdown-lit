import { LitElement, PropertyValues } from 'lit';
import { ThemeData } from '../../utils/context';
export default class YsEchartsRender extends LitElement {
    static styles: import("lit").CSSResult[];
    content: string;
    isError: Boolean;
    themeData?: ThemeData;
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
