const notas = [7, 8, 9, 10]

for (let i in notas) {
    console.log(`Index: ${i}, Notas: ${notas[i]}`)
}

const pessoa = {
    Nome: 'Ana',
    Sobrenome: 'ribeiro',
    Idade: '32',
    Peso: 65.2
}
for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}