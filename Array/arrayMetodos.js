const pilotos = ['Vetel','Alonso','Raikkonen', 'Massa']
pilotos.pop() // massa quebrou  ocarro de NOVO!!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista de Array
console.log(pilotos)

pilotos.unshift('Hamilton') ///adicona ao inicio da lista
console.log(pilotos)

//splice() pode tnanto remover qunanto adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

pilotos.splice(3,1) //massa quebrou novamente
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //retorna um novo array

//o parametro passado para o metodo slice() diz para ele a partir de qual posição(indice) ele deve partir e retorna um novo Array.
console.log(algunsPilotos)

algunsPilotos1 = pilotos.slice(0,4) //ele vai do indice 0 ate o indice 4 MAS não adiciona o indice 4 (Vai enteder)
console.log(algunsPilotos1)
console.log(algunsPilotos1)