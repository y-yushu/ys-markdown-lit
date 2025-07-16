import { LitElement, PropertyValues, TemplateResult } from 'lit';
import MarkdownIt from 'markdown-it';
import { AstToken, RenderFunction } from './registerAllCustomRenderers';
import Token from 'markdown-it/lib/token.mjs';
import { ThemeData } from '../utils/context';
export default class YsMdRendering extends LitElement {
    content: string;
    dark: boolean;
    customStyles: Record<string, any>;
    breaks: boolean;
    static styles: import("lit").CSSResult[];
    constructor();
    key: string;
    md: MarkdownIt;
    themeData: ThemeData;
    private _computedStyles;
    willUpdate(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setMarkdownIt(): void;
    renderMethods: import("./registerAllCustomRenderers").RenderMethods;
    customMethods: Record<string, RenderFunction>;
    private _handleChildRegister;
    /**
     * 覆盖tailwindcss变量
     * 识别符合`--tw-prose`开头的那些css变量
     */
    private setProseVariables;
    /**
     * 一维结构转树状结构
     * @param flatAST 抽象树
     * @param prefix_id id前缀
     * @returns 渲染树
     */
    _buildNestedAST2(flatAST: Token[], prefix_key?: String): AstToken[];
    _renderAst4(asts: AstToken[]): TemplateResult[];
    _getAST(): unknown[];
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
