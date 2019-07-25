Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i ; i < this.length; i++){
        acumulador = callback(acumulador, this[i],i,this)
    }
    return acumulador
}
const soma = (soma, valor) => soma + valor
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums.reduce(soma))