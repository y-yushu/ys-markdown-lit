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
// 自定义 CustomStyles 转换器
export const ObjectConverter = {
  fromAttribute: (value: string | null): Record<string, any> => {
    // 处理 null、undefined、空字符串、只有空白字符的情况
    if (!value || !value.trim()) {
      return {}
    }

    try {
      // 尝试解析为 JSON
      const parsed = JSON.parse(value)

      // 确保解析结果是对象且不为 null
      if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
        return parsed
      }

      // 如果解析结果不是对象（比如是数组、字符串、数字等），返回空对象
      return {}
    } catch (error) {
      // JSON 解析失败，返回空对象
      return {}
    }
  },

  toAttribute: (value: Record<string, any> | string): string => {
    if (typeof value === 'string') {
      // 如果传入的是字符串，尝试解析后再序列化
      try {
        const parsed = JSON.parse(value)
        // 确保解析结果是对象
        if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
          return JSON.stringify(parsed)
        }
        return '{}'
      } catch {
        // 如果不是有效 JSON，返回空对象的字符串
        return '{}'
      }
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return JSON.stringify(value)
    }

    return '{}'
  }
}
