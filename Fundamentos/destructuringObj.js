// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)

//mudando o nome

const { nome: n, idade: i } = pessoa

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { sobrenome = true, humor = null } = pessoa
console.log(sobrenome, humor)
    //teste com arrow function.
console.log(n, i)

const Pessoa2 = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    },
    Teste: function(teste) {
        this.teste2 = console.log(teste)
    }
}
const valor = Pessoa2.Teste('Jeferson')