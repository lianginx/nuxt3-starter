function whitelist(method: string, path: string) {
  if (!path.startsWith('/api/'))
    return true

  if (path.startsWith('/api/auth/login') && method === 'POST')
    return true

  if (path.startsWith('/api/auth/register') && method === 'POST')
    return true
}

export default defineEventHandler(async (event) => {
  if (!whitelist(event.method, event.path)) {
    const token = getCookie(event, 'token')

    if (!token)
      throw createError({ statusCode: 401, message: '未登录' })

    const payload = jwtVerify(token)

    // 将用户信息传递到 API 上下文中
    event.context.user = payload
  }
})
