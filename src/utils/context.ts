import { createContext } from '@lit/context'

// 定义共享数据的类型
export interface ThemeData {
  mode: string
}

// 创建 context
export const themeContext = createContext<ThemeData>('theme-data')
