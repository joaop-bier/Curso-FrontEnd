/*

Crie um array com vários números.
Use every() para verificar se todos os números são positivos,
e some() para verificar se algum número é maior que 100.
Mostre o resultado no console.

*/

const numbers = [9,6,-1,50,200,300,-10,-50]

let verifposit = numbers.every(function(el){
    return el > 0    
})

let biggerThanEleven = numbers.some(function(el){
    return el > 100
}) 

console.log("Todos os números são positivos? : " + verifposit)
console.log("algum número é maior que 100? : " + biggerThanEleven)