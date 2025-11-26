const listNumbers = [4,8,5,4,3]
const listNumbers2 = [10,50,30,40]
const listNumbers3 = listNumbers.concat(listNumbers2)

function sum(){
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }

    return soma;
}

function media(){
    let acumulador = 0
    let average = 0

    for(let i = 0; i < arguments.length; i++){
        acumulador += arguments[i]
    }

    average = acumulador / arguments.length

    return average.toFixed(2)
}


console.log("Teste de soma: ")

console.log(sum(3,6,7))
console.log(sum(...listNumbers))

listNumbers.push(10,88,20)

console.log(sum(...listNumbers))
console.log(sum(...listNumbers2))

console.log(sum(...listNumbers3))

console.log("----------------------")



console.log("Teste de avarege: ")

console.log(media(3,6,7))
console.log(media(...listNumbers))

listNumbers.push(10,88,20)

console.log(media(...listNumbers))
console.log(media(...listNumbers2))

console.log(media(...listNumbers3))

console.log("----------------------")