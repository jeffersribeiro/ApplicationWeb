/*
let isAtive = false;
console.log('\n', isAtive)

isAtive = true;
console.log('\n', isAtive)

isAtive = 1
    // resolvem para Verdadeiro
console.log('\n', !!isAtive) //negação Duas Vezes
console.log('\n', !!(isAtive = Infinity)) //numeros infinitos
console.log('\n', !!(isAtive = 1)) //atribuições
console.log('\n', !!(isAtive = true)) //atribuições
console.log('\n', !!(' ')) //espaços em branco 
console.log('\n', !!(-1)) //numeros negativos
console.log('\n', !!({})) //object
console.log('\n', !!([])) //Array
console.log('\n', !!('texto')) //textos

//resolvem para falso
console.log('\n', !!null) //valor null
console.log('\n', !!NaN) //valor null
console.log('\n', !!(isAtive = false)) //atribuições
console.log('\n', !!undefined) //valor null
console.log('\n', !!(isAtive = 0)) //atribução para zero
console.log('\n', !!('')) //vazio 
console.log('\n', !!0) //numero Zero
*/

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
console.log(nome == true ? 'Verdadeiro' : 'Falso')

con