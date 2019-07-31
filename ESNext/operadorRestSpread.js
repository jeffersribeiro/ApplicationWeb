//operador ... rest(juntar/spread(espalhar))
//usar rest com parametro de função 

function total(...numeros){
    let total  = 0
    numeros.forEach(n => total += n)
    return total
}
console.log('total:',total(1,2,3,4,5,6))

//usar spread com Object
const funcionario = {nome: 'maria', salario: 12345.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['joão','Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal)