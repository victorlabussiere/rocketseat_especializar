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