import { SetMetadata } from '@nestjs/common'

export const BYPASS_KEY = Symbol('__bypass_key__')

/**
 * 当不需要转换成基础返回格式时添加该装饰器
 * true: 不转换
 * false: 转换
 */
export function SkipFormat() {
  return SetMetadata(BYPASS_KEY, true)
}