import { LitElement, PropertyValues, TemplateResult } from 'lit';
import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token.mjs';
import { RenderFunction } from './registerAllCustomRenderers';
import { ThemeData } from '../utils/context';
import { RuleOptions } from '../utils/getRule';
import { AstToken, YsRenderUpdateDetail } from '../types';
export default class YsMdRendering extends LitElement {
    content: string;
    mode: string;
    dark: boolean;
    customStyles: Record<string, any>;
    breaks: boolean;
    static styles: import("lit").CSSResult[];
    key: string;
    md: MarkdownIt;
    constructor();
    themeData: ThemeData;
    private _computedStyles;
    private templates;
    private autoKey;
    private cloneMap;
    private isReady;
    protected firstUpdated(): void;
    willUpdate(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    setMarkdownIt(): void;
    registrationQuick(type: string): void;
    registrationCustomize(rulestr: string): void;
    registrationRulesBySingle(option: Omit<RuleOptions, 'endToken'>): void;
    registrationRulesByMulti(option: RuleOptions): void;
    rewriteRules(): void;
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
    protected _renderAst5(asts: AstToken[]): TemplateResult[];
    _getAST(): unknown[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-md-rendering': YsMdRendering;
    }
    interface HTMLElementEventMap {
        'link-click': CustomEvent<{
            href: string;
        }>;
        'child-register': CustomEvent<{
            feature: string;
        }>;
        [key: `${string}-instance`]: CustomEvent<YsRenderUpdateDetail>;
        [key: `${string}-update`]: CustomEvent<YsRenderUpdateDetail>;
    }
}
