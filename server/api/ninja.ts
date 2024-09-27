export default defineEventHandler(async (event) => {
    const { currencyKey } = useRuntimeConfig();

    // const { name } = getQuery(event)
    
    // const { age } = await readBody(event)

    const { data } = await $fetch<{ data: unknown }>(`https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=EUR%2CUSD%2CCAD`)

    return data
})