export default defineEventHandler(async (event) => {
    const { code } = event.context.params || {}
    console.log(`currencies=${code}`)

    const { currencyKey } = useRuntimeConfig()

    
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}&`

    const response = await $fetch(uri);
   
    return response
})