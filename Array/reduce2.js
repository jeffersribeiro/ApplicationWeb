const alunos = [
    {nome:'Maria', nota: 2, bolsista: true},
    {nome:'João', nota: 9, bolsista: true},
    {nome:'Pedro', nota: 2, bolsista: false},
    {nome:'Ana', nota: 6, bolsista: false},
]

//Dessfio 1: Todos os alunos são Bolsistas?
const valorFinal = alunos.map(e => e.bolsista).reduce((nota, valor) => nota && valor)//false
console.log("Todos os alunos são Bolsistas?: "+valorFinal)

//Disafio 2: Algum desses tem bolsa?
const valorFinal2 = alunos.map(e => e.bolsista).reduce((nota, valor) => nota || valor)// true
console.log("algum desses tem bolsa?: "+valorFinal2)