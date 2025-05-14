import { LitElement, PropertyValues, TemplateResult } from 'lit';
export default class YsMermaid extends LitElement {
    connectedCallback(): void;
}
type MermaidRenderType = 'code' | 'view';
export declare class YsMermaidRender extends LitElement {
    createRenderRoot(): this;
    content: string;
    status: MermaidRenderType;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private mermaidBoxRef;
    _checkStatus(status: MermaidRenderType): void;
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
