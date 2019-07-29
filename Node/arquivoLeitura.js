const fs = require('fs')
const caminho = __dirname + '/define.json'
/*
//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('dentro da função...')
    console.log(config['index.js'])
})
//sincrono...
const config = require('./define.json')
console.log(config['index.js'])
*/

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('dentro da Pasta...')
    console.log(arquivos)
})
