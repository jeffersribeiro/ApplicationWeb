/*
const nums = [1.3, 2.5, 3.2, 4.9, 5.6, 6.7, 7.0, 8.7, 9.4]
for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`numero: ${nums[x]}, posição X: ${x}`)
}
console.log(' //')

for (let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`numero: ${nums[y]}, posição X: ${y}`)
}
*/
const nums = [1.3, 2.5, 3.2, 4.9, 5.6, 6.7, 7.0, 8.7, 9.4]

externo: {
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) {
                break externo
            }
            console.log(`par : ${a},${b}`)
        }
    }
}