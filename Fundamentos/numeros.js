//Neste exercicio temos os tipos de Variaverias e como expecificar o seu tipo
/*
const valor1 = Number(0)
const valor2 = Number(2)
const valor3 = Boolean(2)
const valor5 = Array(2, 2, 2, 2)
const valor6 = String(2344)

const avaliacao1 = 8.2456
const avaliacao2 = 4.68566

const total = avaliacao1 * valor1 + valor2 * avaliacao2
const media = total / (valor1 + valor2)

console.log(media.toFixed())
console.log(`${media+' e '+ total}`)
console.log(typeof media, typeof total)

// aqui temos o uso do Object MAth e seus metodos

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(1))
console.log(typeof Math)

console.log(Math.floor(media))

let array = [];
const valor1 = 4;
const valor2 = 2
array.push(valor1, valor2)
array.push(2)
let result = array[0] + array[2]
console.log(result)

const valor = '5,5'
let array = valor.split(',')

var result = Number(array[0]) + Number(array[1])
console.log(result)


*/
//pode ser assim.
let valor = 'Ana, Maria , João'.split(',')
console.log(valor[0])
    //Ou assim
console.log('Ana, Maria, João'.split(',')[0])