const soma  = function(x,y){
    return x + y
}
const imprimirResultado  = function (a, b, operacacao = soma) {
    console.log(operacacao(a,b))
}
imprimirResultado(4,6)
imprimirResultado(4,6, soma)
imprimirResultado(4,6, function (x,y){
    return x - y
})
imprimirResultado(4,6, (x,y) => x * y)

//Carai o professor foi  o bixão agora.

const pessoa ={
    nome(nome){ 
        console.log(nome)//Recurso no para se declarar uma função no ES2015
    }
}
const valor  = pessoa.nome('Alessandra')
valor
