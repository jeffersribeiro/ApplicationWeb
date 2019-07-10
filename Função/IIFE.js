// IIFE  -> Immediately Invoked Function Expression

(function(){
    this.name;
    console.log(this === globalThis)
    console.log(this === module.exports)
    console.log('Será Executada Na hora ...')
    console.log('foge do escopo mais abrangente!')
})
()

const escopo  = function(){
    console.log(this === globalThis)
    console.log(this === module.exports)
}
escopo()

function escopo2 (){
    let valor;
    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === valor)
}
escopo2()
