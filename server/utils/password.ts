import { createHash, randomBytes } from 'node:crypto'
import type { User } from '@prisma/client'

/**
 * 生成随机盐值
 * @param size 随机字节数，默认 `32`
 * @returns 返回盐值
 */
export function generateSalt(size: number = 32, encoding: BufferEncoding = 'hex'): string {
  return randomBytes(size).toString(encoding)
}

/**
 * 将密码进行哈希编码
 * @param password 明文密码
 * @param salt 盐值
 * @returns 返回哈希编码后的密码
 */
export function hashPassword(password: string, salt: string): string {
  return createHash('sha512').update(password).update(salt).digest('hex')
}

/**
 * 比对明文密码和哈希密码是否一致
 * @param options 匹配选项
 * @param options.password 明文密码
 * @param options.hashedPassword 哈希密码
 * @param options.salt 盐值
 * @returns 密码是否一致
 */
export function comparePassword(
  { password, hashedPassword, salt }:
  { password: string, hashedPassword: string, salt: string },
) {
  return hashedPassword === hashPassword(password, salt)
}

/**
 * 校验用户名格式
 * @param username 用户名
 */
export function validateUsername(username: string) {
  if (!username)
    throw createError({ statusCode: 400, message: '用户名不能为空' })

  if (username.length < 4)
    throw createError({ statusCode: 400, message: '用户名需要至少包含 6 个字符' })

  if (username.length > 12)
    throw createError({ statusCode: 400, message: '用户名长度不能超过 12 位' })

  if (!/[a-z]/.test(username))
    throw createError({ statusCode: 400, message: '用户名需要包含至少 1 个小写字母' })

  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(username))
    throw createError({ statusCode: 400, message: '用户名不能包含特殊字符' })
}

/**
 * 校验邮箱格式
 * @param email 邮箱
 */
export function validateEmail(email: string) {
  if (!email)
    throw createError({ statusCode: 400, message: '邮箱不能为空' })

  if (!/^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email))
    throw createError({ statusCode: 400, message: '邮箱格式错误' })
}

/**
 * 校验密码格式
 * @param password 明文密码
 */
export function validatePassword(password: string) {
  if (!password)
    throw createError({ statusCode: 400, message: '密码不能为空' })

  if (password.length < 8)
    throw createError({ statusCode: 400, message: '密码需要至少包含 8 个字符' })

  if (password.length > 20)
    throw createError({ statusCode: 400, message: ' 密码长度不能超过 20 位' })

  if (!/[A-Z]/.test(password))
    throw createError({ statusCode: 400, message: '密码需要包含至少 1 个大写字母' })

  if (!/[a-z]/.test(password))
    throw createError({ statusCode: 400, message: '密码需要包含至少 1 个小写字母' })

  if (!/\d/.test(password))
    throw createError({ statusCode: 400, message: '密码需要包含至少 1 个数字' })

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password))
    throw createError({ statusCode: 400, message: '密码需要包含至少 1 个符号' })
}

export function validateNickname(nickname: string) {
  if (!nickname)
    throw createError({ statusCode: 400, message: '昵称不能为空' })

  if (nickname.length < 3)
    throw createError({ statusCode: 400, message: '昵称需要至少包含 2 个字符' })

  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(nickname))
    throw createError({ statusCode: 400, message: '昵称不能包含特殊字符' })
}

/**
 * 从用户信息对象中移除敏感信息字段
 * @param user 用户信息对象
 * @returns 返回安全的用户信息对象
 */
export function securityUserInfo(user: User) {
  const { password: _, salt: __, ...safeUser } = user
  return safeUser
}
