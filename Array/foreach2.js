//meu jeito errado, porem Funciono.
//funciono mas totalmente errado..
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

Object.defineProperty( aprovados, 'forEach2',{ 
    value: function(){
        for(i in aprovados){
            console.log(aprovados[i])
        }
    }
})

aprovados.forEach2(function(nome, indice){
console.log(indice,nome,)
})


//jeito do prof e tambem o jeito certo.

Array.prototype.forEach2 = function(callback){
    for(let i = 0;  i < this.length; i++){
        callback(this[i], i, this)
    }
}
console.log('\n')

const aprovados2 = ['Agatha','Aldo','Daniel','Raquel']
aprovados2.forEach2(function(name){
console.log(name)
})