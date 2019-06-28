/*
const saudacao = 'Opa' // constexto lexico 1
function exec() {
    const saudacao = 'Falaaa!!' // constexto lexico 2 
    return saudacao
}

//Objeto são gurpos de pares de Name/Valor
const cliente = {
    nome: 'jeferson',
    idade: 23,
    peso: 85.25,
    endereco: {
        logradouro: 'Rua larazo',
        numero: 36,
    },
}
console.log(saudacao)
console.log(exec())
console.log(cliente.endereco)

//Notação ponto

console.log(typeof console)
console.log(Math.ceil(6.2))
console.log(Math.floor(6.2))
console.log(Math.min())

const obj1 = {}
obj1.nome = 'bola'

console.log(obj1)
*/

//Notação Ponto

function Obj(nome) {
    this.name = nome
    this.exec = () => console.log('Exec..')
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
const obj4 = new Obj()

console.log(obj2.name)
console.log(obj3.name)
obj4.exec()