// Armazenando um afunção em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(1, 2)

// Armazenando uma função Arrow em uma variavel

const soma = (a, b) => a + b

console.log(soma(5, 2))

const imprimir = a => console.log(a)

imprimir('legal!!!')