 for (let letra of 'Cod3r') {
     console.log(letra)
 }

 console.log('assuntos : \n ')
 const assuntosEcma = ['Map', 'Set', 'Promise']
 //percorento o indice
 for (let i in assuntosEcma) {
     console.log(i)
 }
 console.log('\r')
 //perconrendo o Valor
 for (let i of assuntosEcma) {
     console.log(i)
 }
 console.log('\r')
 const assuntosMap = new Map([
     ['Map', {
         abordado: true
     }],
     ['Set', {
         abordado: true
     }],
     ['Promise', {
         abordado: false
     }]
 ])
 console.log('\r')
 for (let assunto of assuntosMap) {
     console.log(assunto)
 }
 console.log('\r')
 for (let chave of assuntosMap.keys()) {
     console.log(chave)
 }
 console.log('\r')
 for (let valor of assuntosMap.values()) {
     console.log(valor)
 }
 //NOTA: o for in não funciona com o Map.
 console.log('\r')

 for (let [chave, valor] of assuntosMap.entries()) {
     console.log(chave, valor)
 }

 const s  = new Set(['a','b','c'])
 for(let letra of s){
     console.log(letra)
 }