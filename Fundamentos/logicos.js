/*
v AND v -> v
v AND f -> f
v AND ? -> f

v OR ? -> v
f OR v -> v
f OR f -> f

v XOR v -> f
v XOR f -> v
f XOR v -> v
f XOR f -> f

NOT v-> f
NOT f-> v

function compras(trabalho1, trabalho2) {
    const ComprarTv50 = trabalho1 && trabalho2
    const ComprarSorvete = trabalho1 || trabalho2
    const Comprartv32 = trabalho1 != trabalho2
    const manterSaudavel = !ComprarSorvete //operador Unario
    return { ComprarTv50, ComprarSorvete, Comprartv32, manterSaudavel } //Recurso ES2015, chave e valores são iguais
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
*/
function compra(trabalho1, trabalho2) {
    if (trabalho1 && trabalho2 === true) return 'vamos comprar TV de 50'
    else if (trabalho1 === false && trabalho2 === false) return 'vamos comprar Sorvete'
    else return 'vamos comprar TV de 32'
}
console.log(compra(true, false))