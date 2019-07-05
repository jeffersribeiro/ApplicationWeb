function randon(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

opcao = -1
do {
    opcao = randon(-1, 5)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1) {
    console.log('Até a proxima')
}