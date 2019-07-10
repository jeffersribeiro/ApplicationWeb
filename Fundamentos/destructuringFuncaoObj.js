function numero({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { min: 0, max: 99 }

console.log(`Opção 1: ${numero(obj)}`)
console.log("Opção 2: " + numero({}))
console.log(`Opção 3: ${numero({ min: 900, max: 999 })}`)
console.log("Opção 4: " + numero({}))

// const megaSena = []
// for (let i = 0; i < 6; i++) {
//     function rand({ min = 0, max = 100 }) {
//         const valor = Math.random() * (max - min) + min
//         return Math.floor(valor)
//     }
//     const obj = { max: 0, min: 123 }
//     megaSena.push(rand(obj))
// }
// console.log(megaSena)