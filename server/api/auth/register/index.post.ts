import type { User } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const { email, password, nickname } = await readBody(event)

  validateEmail(email)
  validatePassword(password)
  validateNickname(nickname)

  const exist = await prisma.user.count({
    where: {
      email,
    },
  })

  if (exist)
    throw createError({ statusCode: 400, message: '用户名已注册' })

  const salt = generateSalt()
  const hashedPassword = hashPassword(password, salt)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      salt,
      nickname,
    },
  })

  return await $fetch<User>('/api/auth/login', {
    method: 'POST',
    body: {
      email,
      password,
    },
  })
})
