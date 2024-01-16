import jwt from 'jsonwebtoken'

/** 从环境变量中获取密钥 */
const { secret } = useRuntimeConfig()

/** JSON Web Token 有效期 30 天 */
const exp = '30d'

/**
 * 根据用户身份信息签发 JSON Web Token
 * @param payload 用户身份信息
 * @returns JSON Web Token 字符串
 */
export function jwtSign(payload: any) {
  return jwt.sign(payload, secret, { expiresIn: exp })
}

/**
 * 验证 JSON Web Token 是否合法
 * @param token JSON Web Token 字符串
 * @returns Payload 用户身份信息
 */
export function jwtVerify(token: string) {
  try {
    return jwt.verify(token, secret) as jwt.JwtPayload
  }
  catch (error: any) {
    if (error.name === 'TokenExpiredError')
      throw createError({ statusCode: 401, message: '身份信息已失效' })
    else if (error.name === 'JsonWebTokenError')
      throw createError({ statusCode: 401, message: '身份验证失败' })
    else
      throw createError({ statusCode: 401, message: '登录异常' })
  }
}
