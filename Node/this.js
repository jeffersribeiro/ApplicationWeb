/*
console.log(this === globalThis)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('dentro e um Função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === globalThis)
    this.perigo = 'Cuidado, Escopo GLOBAL!!'
}
logThis()
console.log(globalThis.perigo)
console.log(globalThis.perigo)
*/

//const Escopo = 'CONST'
//let Escopo = 'LET'
globalThis.Escopo = 'GlobalThis' 
this.Escopo = 'THIS'
this.Escopo = 'THIS 2'
var Escopo = 'Var'

console.log(globalThis.Escopo)
console.log(this.Escopo)