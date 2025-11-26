function sum(){
    let arrayNumbers = Array.from(arguments)
    
    if(arrayNumbers.length === 1){
        arrayNumbers = arguments[0]
    }

    const calcSum = arrayNumbers.reduce(function(acumulador,el){
        return acumulador += el
    },0)

    return calcSum
}

function average(){
    let arrayNumbers = Array.from(arguments)

    if(arrayNumbers.length === 1){
        arrayNumbers = arguments[0]
    }

    const calcAverage = arrayNumbers.reduce(function(acumulador,el){
        return acumulador += el / arrayNumbers.length
    },0)

    return calcAverage
}

console.log("Sum: \n")
console.log(sum(1,6,90,100))
console.log(sum([24,3,2,1]))
console.log("\n----------")

console.log("Average: \n")
console.log(average(2,10,3,6.5))
console.log(average(5,3,8,9))
console.log(average([24,3,2,1]))
console.log("\n----------")

