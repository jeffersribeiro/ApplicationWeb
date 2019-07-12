const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    modelo: undefined,
    aceleraMais(delta){
        if(this.velocidadeAtual += delta <= this.velocidadeMaxima){
            this.velocidadeAtual += delta
        }else{
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status(){
        return `${this.modelo}: ${this.velocidadeAtual}km/h de ${this.velocidadeMaxima}km/h`
    }
}

const ferrari ={
    modelo: 'F40',
    velocidadeMaxima: 324, // Shadowing (sombreamento)
}
const volvo  ={
    modelo: 'V40',
    status(){
       return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log('Ferrari:' ,ferrari)
console.log('volvo:' ,volvo)

ferrari.aceleraMais(123)

console.log(ferrari.status())
volvo.aceleraMais(321)
carro.aceleraMais(123)
console.log(carro.status())
console.log(volvo.status())