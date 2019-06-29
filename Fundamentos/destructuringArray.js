const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 20, 30, 40]
console.log(n1, n3, n5, n6)

// interresante porem não mto pratico e facil de leitura

const [, [, nota]] = [
    [5, 6],
    [9, 8, 7]
]
console.log(nota)