const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome:'Rebecca',
        nota: 9.0
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome:'Roberto',
        nota: 7.9
    },{
        nome:'Ana',
        nota: 6.9
    }]
}]
const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas = escola.map(getNotasDaTurma)
console.log(notas)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback)) 
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) 