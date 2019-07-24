const alunos = [
    {nome:'Maria', nota: 7, bolsista: true},
    {nome:'Jaão', nota: 9, bolsista: true},
    {nome:'Pedro', nota: 2, bolsista: false},
    {nome:'Ana', nota: 6, bolsista: true},
]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual, indice){
  return acumulador + atual
}) // pode-se pasar um valor inicial ao inal do fechamento de chave da funcção callback

console.log(resultado)