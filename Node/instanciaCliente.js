const contadorA = require('./instanciaNova')()
const contadorB = require('./instanciaNova')()

const contadorC = require('./instanciaUnica')
const contadorD = require('./instanciaUnica')

contadorA.inc()
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)