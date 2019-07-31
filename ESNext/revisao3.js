//ES8 Object.values/Object.entries
const obj = {a:1 ,b :2 , c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj)) // um array com arrays dentro e chamdo matriz
console.log(Object.keys(obj))

//Melhorias na Notação litaral

//Antes
const nome1 = 'Carla'
const pessoa1 = {
    nome: nome1,
    Ola: function(){
        return `Ola ${this.nome}!!`
    }
} 
console.log(pessoa1.Ola(),'\n')

//Agora
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return `Ola ${this.nome}!!`
    }
}
console.log(`${pessoa.ola()}`)

//Class

class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())