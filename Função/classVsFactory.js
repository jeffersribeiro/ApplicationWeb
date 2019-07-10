class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
//instancia da classe Pessoa
const nome = new Pessoa('Jefferson')
nome.falar()

const criarPessoa  = nome =>{
    return{
        falar: ()  => console.log(`Meu nome é ${nome}`)
    } 
}
const pessoa  = criarPessoa('Ana')
pessoa.falar()

const Teste = function(nome){
    this.teste2 = function() {
        return console.log(nome)
    }
}
const teste3 = new Teste('Jefferson')
teste3.teste2()
