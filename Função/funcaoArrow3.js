let comparaComthis  = function(params){
console.log(this === params)
}
comparaComthis(global)

let comparaComthisArrow = (params) =>{
     console.log('This aponta para o Modulo: ',params === this)
}
const obj  = {}

comparaComthisArrow(globalThis)
comparaComthisArrow(module.exports) // O this de uma Arrow Function aponta para o modulo dentro do node
comparaComthisArrow = comparaComthisArrow.bind(obj) //tentando mudar a referencia do this com a function bind()
comparaComthisArrow(obj)// resultado é false pois a renferencia do this de uma Arrow function continua sendo o seu modulo dentro no node.

comparaComthis = comparaComthis.bind(obj)

comparaComthis(globalThis)

