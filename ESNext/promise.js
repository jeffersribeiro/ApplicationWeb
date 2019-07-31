function falarDepoisDe(segundos, frase) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //não da para passar mais e um parametro 
        }, segundos * 1000)
    })
}


falarDepoisDe(3, 'fala Legal!')
    .then(frase => frase.concat('!?!?!'))
    .then(outraFase => console.log(outraFase))
    .catch(e => console.log(e)) // catch pose ser chamado apenas uma vez!!!