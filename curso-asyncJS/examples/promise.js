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