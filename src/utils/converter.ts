import { ComplexAttributeConverter } from 'lit'

// 创建一个可复用的布尔转换器
export const BooleanConverter: ComplexAttributeConverter<boolean> = {
  fromAttribute: (value: string | null): boolean => {
    // 处理直接设置属性的情况（来自 Vue/React 绑定）
    if (typeof value === 'boolean') {
      return value
    }

    // null/undefined -> false
    if (value === null || value === undefined) return false

    // 空字符串（只写属性名，如 <element dark>）-> true
    if (value === '') return true

    // 字符串处理
    if (typeof value === 'string') {
      const normalized = value.toLowerCase().trim()
      return normalized === 'true' || normalized === '1'
    }

    // 数字处理
    if (typeof value === 'number') {
      return value === 1
    }

    // 其他情况
    return Boolean(value)
  },
  toAttribute: (value: boolean): string | null => {
    return value ? '' : null
  }
}
