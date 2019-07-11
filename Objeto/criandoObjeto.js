/*
//usanndo a notação literal
const ojb1 = {}


//Object em js
console.log(typeof Object, typeof new Object)

const obj2  = new Object
console.log(obj2)

//função construtora
function Produto(nome, preco, desc){
    this.nome  = nome
    this.getPrecoComdesconto = () =>{
        return preco *(1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook',4.555, 0.20)
console.log(p1.getPrecoComdesconto(), p2.getPrecoComdesconto())


function CriarFuncionario(nome, salarioBase, faltas){
    this.nome = nome
    this.getCalcularSalario = function(){
        return  salarioBase = salarioBase - (faltas * 0.20) 
    }
}
const pj1 = new CriarFuncionario('jefferson',1200.2,5)
console.log(pj1.getCalcularSalario())
*/

//função Factory
function CriarFuncionario(nome, salarioBase, faltas){
   return{
       nome,
       salarioBase,
       faltas,
       getSalario(){
           return ((salarioBase /30) * (30 - faltas)).toFixed(2)
       }
   }
}
const f1 = CriarFuncionario('jefferson',1200.2,5)
const f2 = CriarFuncionario('Maria',3200.2,0)
console.log(f1.getSalario())
console.log(f2.getSalario())

//atravez do metodo Object.create()
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

/*
var btn  = document.getElementById('teste123')

btn.onclick = function(){
$.getJSON('./Objeto/change-the-color-of-text.json', function(err, data) {
    if (err !== null) {
      console.log('Ocorreu um erro' + err);
    } else {
        console.log("chegou aqui!")
      console.log(data);
    }
  });
}
*/
