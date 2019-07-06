//Função em JS pe Fist-Class Object (Citizens)
//Higher-Order Function

//declarando uma função de forma literal
function func1(n1, n2) {
    return result = n1 + n2;
};
console.log(func1(2, 2));

//armazenando umafunçao em uma variavel
const func2 = function(){
   return console.log('Olaa')
}
func2()

//passando uma função como parametro
function func3(func4){
   return func4()
}
func3(function(){console.log('Opaaa')})

//Armazanando uma função em um Array
const array = [function(txt){return console.log(txt) },func1,func2]
array[0]('Sou uma função dntro de um Array')

//Aramazenando dentro de um Object

const obj ={}
obj.fala = function(){return 'Sou uma função dntro de um Object'}

console.log(obj.fala())

function soma(a,b){
    return function(c){
       return console.log(a+b+c)
    }
}
soma(2,2)(2)
// outra forma

const somaValores = soma(2,2)
somaValores(2)