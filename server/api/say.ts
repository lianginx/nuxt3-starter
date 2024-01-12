interface Query {
  name: string
}

export default defineEventHandler(async (event) => {
  const { name }: Query = getQuery(event)
  return name
})
