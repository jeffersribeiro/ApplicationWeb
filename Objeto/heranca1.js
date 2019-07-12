const ferrari = {
modelo: 'f40',
velmax: 334
}

const volvo = {
    modelo: 'v40',
    velmax: 234 
}

console.log(ferrari.__proto__) // {}
console.log(volvo.__proto__)// {}

//verificação de igualdade
console.log(ferrari.__proto__ === Object.prototype)//true
console.log(volvo.__proto__ === Object.prototype) //true

console.log(Object.prototype.__proto__)// null

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto) // function, function
console.log(Object.prototype, meuObjeto.prototype)// {}, meuObjeto {}


//cadeia de prototipos

//conceito de sombreamento

const avo = {atrr1:'A'}
const pai = {__proto__:avo, atrr2: 'B'}
const filho = {__proto__:pai, atrr3:'C'}
console.log(filho.atrr1)// A
console.log(filho.atrr0)// undefined
console.log(filho.atrr0)// undefined

Object.prototype.atrr0 = 'Z' //não é recomendado, pois isso acessa o escopo global dos prototipos de Objetos


console.log(filho.atrr0)// Z
console.log(filho.atrr2, pai.atrr1)// B A
console.log(avo.atrr0, pai.atrr3)// Z undefined