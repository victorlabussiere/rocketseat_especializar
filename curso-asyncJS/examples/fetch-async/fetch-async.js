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