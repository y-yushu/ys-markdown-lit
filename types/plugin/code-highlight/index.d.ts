import { LitElement, TemplateResult } from 'lit';
export default class YsCodeHighlight extends LitElement {
    private _onMyCustomEvent;
    connectedCallback(): void;
}
export declare class YsCodeHighlightRender extends LitElement {
    createRenderRoot(): this;
    language: string;
    info: string;
    content: string;
    private _handleClick;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-code-highlight': YsCodeHighlight;
        'ys-code-highlight-render': YsCodeHighlightRender;
    }
}
