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

function soma(a = 2, b = 3) {
    return a + b
}
console.log(soma())