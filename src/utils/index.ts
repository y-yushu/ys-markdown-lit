// 生成随机id
export function generateUUID(): string {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (parseInt(c) ^ ((Math.random() * 16) >> (parseInt(c) / 4))).toString(16))
}

// 方案1：使用 Object.keys()（推荐）
function isStringRecord(obj: unknown): obj is Record<string, string> {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }
  return Object.keys(obj).every(key => typeof key === 'string' && typeof (obj as any)[key] === 'string')
}

// 接收到的json数据，转为可识别的style
export const jsonToStyle = (json: unknown): string => {
  if (isStringRecord(json)) {
    let style = ''
    const keys = Object.keys(json)
    keys.forEach(k => {
      style += `${k}:${json[k]};`
    })
    return style
  }
  return ''
}
