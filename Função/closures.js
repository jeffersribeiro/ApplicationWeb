//closure  é o escopo criado quando uma função  e decladara.
//e este escopo vai permitir a funcção e manipular variaves externas á função.

//contexto lexico em Acão!!

const x = 'global'
const y = 'local Y'
const z = 'local Z'

function Fora(){
    const x = 'local X'
    this.teste = function (){

        return `${x} + ${y} + ${z}`
    }
    return this.teste()
}
const minhaFuncao = new Fora
console.log(minhaFuncao.teste())
