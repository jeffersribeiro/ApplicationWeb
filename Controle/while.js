function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao = 10
do {
    console.log(opcao)
}
while (opcao == 1) {
    opcao = getInteiroAleatorio(1, 10)
    console.log(`A opção escolhida Foi: ${opcao}`)
}
console.log('Até a proxima') 