 const nums = [1,2,3,4,5,6]

 const soma10 = e => e + 10
 const triplo = e => e * 3
 const paraDinheiro = e => `R$: ${parseFloat(e).toFixed(2).replace('.',',')}`
    
const recebe = nums.map(triplo).map(soma10).map(paraDinheiro)
console.log(recebe)