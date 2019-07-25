const filhas = ['Maria','Ana']
const filhos = ['Jose','pedro']
const todos = filhos.concat(filhas,'Opcional: passar algo a ser concatenado')

console.log(todos)

// Observe que o array filho só foi alterado naquele momento.
// Apos o uso do metodo concat() ele vltou ao normal. 
console.log(filhos.concat(filhas))
console.log(filhos)
console.log([].concat([1 ,2],[3, 4], 5, [[9, 10], 8])) //apesar de concatenar ele extriu o array de um nivel abaixo.
// apesar de serem em ordem numericos ,ele não, altera a ordem. dos parametros passados.
console.log(['a','b'].concat([1 ,2],[3, 4], 5, [[9, 10], 8]))