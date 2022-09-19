# JavaScript Async
## Sistema síncrono vs Sistema Async
* Sistema síncrono
- Um sistema síncrono (synchronous) é uma tarefa que se conclui em cadeia, logo após outra tarefa e assim suscesivamente;
- Por padrão, o Javascript é um sistema síncrono.

* Sistema Async
- Num sistema assíncrono (asynchronous), as tarefas são executadas de maneira independente uma da outra
- O Javascript pode usar o assíncronismo em seu favor

## Conceito de Callback
* Funções aceitam qualquer tipo de dado como argumento, inclusive outra função

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

## setTimeout (function, delay)
- O setTimeout é uma função que recebe outra função como argumento e um tempo para ser executada.
- A função a ser executada dentro do settimeout é uma callback, o segundo argumento é o tempo de espera para a chamada da callback;

```js
// arquivo setTime.js

setTimeout(function() => console.log('Depois de 1s'), 1000)
console.log('mensagem aleatória impressa após a execução da função, mas não antes do delay estipulado')

```

## Conectando API com HTTPS e Callback
* Revisando aprendizado
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

## Introdução à Promises com JS
* Promise = Promessa
- Em resumo, promise é um objeto JS com a promessa de que algo será realizado
- É usado para operações assíncronas
- - Carregar um arquivo
- - Leitura de uma API

* Promise e estágios
- Pending: Estado inicial, assim que o Objeto da promessa é iniciado;
- Fulfilled: A promessa foi concluída com sucesso;
- Rejected: A promessa foi rejeitada, houve um erro;
- Settled: Seja com sucesso ou com erra, ela fo finalmente concluída.

## Promises no código
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

## Promises com Fetch

- Usando uma API do github para buscar um arquivo Json
- Dentro do Javascript já temos um web api que é o fetch
- O fetch é uma função que busca o seu parâmetro

```js
// arquivo fetch-api/fetch.js
const url = "https://api.github.com/users/victorlabussiere"
const body = document.querySelector('body')
console.log(body)

// fetch is an browser method, it wont work inside nodejs...
var response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        body.textContent += `The request response is ${data.name}`
        console.log(data)
    })
// Retorno de API via promise
```

## Axius JS
- O Axius é uma biblioteca HTTP client tanto pro browser quanto pro nodejs, baseado em promises.
- Promises, por padrão, já existem no Browser, mas no node pode ficar confuso. Por tanto, o uso do Axius é uma maneira viável para o uso de protocolos http com nodejs

## Executando Promises em paralelo com Promise all
```js
import axios from 'axios'
Promise.all([           // promise.all executa 2 promises simultâneas em formato de array.
    axios.get('https://api.github.com/users/victorlabussiere')
    axios.get('https://api.github.com/users/victorlabussiere/repos')
])
    .then(responses => {    // Esse then so será executado após a resposta de todos as promises
        console.log(response[0].data.login) // victorlabussiere
        console.log(response[1].data.length) // 6
    })
    .catch(err => console.log(err.message)) // mensagem default de erro
```

## Async / Awayt

- Maneira de escrever promises
- Syntactic sugar ( maneira mais simples de fazer uma promise )

```js
// arquivo async-await.js
/*
Forma tradicional de se fazer uma promise
const promessa = new Promise( function (resolve, reject){
    return resolve || reject
})

execução da promise:
promessa
    .then(function(response){
        console.log(response)
    })
    .catch((erro) => console.log(erro))
    .finally(() => console.log('fim.'))

*/

const pro = new Promise((resolve, reject) => {                 // A base da promise se mantém

    setTimeout(() => {

        let n = parseInt(Math.random() * 10)
        console.log(n)
        n <= 5 ? resolve('êxito') : reject()
    }, 1000);
})

async function start() { // A mudançã começa no async, que faz ligação com alguma outra função
    try {
        const result = await pro // o alvo da ligação é feita com o await
        console.log(result)
    } catch (err) {
        console.log('Tente de novo')
    } finally {
        console.log('Fim')
    }
}

start() // isso signfica que a função start() apenas iniciará sua tarefa após a conclusão da função linkada, neste caso, a função pro, que é a função promise.

// todo o restante das características de uma promise podem ser executadas através do try / catch

console.log('Mensagens escritas após a invocação da promise para fins de comparação')
```

## Async / Await com fetch

```js
// arquivo fetch-async.js
// por padrão, uma função fetch tem o seguinte formato
var gitName = "https://api.github.com/users/victorlabussiere"
var url = "https://api.github.com/users/victorlabussiere"

fetch(gitName)
    .then( response => response.json()) // recebemos a resposta do fetch e aplicamos json()
    .then(data => console.log(data.name))
    .catch(err => err.message)

async function start (){
    const user = await fetch(url).json() // requeriment ao site com resposta traduzida pelo json()
    const repos = await fetch(user.repos_url).json() // requerimento em cima da primeria resposta ja traduzida pelo json
        // todos os processos passam por encapsulamento, fazendo o código ter um formato mais "síncrono".
    console.log(repos) 
}

start().catch(e => e.message) // O methodo async e await são promises, portanto, é possível encadear outros métodos de pormises como o catch e novos fetchs durante a execução da função.
```

## Async / Await com axios
- A ideia se repete com o uso da biblioteca axios, entretanto, não é necessário aplicar o método json() uma vez que o axios já retorna a reponse em js.

```js

import axios from 'axios'

async function fetchRepos(){
    const url = "https://api.github.com/users/victorlabussiere" 
    const user = await axios.get(url)
    const repos = await axios.get(user.data.repos_url)
    console.log(e)
}

fetchRepos()
```
