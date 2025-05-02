// 生成随机id
export function generateUUID(): string {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (parseInt(c) ^ ((Math.random() * 16) >> (parseInt(c) / 4))).toString(16))
}
