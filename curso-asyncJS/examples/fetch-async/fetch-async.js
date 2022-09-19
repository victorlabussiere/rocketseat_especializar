// por padrão, uma função fetch tem o seguinte formato
var gitName = "https://api.github.com/users/victorlabussiere"
var url = "https://api.github.com/users/victorlabussiere"

fetch(gitName)
    .then( response => response.json()) // recebemos a resposta do fetch e aplicamos json()
    .then(data => console.log(data.name))
    .catch(err => err.message)

async function start (){
    const response = await fetch(url) // feito o requerimento
    const user = await response.json() // resposta traduzida
    const reposResponse = await fetch(user.repos_url) // feito novo requerimento em cima da resposta
    const repos = await reposResponse.json() // tradução da nova resposta
        // todos os processos passam por encapsulamento de forma sincrona onde cada etapa espera a resposta da anterior
    console.log(repos) 
}

start().catch(e => e.message)