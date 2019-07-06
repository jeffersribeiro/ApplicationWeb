function area(largura, altura){
const area = largura * altura
    if(area > 20){
        console.log(`Area Maior que o permitido: ${area} m²`)
    }else {
        return area
    }
}
console.log(area(2,2))
console.log(area(2,5, 12,30))
console.log(area())
console.log(area(2))
console.log(area(5,5))