Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i< this.length; i++ ){
        if(callback(this[i],i, this )){
            newArray.push(this[i] )
        }
    }
    return newArray

}

const produto = [
    {nome:'NoteBook', preco: 2499, fragil:true },
    {nome:'iPad Pro', preco: 4199, fragil: true},
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de Plastico', preco: 18.99 , fragil: false}
]

const fragil = p => p.fragil  == true
const preco = p => p.preco >= 2300

console.log(produto.filter2(fragil).filter2(preco))
