### JavaScript Async
>>> Sistema síncrono vs Sistema Asyn
> Sistema síncrono
- Um sistema síncrono (synchronous) é uma tarefa que se conclui em cadeia, logo após outra tarefa e assim suscesivamente;
- Por padrão, o Javascript é um sistema síncrono.

> Sistema Async
- Num sistema assíncrono (asynchronous), as tarefas são executadas de maneira independente uma da outra
- O Javascript pode usar o assíncronismo em seu favor

>>> Conceito de Callback
> Funções aceitam qualquer tipo de dado como argumento, inclusive outra função

```js
//arquivo callback.js

//exemplos de passagens de argumentos em uma função
function imprimirDado (dado) {
    console.log(dado)
}

imprimirDado(1) // retorna number 
imprimirDado('texto') // retorna string 
imprimirDado(true) // retorna boolean 
imprimirDado({nome: 'Victor'}) // retorna objeto 
imprimirDado([1, 2, 3]) // retorna array 

console.log( 'apenas dados simples sendo passados como argumento por enquanto')


imprimirDado(() => {
    return 'olá callback, uma função foi passada como argumento'
})

console.log('depois da callback')

```

- Call back significa 'chame de volta';
- Ou seja, uma função é chamada após a execução das instruções de uma outra função.

>>> setTimeout (function, delay)
- O setTimeout é uma função que recebe outra função como argumento e um tempo para ser executada.
- A função a ser executada dentro do settimeout é uma callback, o segundo argumento é o tempo de espera para a chamada da callback;

```js
// arquivo setTime.js

setTimeout(function() => console.log('Depois de 1s'), 1000)
console.log('mensagem aleatória impressa após a execução da função, mas não antes do delay estipulado')

```

>>> Conectando API com HTTPS e Callback
> Revisando aprendizado
```js
// arquivo revisando.js
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
    console.log(res.statusCode)  // 200 => êxito
})

console.log('Conectando API')

```

- Em sistemas síncronos, a execução das tarefas dependem do êxito da anterior, no caso do exemplo acima, o sistema não interrompe o seu funcionamento enquanto não obtêm a resposta da API.
- A função get, por receber uma função callback, é deixada em um outro plano enquanto o JS segue a leitura do escopo global.

>>> Introdução à Promises com JS
>> Promise = Promessa
- Em resumo, promise é um objeto JS com a promessa de que algo será realizado
- É usado para operações assíncronas
- - Carregar um arquivo
- - Leitura de uma API

>> Promise e estágios
- Pending: Estado inicial, assim que o Objeto da promessa é iniciado;
- Fulfilled: A promessa foi concluída com sucesso;
- Rejected: A promessa foi rejeitada, houve um erro;
- Settled: Seja com sucesso ou com erra, ela fo finalmente concluída.

>>> Promises no código
```js
// arquivo promise.js
// A promessa de que algo irá acontecer
// Poderá dar cert ou não
// mas irá acontecer

console.log('pedindo uber')

const promessa = new Promise((resolve, reject) => { // ordem dos argumentos na sintaxe da promise

    console.log('aguardando')
    // a promise recebe 2 callbacks como argumentos, uma função no caso de êxito ou outra no caso de erro
    setTimeout(() => {
        let random = parseInt(Math.random() * 10)
        console.log(random)
        return random <= 5 ? resolve('Êxito! Carro chegando') : reject('Erro! Motorista cancelou')
    }, 800);

})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Fim'))
    
```