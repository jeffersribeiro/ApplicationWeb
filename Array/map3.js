Array.prototype.map2 = function(callback){
     for(i in arguments){
        arguments[i]
        return callback(this[i],i ,this)
    }
}
const carrinho = [
    '{"nome": "Boracha" ,"preco": 3.45 }',
    '{"nome":"caderno", "preco": 13.90}',
    '{"nome":"kit de Lapis", "preco": 14.22}',
    '{"nome":"caneta", "preco": 7.50}',
   ]
   console.log(carrinho.map2(JSON.parse))