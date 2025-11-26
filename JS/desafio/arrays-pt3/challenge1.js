const numeros = [1,3,4,7,1,3,4,7,6,6,8,8]
/* const numbersUnicos = [1,3,4,7] */

let numbersUnicos = numeros.reduce(function(acumuletNumbers,el){
    if(!acumuletNumbers.includes(el)){
        acumuletNumbers.push(el)
    }

    return acumuletNumbers
},[])

console.log(numbersUnicos)