function Aula(nome, id){
    this.nome = nome
    this.id  = id
    }
const aula1 = new Aula('Bem vindo!!', 123)
const aula2 = new Aula('Até mais!!', 456)
console.log(aula1, aula2)

//simulano o operador new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo('Bem vindo!!', 123)
const aula4 = novo('até mais!!', 456)