// src/types/markdown-it.d.ts
declare module 'markdown-it/lib/rules_block/fence' {
  import type { StateBlock } from 'markdown-it'
  const value: (state: StateBlock, startLine: number, endLine: number, silent: boolean) => boolean
  export default value
}
