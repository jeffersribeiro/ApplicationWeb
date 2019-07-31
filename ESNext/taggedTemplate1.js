// Tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log('1 - ',partes)
    console.log('1 - ',valores)
    return 'Outra String'
}

const aluno  = 'Gui'
const situacao = 'Aprovado'
console.log(tag `2 - ${aluno} esta  2 -${situacao}2 -`)