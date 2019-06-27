var readline = require('readline');
var resp = [];

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
for (i = 0; i >= 10; i++) {
    leitor.question("Qual módulo pra ler dados no node.js?\n", function(answer) {
        resp.push(answer);
        console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
        console.log(resp)
    });
    leitor.close()
}