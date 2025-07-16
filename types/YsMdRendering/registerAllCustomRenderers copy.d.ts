import { TemplateResult } from 'lit';
import Token from 'markdown-it/lib/token.mjs';
export type AstToken = {
    key: string;
    node: Token;
    end: Token | null;
    children: AstToken[];
    meta?: unknown;
};
export type RenderFunction = (ask: AstToken, chil: TemplateResult[], option: any) => TemplateResult;
export type RenderMethods = Record<string, RenderFunction>;
export declare const renderMethods: RenderMethods;
