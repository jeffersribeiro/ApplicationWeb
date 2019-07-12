console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.fist = function(){
    return this[0]
}

const array = [123,465,798]
console.log(array.fist())

//NÂO FAÇA ISSO!!! 
// String.prototype.toString = function(){
//     return 'Lascou tudo !!!'
// }
// console.log('Escola cod3r'.reverse())
