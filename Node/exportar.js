console.log('1 ', module.exports === this)
console.log('2 ', module.exports === exports)
console.log('3 ', this === exports)
console.log('4 ', '\r')

this.a  = 1
exports.b  = 2
module.exports.c = 3

exports = null
console.log('5 ', module.exports)
console.log('6 ', this)
console.log('7 ', exports)

exports = {
    nome:'jefferson'
}

console.log('8 ', exports)

module.exports = {
    publico: true
}
