import { LitElement, TemplateResult } from 'lit';
export default class YsSvg extends LitElement {
    connectedCallback(): void;
}
type SvgRenderType = 'code' | 'view';
export declare class YsSvgRender extends LitElement {
    createRenderRoot(): this;
    static styles: import("lit").CSSResult[];
    content: string;
    status: SvgRenderType;
    isComplete: boolean;
    isFinish: boolean;
    private svgBoxRef;
    private svgHeaderRef;
    x: number;
    y: number;
    checkStatus(): void;
    firstUpdated(): void;
    render(): TemplateResult<1>;
    /**
     * 检查 SVG 是否完整
     * @param content SVG 字符串内容
     * @returns 是否完整
     */
    private isSvgComplete;
    /**
     * 过滤掉内容末尾的半个围栏
     * @param content SVG 字符串内容
     * @returns 过滤后的内容
     */
    private filterTrailingFence;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-svg': YsSvg;
        'ys-svg-render': YsSvgRender;
    }
}
export {};
