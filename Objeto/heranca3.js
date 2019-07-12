const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome:{
    value: 'Bia', 
    writable: false, 
    enumerable: true
    }
})

console.log(filha2.nome)

filha2.nome = 'Carla' // ao criar um Object com o metodo .create() , o mesmo Object funciona como uma especie de Object.Freeze()
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.values(filha1))

for(let key in filha1){
console.log(key)
}
//<key> aqui é não é uma palavra revervada e sim o nome de uma variavel contadora (que percore o Object filha1).

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}