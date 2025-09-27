import { LitElement } from 'lit';
export declare class YsRender extends LitElement {
    list: string;
    pattern: string;
    private templates;
    createRenderRoot(): this;
    connectedCallback(): void;
    protected updated(changed: Map<string, any>): void;
    private collectTemplates;
    private parseList;
    render(): import("lit").TemplateResult<1>;
}
