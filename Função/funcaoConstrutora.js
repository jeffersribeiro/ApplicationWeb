
function Carro (velocidadeMaxima = 200, delta  = 5){
    //atributo privado
    let velocidadeAtual = 0
   
    //metodo publico
    this.acelerar = function(){ 

        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+= delta
        }  else{
            velocidadeAtual = velocidadeMaxima
        }     
    }
    //metodo publico 
    this.getVelidadeAtual = function(){
        return velocidadeAtual
    }
    this.aceleracao = function(ac){
        for(i = 1;i <= ac; i++ ){
            this.acelerar()
        }
    }
}

const uno = new Carro
uno.aceleracao(2)
console.log(uno.getVelidadeAtual())

const Ferrari  = new Carro(350, 20)
Ferrari.aceleracao(2)
console.log(Ferrari.getVelidadeAtual())


/*
const Teste = function(){
    
    this.result =  function(a ,b){
        return a + b
    } 
}
const soma  = new Teste
const result =  soma.result(2,5)
console.log(result)
*/
