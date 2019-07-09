let dobro = function(a){
    return console.log(2 * a)
}
dobro(2)

let triplo = a => console.log(3 * a)
triplo(3)

let ola  = () => 'Olaa'

ola = _ => 'Olaa'//possui params


ola = _ => {
    return  _ //retorna o params
}
console.log(ola('Parametro Estranho'))