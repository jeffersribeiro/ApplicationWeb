const megaSena = []
for (i = 0; i < 6; i++) {
    function rand([min = 0, max = 1000]) {
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    const obj = [min, max] = [10, 45]
    megaSena.push(rand(obj))
}
console.log(megaSena)

function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = [min, max] = [10, 45]
console.log(rand(obj))
console.log(rand([0, 99]))