import { TemplateResult } from 'lit';
/**
 * 设置元素内容，根据是否有 shadowRoot 来判断是直接设置 innerHTML 还是修改 shadowRoot 内容
 * @param el 要设置内容的元素
 * @param content 要设置的内容，支持字符串或 HTMLElement
 */
export declare const setContent: (el: HTMLElement, content: TemplateResult) => void;
export declare function generateUUID(): string;
export declare const jsonToStyle: (json: unknown) => string;
