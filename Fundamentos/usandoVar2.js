/*
var numero = 1

{
    let numero = 2
    console.log(`O valor dentro de das chaves é: ${numero}`)
}

console.log(`O valor fora de das chaves é: ${numero}`)

while (numero > 10) {
    console.log(numero)
    numero++
}
for (n = 0; n < n; n++) {
    console.log(n)
}
do {
    console.log('lado do Doo')
    console.log(typeof numero)
}
while (numero = 0) {
    console.log('lado do whileee!!')
    console.log(numero)
}

for (var n = 0; n < 3; n++) {
    console.log(n)
}
console.log('valor 1 ' + n)

for (let n = 0; n < 3; n++) {
    console.log(n)
}
console.log('valor 2 ' + n)

*/
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()