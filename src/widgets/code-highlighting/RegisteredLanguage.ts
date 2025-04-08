import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import hljs from 'highlight.js/lib/core'

// 不存在的语言
const NoLanguage: Record<string, boolean> = {}
/**
 * 根据语言动态加载
 * @param language 语言类型
 * @param content 渲染内容
 * @returns 渲染结果
 */
const RegisteredLanguage = async (language: string, content: string) => {
  const preClassName = 'm-0 p-0 rounded-t-none'

  // 如果该语言无法加载
  if (NoLanguage[language]) {
    return html`<pre class="${preClassName}"><code class="language-${language}">${content}</code></pre>`
  }

  // 如果该语言已加载
  if (hljs.getLanguage(language)) {
    const highlightedCode = hljs.highlight(content, { language })?.value
    return html` <pre class="${preClassName}"><code class="hljs language-${language}" style="background-color: var(--tw-prose-pre-bg);">${unsafeHTML(
      highlightedCode
    )}</code></pre>`
  }

  // 尝试异步加载该语言
  try {
    const loadLang = LanguageMap[language]
    if (!loadLang) return html`<pre class="${preClassName}"><code class="language-${language}">${content}</code></pre>`

    // 动态加载注册语言
    const langModule = await loadLang()
    hljs.registerLanguage(language, langModule.default)
    const highlightedCode = hljs.highlight(content, { language }).value

    return html`<pre class="${preClassName}"><code class="hljs language-${language}" style="background-color: var(--tw-prose-pre-bg);">${unsafeHTML(
      highlightedCode
    )}</code></pre>`
  } catch (err) {
    console.error('[hljs加载异常]\n', err)
    NoLanguage[language] = true // 记录无法加载该语言
    return html`<pre class="${preClassName}"><code class="language-${language}">${content}</code></pre>`
  }
}

export default RegisteredLanguage

/**
 * 所有语言列表
 */
const LanguageMap: Record<string, () => Promise<any>> = {
  '1c': () => import('highlight.js/lib/languages/1c'),
  abnf: () => import('highlight.js/lib/languages/abnf'),
  accesslog: () => import('highlight.js/lib/languages/accesslog'),
  actionscript: () => import('highlight.js/lib/languages/actionscript'),
  ada: () => import('highlight.js/lib/languages/ada'),
  angelscript: () => import('highlight.js/lib/languages/angelscript'),
  apache: () => import('highlight.js/lib/languages/apache'),
  applescript: () => import('highlight.js/lib/languages/applescript'),
  arcade: () => import('highlight.js/lib/languages/arcade'),
  arduino: () => import('highlight.js/lib/languages/arduino'),
  armasm: () => import('highlight.js/lib/languages/armasm'),
  asciidoc: () => import('highlight.js/lib/languages/asciidoc'),
  aspectj: () => import('highlight.js/lib/languages/aspectj'),
  autohotkey: () => import('highlight.js/lib/languages/autohotkey'),
  autoit: () => import('highlight.js/lib/languages/autoit'),
  avrasm: () => import('highlight.js/lib/languages/avrasm'),
  awk: () => import('highlight.js/lib/languages/awk'),
  axapta: () => import('highlight.js/lib/languages/axapta'),
  bash: () => import('highlight.js/lib/languages/bash'),
  basic: () => import('highlight.js/lib/languages/basic'),
  bnf: () => import('highlight.js/lib/languages/bnf'),
  brainfuck: () => import('highlight.js/lib/languages/brainfuck'),
  c: () => import('highlight.js/lib/languages/c'),
  cal: () => import('highlight.js/lib/languages/cal'),
  capnproto: () => import('highlight.js/lib/languages/capnproto'),
  ceylon: () => import('highlight.js/lib/languages/ceylon'),
  clean: () => import('highlight.js/lib/languages/clean'),
  clojure: () => import('highlight.js/lib/languages/clojure'),
  'clojure-repl': () => import('highlight.js/lib/languages/clojure-repl'),
  cmake: () => import('highlight.js/lib/languages/cmake'),
  coffeescript: () => import('highlight.js/lib/languages/coffeescript'),
  coq: () => import('highlight.js/lib/languages/coq'),
  cos: () => import('highlight.js/lib/languages/cos'),
  cpp: () => import('highlight.js/lib/languages/cpp'),
  crmsh: () => import('highlight.js/lib/languages/crmsh'),
  crystal: () => import('highlight.js/lib/languages/crystal'),
  csharp: () => import('highlight.js/lib/languages/csharp'),
  csp: () => import('highlight.js/lib/languages/csp'),
  css: () => import('highlight.js/lib/languages/css'),
  d: () => import('highlight.js/lib/languages/d'),
  dart: () => import('highlight.js/lib/languages/dart'),
  delphi: () => import('highlight.js/lib/languages/delphi'),
  diff: () => import('highlight.js/lib/languages/diff'),
  django: () => import('highlight.js/lib/languages/django'),
  dns: () => import('highlight.js/lib/languages/dns'),
  dockerfile: () => import('highlight.js/lib/languages/dockerfile'),
  dos: () => import('highlight.js/lib/languages/dos'),
  dsconfig: () => import('highlight.js/lib/languages/dsconfig'),
  dts: () => import('highlight.js/lib/languages/dts'),
  dust: () => import('highlight.js/lib/languages/dust'),
  ebnf: () => import('highlight.js/lib/languages/ebnf'),
  elixir: () => import('highlight.js/lib/languages/elixir'),
  elm: () => import('highlight.js/lib/languages/elm'),
  erb: () => import('highlight.js/lib/languages/erb'),
  erlang: () => import('highlight.js/lib/languages/erlang'),
  'erlang-repl': () => import('highlight.js/lib/languages/erlang-repl'),
  excel: () => import('highlight.js/lib/languages/excel'),
  fix: () => import('highlight.js/lib/languages/fix'),
  flix: () => import('highlight.js/lib/languages/flix'),
  fortran: () => import('highlight.js/lib/languages/fortran'),
  fsharp: () => import('highlight.js/lib/languages/fsharp'),
  gams: () => import('highlight.js/lib/languages/gams'),
  gauss: () => import('highlight.js/lib/languages/gauss'),
  gcode: () => import('highlight.js/lib/languages/gcode'),
  gherkin: () => import('highlight.js/lib/languages/gherkin'),
  glsl: () => import('highlight.js/lib/languages/glsl'),
  gml: () => import('highlight.js/lib/languages/gml'),
  go: () => import('highlight.js/lib/languages/go'),
  golo: () => import('highlight.js/lib/languages/golo'),
  gradle: () => import('highlight.js/lib/languages/gradle'),
  groovy: () => import('highlight.js/lib/languages/groovy'),
  haml: () => import('highlight.js/lib/languages/haml'),
  handlebars: () => import('highlight.js/lib/languages/handlebars'),
  haskell: () => import('highlight.js/lib/languages/haskell'),
  haxe: () => import('highlight.js/lib/languages/haxe'),
  hsp: () => import('highlight.js/lib/languages/hsp'),
  // htmlbars: () => import('highlight.js/lib/languages/htmlbars'),
  http: () => import('highlight.js/lib/languages/http'),
  hy: () => import('highlight.js/lib/languages/hy'),
  inform7: () => import('highlight.js/lib/languages/inform7'),
  ini: () => import('highlight.js/lib/languages/ini'),
  irpf90: () => import('highlight.js/lib/languages/irpf90'),
  java: () => import('highlight.js/lib/languages/java'),
  javascript: () => import('highlight.js/lib/languages/javascript'),
  'jboss-cli': () => import('highlight.js/lib/languages/jboss-cli'),
  json: () => import('highlight.js/lib/languages/json'),
  julia: () => import('highlight.js/lib/languages/julia'),
  'julia-repl': () => import('highlight.js/lib/languages/julia-repl'),
  kotlin: () => import('highlight.js/lib/languages/kotlin'),
  lasso: () => import('highlight.js/lib/languages/lasso'),
  latex: () => import('highlight.js/lib/languages/latex'),
  ldif: () => import('highlight.js/lib/languages/ldif'),
  leaf: () => import('highlight.js/lib/languages/leaf'),
  less: () => import('highlight.js/lib/languages/less'),
  lisp: () => import('highlight.js/lib/languages/lisp'),
  livecodeserver: () => import('highlight.js/lib/languages/livecodeserver'),
  livescript: () => import('highlight.js/lib/languages/livescript'),
  llvm: () => import('highlight.js/lib/languages/llvm'),
  lsl: () => import('highlight.js/lib/languages/lsl'),
  lua: () => import('highlight.js/lib/languages/lua'),
  makefile: () => import('highlight.js/lib/languages/makefile'),
  markdown: () => import('highlight.js/lib/languages/markdown'),
  mathematica: () => import('highlight.js/lib/languages/mathematica'),
  matlab: () => import('highlight.js/lib/languages/matlab'),
  maxima: () => import('highlight.js/lib/languages/maxima'),
  mel: () => import('highlight.js/lib/languages/mel'),
  mercury: () => import('highlight.js/lib/languages/mercury'),
  mipsasm: () => import('highlight.js/lib/languages/mipsasm'),
  mizar: () => import('highlight.js/lib/languages/mizar'),
  mojolicious: () => import('highlight.js/lib/languages/mojolicious'),
  monkey: () => import('highlight.js/lib/languages/monkey'),
  moonscript: () => import('highlight.js/lib/languages/moonscript'),
  n1ql: () => import('highlight.js/lib/languages/n1ql'),
  nginx: () => import('highlight.js/lib/languages/nginx'),
  nim: () => import('highlight.js/lib/languages/nim'),
  nix: () => import('highlight.js/lib/languages/nix'),
  nsis: () => import('highlight.js/lib/languages/nsis'),
  objectivec: () => import('highlight.js/lib/languages/objectivec'),
  ocaml: () => import('highlight.js/lib/languages/ocaml'),
  openscad: () => import('highlight.js/lib/languages/openscad'),
  oxygene: () => import('highlight.js/lib/languages/oxygene'),
  parser3: () => import('highlight.js/lib/languages/parser3'),
  perl: () => import('highlight.js/lib/languages/perl'),
  pf: () => import('highlight.js/lib/languages/pf'),
  pgsql: () => import('highlight.js/lib/languages/pgsql'),
  php: () => import('highlight.js/lib/languages/php'),
  plaintext: () => import('highlight.js/lib/languages/plaintext'),
  pony: () => import('highlight.js/lib/languages/pony'),
  powershell: () => import('highlight.js/lib/languages/powershell'),
  processing: () => import('highlight.js/lib/languages/processing'),
  profile: () => import('highlight.js/lib/languages/profile'),
  prolog: () => import('highlight.js/lib/languages/prolog'),
  properties: () => import('highlight.js/lib/languages/properties'),
  protobuf: () => import('highlight.js/lib/languages/protobuf'),
  puppet: () => import('highlight.js/lib/languages/puppet'),
  purebasic: () => import('highlight.js/lib/languages/purebasic'),
  python: () => import('highlight.js/lib/languages/python'),
  q: () => import('highlight.js/lib/languages/q'),
  qml: () => import('highlight.js/lib/languages/qml'),
  r: () => import('highlight.js/lib/languages/r'),
  reasonml: () => import('highlight.js/lib/languages/reasonml'),
  rib: () => import('highlight.js/lib/languages/rib'),
  roboconf: () => import('highlight.js/lib/languages/roboconf'),
  routeros: () => import('highlight.js/lib/languages/routeros'),
  rsl: () => import('highlight.js/lib/languages/rsl'),
  ruby: () => import('highlight.js/lib/languages/ruby'),
  ruleslanguage: () => import('highlight.js/lib/languages/ruleslanguage'),
  rust: () => import('highlight.js/lib/languages/rust'),
  sas: () => import('highlight.js/lib/languages/sas'),
  scala: () => import('highlight.js/lib/languages/scala'),
  scheme: () => import('highlight.js/lib/languages/scheme'),
  scilab: () => import('highlight.js/lib/languages/scilab'),
  scss: () => import('highlight.js/lib/languages/scss'),
  shell: () => import('highlight.js/lib/languages/shell'),
  smali: () => import('highlight.js/lib/languages/smali'),
  smalltalk: () => import('highlight.js/lib/languages/smalltalk'),
  sml: () => import('highlight.js/lib/languages/sml'),
  sqf: () => import('highlight.js/lib/languages/sqf'),
  sql: () => import('highlight.js/lib/languages/sql'),
  stan: () => import('highlight.js/lib/languages/stan'),
  stata: () => import('highlight.js/lib/languages/stata'),
  step21: () => import('highlight.js/lib/languages/step21'),
  stylus: () => import('highlight.js/lib/languages/stylus'),
  subunit: () => import('highlight.js/lib/languages/subunit'),
  swift: () => import('highlight.js/lib/languages/swift'),
  taggerscript: () => import('highlight.js/lib/languages/taggerscript'),
  tap: () => import('highlight.js/lib/languages/tap'),
  tcl: () => import('highlight.js/lib/languages/tcl'),
  thrift: () => import('highlight.js/lib/languages/thrift'),
  tp: () => import('highlight.js/lib/languages/tp'),
  twig: () => import('highlight.js/lib/languages/twig'),
  typescript: () => import('highlight.js/lib/languages/typescript'),
  vala: () => import('highlight.js/lib/languages/vala'),
  vbnet: () => import('highlight.js/lib/languages/vbnet'),
  vbscript: () => import('highlight.js/lib/languages/vbscript'),
  'vbscript-html': () => import('highlight.js/lib/languages/vbscript-html'),
  verilog: () => import('highlight.js/lib/languages/verilog'),
  vhdl: () => import('highlight.js/lib/languages/vhdl'),
  vim: () => import('highlight.js/lib/languages/vim'),
  wasm: () => import('highlight.js/lib/languages/wasm'),
  wren: () => import('highlight.js/lib/languages/wren'),
  x86asm: () => import('highlight.js/lib/languages/x86asm'),
  xl: () => import('highlight.js/lib/languages/xl'),
  xml: () => import('highlight.js/lib/languages/xml'),
  xquery: () => import('highlight.js/lib/languages/xquery'),
  yaml: () => import('highlight.js/lib/languages/yaml'),
  zephir: () => import('highlight.js/lib/languages/zephir')
}
