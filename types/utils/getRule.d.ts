import MarkdownIt from 'markdown-it/index.js';
type RuleOptions = {
    startTag: string;
    endTag: string;
    startToken: string;
    endToken: string;
    isClosed?: boolean;
    hasChildren?: boolean;
    meta?: unknown;
};
/**
 * 规则配置
 * @param startTag 开始标识
 * @param endTag 结束标识
 * @param startToken token开始标识
 * @param endToken token结束标识
 * @param isClosed 是否需要闭合标签 默认为 true
 * @param hasChildren 是否内部进行md解析 默认为 false
 * @returns {Function} 规则函数
 */
declare const getBlockRule: ({ startTag, endTag, startToken, endToken, isClosed, hasChildren, meta }: RuleOptions) => (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => boolean;
/**
 * 行内规则配置
 * @param startTag 开始标识
 * @param endTag 结束标识
 * @param startToken token标识
 * @returns {Function} 行内规则函数
 */
declare const getInlineRule: ({ startTag, endTag, startToken, meta }: Omit<RuleOptions, "endToken">) => (state: MarkdownIt.StateInline, silent: boolean) => boolean;
export { getBlockRule, getInlineRule };
