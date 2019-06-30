let a = 3

global.a = 132

this.c = 465
this.d = false
this.e = 'teste'

console.log('variavel global a: ' + a)
    //global seria o aquivalente a  Window ,quando se esta trabalhando com a DOM(Document Object Model)
console.log('acesso ao Object global:' + global)
console.log(this)
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === global)
    //module.exports = {c: 465, d: false, e: 'teste'}

// criando uam varioalvel sem usar a palavra reversa : var ou let
abc = 3 // não faça isso em casa
console.log(global.abc)