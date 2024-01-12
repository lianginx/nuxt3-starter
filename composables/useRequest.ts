import { defu } from 'defu'
import type { UseFetchOptions } from '#app'

export function useRequest<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  // const userAuth = useCookie('token')
  const defaults: UseFetchOptions<T> = {
    // headers: userAuth.value
    //   ? { Authorization: `Bearer ${userAuth.value}` }
    //   : {},
    onResponseError(ctx) {
      if (ctx.response.status === 401) {
        // 处理未登录逻辑
      }
    },
  }
  const params = defu(options, defaults)
  return useFetch(url, params)
}
