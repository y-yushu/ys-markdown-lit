import { LitElement, TemplateResult } from 'lit';
export default class YsCodeHighlight extends LitElement {
    private onMyCustomEvent;
    firstUpdated(): void;
}
export declare class YsCodeHighlightRender extends LitElement {
    static styles: import("lit").CSSResult[];
    language: string;
    info: string;
    content: string;
    private clickCopy;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-code-highlight': YsCodeHighlight;
        'ys-code-highlight-render': YsCodeHighlightRender;
    }
}
