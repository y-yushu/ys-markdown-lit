import { LitElement, PropertyValues } from 'lit';
import { ThemeData } from '../../utils/context';
type MermaidRenderType = 'code' | 'view';
type ErrorHandlingType = 'errorHandling' | 'notHandled';
export default class YsMermaid extends LitElement {
    private config;
    initialStatus: MermaidRenderType;
    errorHandlingType: ErrorHandlingType;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleInstance;
    private handleUpdate;
}
export declare class YsMermaidRender extends LitElement {
    static styles: import("lit").CSSResult[];
    content: string;
    errorHandlingType: ErrorHandlingType;
    status: MermaidRenderType;
    themeData?: ThemeData;
    private currentMermaidTheme;
    private get isDarkMode();
    protected updated(changedProperties: PropertyValues): void;
    private mermaidBoxRef;
    _checkStatus(status: MermaidRenderType): void;
    /**
     * 渲染方法
     */
    private _renderMermaid;
    private _cleanupErrorElements;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-mermaid': YsMermaid;
        'ys-mermaid-render': YsMermaidRender;
    }
}
export {};
