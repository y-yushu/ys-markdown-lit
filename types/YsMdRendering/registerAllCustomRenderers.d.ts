import { TemplateResult } from 'lit';
import { AstToken } from '../types';
export type RenderFunction = (ask: AstToken, chil: TemplateResult[], option?: any) => TemplateResult;
export type RenderMethods = Record<string, RenderFunction>;
export declare const renderMethods: RenderMethods;
