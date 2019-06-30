const restultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
try {
    console.log('teste 1')
    console.log(restultado(7.2))
} catch {
    console.log('Error')
}