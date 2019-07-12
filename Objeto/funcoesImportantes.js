/*
const pessoa ={
    nome: 'rebecca',
    idade: 2,
    peso: 13
}

//refletion
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
Object.keys(pessoa)
console.log(pessoa)

//Object.assign (ECMAscript 2015)
const dest  = {a: 1}
const o1 = {b:2}
const o2 = {c:3, a:4}
Object.assign(dest, o1, o2)
console.log(dest)
*/
const des = ['valo11','bc','cd']
var [,,teste] = des
 console.log(teste)
const obj = {
    ab:13,
    bc:23
}
const {ab:a} = obj
console.log(a)