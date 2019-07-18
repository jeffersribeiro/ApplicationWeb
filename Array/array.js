/*
console.log(typeof Array, typeof new Array, typeof [])

let aprovados  = new Array('bia','Ana', 'Marcelo')
console.log(aprovados)

aprovados = ['Bia','Jose','Marcos']

console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abiaa') 
console.log(aprovados.length)
console.log(aprovados[4])
aprovados[9] = 'Maria'
console.log(aprovados[9])
console.log(aprovados.length)
console.log(aprovados)

console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
//achei que os valores 'Bruna e Carlos' 
//seriam adcionados aos indeces de Array que se encontravam vazios mas isso não aoncteceu
aprovados.push('Bruna','Carlos')
console.log(aprovados)
delete aprovados[1]
console.log(aprovados)
//o metodo sort() não arrumou o array apos ser deletado
aprovados.sort()
*/

//usando o metodo splice()

let aprovados2 = ['carlos','Marcelo','Paula','Jefferson']
aprovados2.splice(0,3)
console.log(aprovados2)
