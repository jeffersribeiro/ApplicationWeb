const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('fala anonimo! \r\n')
    process.exit()
}else{
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\r\n','')
      
        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}