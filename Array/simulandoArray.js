const quaseArray = {
    0:'Rafael',
    1:'Ana',
    2:'Bia'
}
Object.defineProperty(quaseArray,'toString',{
    value: function(){return Object.values(this)},
    enumerable: false,
    writable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael','Ana','Bia']
console.log(meuArray[0])

console.log(quaseArray.toString(), meuArray)