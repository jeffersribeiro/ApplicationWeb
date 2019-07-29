const url  = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

  const filtro1 = f => f.pais == 'China' 
  const filtro2 = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual 
  const filtro3 = f => f.genero == 'F'

axios.get(url).then(response =>{
    const functionarios =  response.data
    const menorSalario = functionarios
      .filter(filtro1)
      .filter(filtro3)
      .reduce(filtro2)
    console.log(menorSalario)
})