const carrinho = [
 '{"nome": "Boracha" ,"preco": 3.45 }',
 '{"nome":"caderno", "preco": 13.90}',
 '{"nome":"kit de Lapis", "preco": 14.22}',
 '{"nome":"caneta", "preco": 7.50}',
]

const Produto = function(){

    this.adicionaProduto = function(produto, preco){
         carrinho.push(JSON.stringify({nome:produto, preco :preco}))
    }
    this.removeCarrinho = function(){
        return carrinho.pop()
    } 
    
    this.precoFinal = (result = 0) =>{
        const apenasPreco = produto => produto.preco
        const resultado = carrinho.map(JSON.parse).map(apenasPreco)
        for(i in resultado){
        result += resultado[i]
        }
        return result
    }
}
 const p = new Produto

 p.adicionaProduto('apontador',1.33)
 p.adicionaProduto('mochila',5.33)
 
 console.log(carrinho)
 console.log(p.precoFinal())
