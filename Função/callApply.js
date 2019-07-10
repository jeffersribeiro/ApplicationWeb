function getPreco(imposto = 0 , moeda = 'EUR$'){
    return `${moeda} ${this.preco * (1 - this.desc) *(1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// bind é uma funcao que retorna outra função associado com a instancia passada no bind.

//console.log(getPreco.bind(produto)())


// console.log(bindedGetPreco())
// globalThis.preco = 20
// globalThis.desc = 0.1
//  console.log(getPreco())
console.log(produto.getPreco())

//usando  a função Call()
const carro  = {preco: 39000, desc: 0.3}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro ,0.2, 'USD$'))
console.log(getPreco.apply(carro ,[0.6, 'BRL$']))

const array = [0.12, 'BRL$', 0.5, 'JPY$']
console.log(getPreco.apply(carro ,array))