const a = 1
const b = 2
const c =  3
const obj1 = {a, b, c}
console.log(obj1)

const nomeAttr = 'nota'
const valorAttr  = 7.98

const ojb2 = {}
ojb2[nomeAttr] = valorAttr
console.log(ojb2)

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //fomra padrão
    },
    function(){
        //nova forma adcionada ao ES2015
    }
}
console.log(obj5)