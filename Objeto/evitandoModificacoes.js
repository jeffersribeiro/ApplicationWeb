//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extencivel: ', Object.isExtensible(produto))//false
produto.nome = 'Borracha'
produto.descricao = 'Barracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa ={nome: 'Ana', idade: 35}
Object.seal(pessoa)
/**
 * com o Object.seal vc não pode adicioanr novos atributos, não pode excluir, 
 * sendo apenas possivel alterar o valor dos atributos ja existentes 
 */

 console.log('Selado: ', Object.isSealed(pessoa))//true
 pessoa.sobrenome = 'Ribeiro'
 delete pessoa.nome
pessoa.idade  = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
