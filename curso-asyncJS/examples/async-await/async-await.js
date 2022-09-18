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