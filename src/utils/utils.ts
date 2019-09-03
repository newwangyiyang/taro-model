import Taro, { DependencyList, useEffect } from "@tarojs/taro";
import { register, format } from 'timeago.js'
/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

export const pageToLogin = () => {
  let path = getCurrentPageUrl()
  if (!path.includes('login')) {
    Taro.navigateTo({
      url: "/pages/login/login"
    });
  }
}

/**
 * useEffect中异步包装
 * @param effect 
 * @param deps 
 */
export function useAsyncEffect (effect: () => Promise<any>, deps?: DependencyList) {
  useEffect(() => {
    effect()
  }, deps)
}

// 数字/英文与中文之间需要加空格 (timeago)
const betterChineseDict = (_, index) => {
  return [
    ['刚刚', '片刻后'],
    ['%s 秒前', '%s 秒后'],
    ['1 分钟前', '1 分钟后'],
    ['%s 分钟前', '%s 分钟后'],
    ['1 小时前', '1小 时后'],
    ['%s 小时前', '%s 小时后'],
    ['1 天前', '1 天后'],
    ['%s 天前', '%s 天后'],
    ['1 周前', '1 周后'],
    ['%s 周前', '%s 周后'],
    ['1 月前', '1 月后'],
    ['%s 月前', '%s 月后'],
    ['1 年前', '1 年后'],
    ['%s 年前', '%s 年后']
  ][index]
}
register('zh', betterChineseDict)

export const timeageFormat = format

// redux中action统一格式
export interface IStoreAction<T> {
  type: string
  payload: T | string | object
}
