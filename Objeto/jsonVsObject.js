const obj = { a: 1, b: 2, c: 3, d:[], e:{}, soma(){ return this.a +this.b + this.c}}
console.log(obj)

//Como JSON é um formato textual apenas valores que podem ser convertidos em textos podem sofre o PARCE
//e com isso qualquer outro tipo de informação acaba se perdendo no processo de trocas de tipos.
//como foi o caso da function acima.

//converção para formato JSON
const obj2 = JSON.stringify(obj)
console.log(obj2)
//conversão para Object novamente
obj3 = JSON.parse(obj2)
console.log(obj3)
