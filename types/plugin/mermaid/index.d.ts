import { LitElement, PropertyValues, TemplateResult } from 'lit';
type MermaidRenderType = 'code' | 'view';
type ErrorHandlingType = 'errorHandling' | 'notHandled';
export default class YsMermaid extends LitElement {
    initialStatus: MermaidRenderType;
    errorHandlingType: ErrorHandlingType;
    connectedCallback(): void;
}
export declare class YsMermaidRender extends LitElement {
    createRenderRoot(): this;
    content: string;
    errorHandlingType: ErrorHandlingType;
    status: MermaidRenderType;
    protected updated(changedProperties: PropertyValues): void;
    private mermaidBoxRef;
    _checkStatus(status: MermaidRenderType): void;
    /**
     * 渲染方法
     * @param isHand 是否手动渲染
     */
    private _renderMermaid;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-mermaid': YsMermaid;
        'ys-mermaid-render': YsMermaidRender;
    }
}
export {};
