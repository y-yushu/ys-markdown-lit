import { LitElement, TemplateResult } from 'lit';
import './languages/bash';
import './languages/cpp';
import './languages/csharp';
import './languages/css';
import './languages/dart';
import './languages/go';
import './languages/java';
import './languages/javascript';
import './languages/json';
import './languages/kotlin';
import './languages/lua';
import './languages/markdown';
import './languages/perl';
import './languages/php';
import './languages/powershell';
import './languages/python';
import './languages/r';
import './languages/ruby';
import './languages/rust';
import './languages/scala';
import './languages/sql';
import './languages/swift';
import './languages/typescript';
import './languages/xml';
import './languages/yaml';
export default class YsCodeHighlight extends LitElement {
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
export declare class YsCodeHighlightRender extends LitElement {
    createRenderRoot(): this;
    language: string;
    info: string;
    content: string;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ys-code-highlight': YsCodeHighlight;
        'ys-code-highlight-render': YsCodeHighlightRender;
    }
}
