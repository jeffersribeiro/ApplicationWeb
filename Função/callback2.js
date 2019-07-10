//sem callback
const nota = [7,5,6,9,8,1]
const notasbaixas1 = []
for(i in nota){
    if(nota[i]<7){
        notasbaixas1.push(nota[i])
    }
}
console.log(notasbaixas1)

//com Callbakc
const notasbaixas2 = nota.filter( function(nota){
    return nota < 7
})
console.log(notasbaixas2)

const notasbaixas3 = nota.filter(nota => nota < 7)
console.log(notasbaixas3)

const resultadoDasNotas = nota => nota < 7
const notasbaixas4 = nota.filter(resultadoDasNotas)
console.log(notasbaixas4)


