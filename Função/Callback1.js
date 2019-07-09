const fabricantes  = ['Mercedes','Audi','Chevrolet']

function callback (marcas,indece){
    console.log(`${indece + 1}. ${marcas}`)
}
fabricantes.forEach(callback)