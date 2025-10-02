import { LitElement, PropertyValues } from 'lit';
import { ThemeData } from '../../utils/context';
export default class YsSvg extends LitElement {
    private config;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleUpdate;
}
type SvgRenderType = 'code' | 'view';
export declare class YsSvgRender extends LitElement {
    static styles: import("lit").CSSResult[];
    themeData?: ThemeData;
    private get isDarkMode();
    content: string;
    status: SvgRenderType;
    isComplete: boolean;
    isFinish: boolean;
    private svgBoxRef;
    private dragStartX;
    private dragStartY;
    x: number;
    y: number;
    private isDragging;
    checkStatus(status: SvgRenderType): void;
    firstUpdated(): void;
    updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private isSvgComplete;
    private filterTrailingFence;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-svg': YsSvg;
        'ys-svg-render': YsSvgRender;
    }
}
export {};
