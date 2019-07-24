const alunos = [
    {nome:'Maria', nota: 7.3, bolsista: false},
    {nome:'Jaão', nota: 9.3, bolsista: true},
    {nome:'Pedro', nota: 2.3, bolsista: false},
    {nome:'Ana', nota: 6.3, bolsista: true},
]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    const resultado = acumulador + atual
    console.log(`${(acumulador).toFixed()} + ${atual} = ${(resultado).toFixed(2)}`)
    return resultado
})