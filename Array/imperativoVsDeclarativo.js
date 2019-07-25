const alunos = [
    {nome:'João', nota: 7.9},
    {nome:'Maria', nota: 9.9}
]

//Imperativo
// o modo imperativo se concentra no como tem que ser feio.
let total1 = 0
for(let i = 0; i < alunos.length; i++){ total1 += alunos[i].nota }

console.log(total1/ alunos.length)

//Declarativo
// o modo declarativo se concentra no que de ser feito, que é o  oposto de Imperativo.

const getNota  = aluno => aluno.nota
const soma = (total, atual) => (total + atual) / alunos.length

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)
 