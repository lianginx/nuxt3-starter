export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  validateEmail(email)
  validatePassword(password)

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user || hashPassword(password, user.salt) !== user.password)
    throw createError({ statusCode: 400, message: '用户名或密码错误' })

  const safeUser = securityUserInfo(user)
  const token = jwtSign(safeUser)

  setCookie(event, 'token', token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60,
  })

  return safeUser
})
