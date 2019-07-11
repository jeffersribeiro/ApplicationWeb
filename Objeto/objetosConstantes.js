/**
 * constante pessoa Aponta para um endereço na memoria
 * e este enreço aponta para o Object {...}
 * EX:. pessoa -> 123 -> {nome: 'João'}
*/
const pessoa  = {nome: 'João'}
pessoa.nome  = 'Pedro'
console.log(pessoa.nome)

//pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}
//aqui voce tentou fazer com que acost apontasse para outro endereço na memoria e isso geraria um erro pois não é possivel que uma const 
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

//criando um Object Imultavel desde o inicio

const pessoaConstante = Object.freeze({
    Nome: 'Jefferson',
    sobrenome: 'Ribeiro',
    enredeco: {
        rua: 'Rua Abs',
        numero: 26
    }
})

console.log(pessoaConstante)
//não vai.!!
pessoaConstante.Nome = 'João'

const obj  = JSON.parse('{"nome":"Jefferson"}')
console.log(obj.nome)