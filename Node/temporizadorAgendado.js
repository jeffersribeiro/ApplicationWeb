const schedule  = require('node-schedule')
console.log('executando...')

const tarefa1 = schedule.scheduleJob(" * * * * * *", function(){
    console.log('executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1 ...')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarfa 2 ...', new Date().getSeconds() )
})