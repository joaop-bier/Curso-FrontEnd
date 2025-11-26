/*

Exercício 5 — find() e findIndex()

Crie um array de objetos representando produtos, com nome e preço.
Use find() para encontrar o primeiro produto com preço acima de 50,
e findIndex() para descobrir em qual posição ele está no array.

*/

let produtos = [
    { nome : "Caneta", preco : 2.50 },
    { nome : "Chocolate Prime 55kg", preco : 88.55}
]

let searchBigger50 = produtos.find(function(el){
    return el.preco > 50
})

let indexBigger50 = produtos.findIndex(function(el){
    return el.preco > 50;
});

console.log(searchBigger50)
console.log(indexBigger50)
