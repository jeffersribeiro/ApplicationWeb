//Não aceita repetição/não indexada.
const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('Vasco')

console.log(times)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.delete('são paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Carlos', 'raquel'] //ele aceito a repetição de valores, porem usando o camelCase.
nomeSet = new Set(nomes)
console.log(nomeSet)