function meuObejct(){}
console.log(meuObejct.prototype)

const obj1 = new meuObejct
const obj2 = new meuObejct
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObejct.prototype === obj1.__proto__)

console.log(obj1)
// Quando um Object é criando a partir da instancia de uma função o seu protopito padrão passa a ser a função
meuObejct.prototype.nome= 'Ânomino'
meuObejct.prototype.falar = function(){
console.log(`Bom dia meu nome é ${this.nome}`)
}

obj1.nome = 'Jefferson'
obj1.falar()


//criando um Object atravez da Notação literal
const obj3 = {}
obj3.__proto__ = meuObejct.prototype

obj3.nome = 'obj3'
obj3.falar()

//Resumindo Isso!!!

console.log((new meuObejct).__proto__ === meuObejct.prototype)
console.log(meuObejct.__proto__ === Function.prototype)
/**
 * assim como um Object "PAi" aponta para Object.protopyte por padrão caso não seja definido um protype para ele.
 * uma função tambem tem referencia padrão, A function minhaFuncao.prototype que aponta para Function.prototype por padrão.
 * MinhaFunction tem uma referencia padrão para <MinhaFunction>.__proto__ 
 */

 console.log(Function.prototype.__proto__ === Object.prototype)