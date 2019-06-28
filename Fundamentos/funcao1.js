// sem retorno
function imprimirSoma(a, b) {
    console.log(a - b)
}
imprimirSoma(2, 3)
    //estranho
imprimirSoma(2, undefined)
    //Mais estranho
imprimirSoma(2, null)
    //teste
imprimirSoma(2, 2, 5, 3, 4, 2) // o Resto ele vai ignorar.
imprimirSoma(Infinity, Infinity)
imprimirSoma()
    //função com retorno
function soma(a = 0, b = 0) { //valor predefinido quando não se passa o valor
    return a + b
}
console.log(soma(2))

// função Arrow
const valor = (valor1, valor2) => result = valor1 + valor2

console.log(valor(2, 2))

//retorno implicito
console.log('Aqui!!')
const subtracao = (a, b) => a - b