//Factory function

function criarProduto(nome, preco, desconto){
    return {
        nome,
        preco,
        desconto
}
}
console.log(criarProduto('Notebook Asus',5999.90,0.1))
console.log(criarProduto('Notebook Dell',2600.20,0.3))