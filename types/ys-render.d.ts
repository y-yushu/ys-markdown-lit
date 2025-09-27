import { LitElement } from 'lit';
export declare class YsRender extends LitElement {
    content: string;
    private _items;
    private templates;
    protected firstUpdated(): void;
    protected willUpdate(changed: Map<string, any>): void;
    private parseMarkdown;
    protected render(): import("lit").TemplateResult<1>;
}
