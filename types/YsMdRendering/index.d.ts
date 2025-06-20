import { LitElement, TemplateResult } from 'lit';
import MarkdownIt from 'markdown-it';
import { AstToken, RenderFunction } from './registerAllCustomRenderers';
import Token from 'markdown-it/lib/token.mjs';
export default class YsMdRendering extends LitElement {
    static styles: import("lit").CSSResult[];
    key: string;
    md: MarkdownIt;
    constructor();
    content: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setMarkdownIt(): void;
    renderMethods: import("./registerAllCustomRenderers").RenderMethods;
    customMethods: Record<string, RenderFunction>;
    private _handleChildRegister;
    /**
     * 一维结构转树状结构
     * @param flatAST 抽象树
     * @param prefix_id id前缀
     * @returns 渲染树
     */
    buildNestedAST2(flatAST: Token[], prefix_key?: String): AstToken[];
    renderAst4(asts: AstToken[]): TemplateResult[];
    getAST(): unknown[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-md-rendering': YsMdRendering;
    }
    interface HTMLElementEventMap {
        'child-register': CustomEvent<{
            feature: string;
        }>;
    }
}
