require('./global')
console.log(globalThis.minhaApp.saudacao())
// ou assim
console.log(minhaApp.saudacao())
//tentando atribuir um novo valor ao atributo nome de minhaApp 
minhaApp.nome = 'Eitaaa!' 
console.log(minhaApp.nome)

/**
 * uma forma de imperir a mudança
 * de valores de atributos e usando o metodo Object.freeze()
 */