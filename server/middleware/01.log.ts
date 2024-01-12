/* eslint-disable no-console */
export default defineEventHandler(async (event) => {
  const time = new Date().toLocaleString()
  const method = event.method
  const path = event.path
  console.log(time, `[${method}]`, path)
})
