const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
    console.log(res.statusCode)  // 200 => êxito
})

console.log('Conectando API')