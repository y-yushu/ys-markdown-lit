import Token from 'markdown-it/lib/token.mjs';
export interface AstToken {
    key: string;
    node: Token;
    end: Token | null;
    children: AstToken[];
    meta?: unknown;
}
export interface YsRenderUpdateDetail {
    key: string;
    type: string;
    el: HTMLElement;
    content: string;
    iscomplete?: boolean;
    meta?: unknown;
}
export interface RuleOptions {
    key?: string;
    startTag: string;
    endTag: string;
    startToken: string;
    endToken: string;
    hasChildren?: boolean;
    meta?: unknown;
}
export interface RuleItem {
    name: string;
    key: string;
    type: 'fence' | 'inline' | 'block';
    startTag: string;
    endTag: string;
    meta?: unknown;
}
