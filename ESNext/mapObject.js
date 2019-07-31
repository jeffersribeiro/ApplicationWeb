const tecnologias = new Map()
tecnologias.set('react', {
    framework: false
})
tecnologias.set('angular', {
    framework: false
})

// console.log(tecnologias.react) jeito errado.

//console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function ola() {
        return 'Sou uma Chave de Object'
    }, 'Função'],
    [{}, 'Object'],
    [123, 'numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.entries([0]));
console.log(chavesVariadas.has(122));
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123)) // o "true" aqui, quer dizer que ele conseguiu excluir a chave em si.
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
// TODO: Run this script urgent. 
