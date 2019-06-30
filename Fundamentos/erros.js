function imprimirErro(erro) {

    //throw new Error('Opaa, Algo Aconteceu!! º_º')
    //throw 10
    //throw true
    //recebendo um Object
    throw {
        ider: erro.id,
        msgen: erro.msgn,
        dater: new Date
    }
}
const ogb = { id: 45, msgn: 'Opss ' }

function imprimirNomeGripado(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        console.log('teste: ' + imprimirErro(ogb))
    } finally {
        console.log('Finnaly')
    }

}
const obj = { nome: 'jeferson' }
imprimirNomeGripado(obj)

/*
const teste = {}
teste.nome = 'jefferson'
const { nome: n } = teste

try {
    n = 'luiz'
} catch (e) {

    console.log(`Opaa, algo deu errado !!\n ${Date()}`)
} finally {
    console.log(`O nome Ainda continua: ${n}`)
}
*/