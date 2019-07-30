//let e const
{
    var a = 'escopo global'
    let b = 'escopo de bloco'
    
    console.log(b)
}
console.log(a)

//Destruturing.
//pora man IPC².

const [l, e, ...tras] = 'Escola cod3r'
console.log(l, e, tras)

const [x, , y] = [1,2,3]
console.log(x, y)

const array = ['index 1', 'index 2','index 3']
const [dst1, ,dst2] = array
console.log(dst1, dst2)

const { nome: n , idade} = {nome:'jefferson', idade: 23, peso: 78.6}
console.log(n, idade)

const pessoa = {
    nome: 'Ana',
    idade: 19,
    peso: 65.5
}
const {nome, peso} = pessoa
console.log(nome, peso)