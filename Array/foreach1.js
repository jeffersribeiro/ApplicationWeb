const aprovados  = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(n, i){
console.log(`${i ++} - ${n}`)
})
console.log('\n')   
for(i in aprovados){ console.log(aprovados[i])}

console.log('\n')
//usando o forEach
aprovados.forEach(nome => console.log(`Nomes: ${nome}`))

console.log('\n')
console.log('\n')

const exibirAprovados = (aprovados) => console.log(aprovados)
aprovados.forEach(exibirAprovados)

 
