const pessoa = {
    saudacao: 'Bom diaa!!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const chamar  = pessoa.falar
chamar() //consfilito de paradigmas : funcional e OO(orientado a objeto)

//Neste segundo exemplo temos um resultado diferente com a chamada da função sem parenteses

const chamar2  = pessoa.falar() 
chamar2  

//Aqui temos o uso  do metod Bind()
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()