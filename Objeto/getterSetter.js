/*
const sequencia = {
    _valor: 1, //convenção, outro programador deve respeitar  o (underline) e acessar o valor de _valor ou passar o mesmo atravez do valor sem (underline)
    get getValor() {
        return this._valor++ 
    },
    set setValor(valorFinal){
        if(valorFinal > this._valor){
            this._valor = valorFinal
        }
    }
}
sequencia.setValor = 100
console.log(sequencia.getValor,sequencia.getValor)

//ele ignorara um valor mais baixo que o primeiro e continara a somar o valor definido da primera vez
sequencia.setValor = 50
console.log(sequencia.getValor,sequencia.getValor)

*/
const sequencia1 = {
    _valor: 1,
    get valor() {
        return this._valor ++ 
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia1.valor,sequencia1.valor)
