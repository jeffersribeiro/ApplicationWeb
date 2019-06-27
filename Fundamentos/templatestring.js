const nome = 'Rebecca'
const concatenacao = 'Olá ' + nome + '!!' // jeito massante de se fazer!
const templatestring = `Olá ${nome}!!` // jeito Legal!

console.log(concatenacao, '\n', templatestring)

//expressoes..
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!!\n`)


const upper = function caixaAlta(texto) {
    return texto.toUpperCase()
}
console.log(`Ei... ${upper('cuidado')}!!`)