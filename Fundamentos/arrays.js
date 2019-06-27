/*
const valores = [5,15,25,35]
const valores2 = []
valores[6] = 65;
valores[5] = 55;
console.log(typeof valores[4])
console.log(valores.length)

valores2[0] =  undefined
console.log(valores2[0])

valores.push(
    {
        id: 8,
        nome: 'jefferson'
    },
     null, Infinity, 'Teste', 10)
console.log(valores[7].nome)
*/
// como acessar um array que tem um Object dentro..
const valores = []
valores.push({
        id: 8,
        nome: 'jefferson'
    },
    null, Infinity, 'Teste', 10)

console.log(`O ID do Aluno é: ${valores[0].id}\ne o Nome: ${valores[0].nome}`)

console.log(valores.pop())
delete valores[2]
console.log(valores)