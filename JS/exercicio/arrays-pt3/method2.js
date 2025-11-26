/*

Exercício 2 — forEach()

Crie um array com nomes de 5 pessoas.
Use forEach() para mostrar no console uma mensagem dizendo:
"Olá, [nome]!" para cada pessoa.

*/

let namesUsers = ["João", "Antonio", "Isabela", "Jonathan", "Natan"]

namesUsers.forEach(function(el){
    return console.log("Olá, " + el)
})