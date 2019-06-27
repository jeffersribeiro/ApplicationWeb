let valor // sem inicializacão
console.log(valor); //não Declarado

valor = null
    //console.log(valor.toString())//erro!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.25;
produto.estado = 'pago'
console.log(produto.preco)

produto.preco = undefined // evite fazer isso!!
console.log(!!produto.preco)
    //delete produto.preco para deletar uma chave de dentro de um Obj
console.log(produto)