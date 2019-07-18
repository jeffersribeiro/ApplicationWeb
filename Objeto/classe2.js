class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}

class Filho extends Pai{
    constructor(nome){
        super('Silva', 'Reporter')
        this.nome = nome
    }
}

const avo = new Avo
avo.sobrenome ='Ribeiro'
console.log(avo) 

const pai = new Pai
console.log(pai)

const filho  = new Filho
console.log(filho)