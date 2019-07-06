function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(5,2.5,2,5.3))
console.log(soma(5,2))
console.log(soma(5,2.5,2,'teste'))
console.log(soma('5,2.5,2,','teste'))