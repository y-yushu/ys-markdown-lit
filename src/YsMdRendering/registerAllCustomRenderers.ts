import { html, TemplateResult } from 'lit'
import { YsMdRendering } from './index'

const registerAllCustomRenderers = () => {
  YsMdRendering.registerMethod('heading_open', renderHeading)
}

const renderHeading = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token = ask.node
  switch (token.tag) {
    case 'h1':
      return html`<h1>${chil}</h1>`
    case 'h2':
      return html`<h2>${chil}</h2>`
    case 'h3':
      return html`<h3>${chil}</h3>`
    case 'h4':
      return html`<h4>${chil}</h4>`
    case 'h5':
      return html`<h5>${chil}</h5>`
    case 'h6':
      return html`<h6>${chil}</h6>`
  }
  console.error('[heading标签解析异常]', token)
  return html``
}

export default registerAllCustomRenderers
