const carro = {
    cor: 'vermelho',
    placa:'acb-452',
    marca:'Ferrari',
    condutores: [{
        nome:'jeferson',
        idade: 21,
    },{
        nome: 'alessandra',
        idade: 23
    }],
    calcularSeguro: function(){
        //...
    },
    proprietario:{
        nome:'marcos',
        endereco:{
            rua: 'lazaro',
            numero: 1000,
        }
    }
}

carro.proprietario.endereco = 12000
carro['proprietario']['nome'] = 'Alex'
delete carro.marca
carro.ano = 2019
