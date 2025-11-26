function getNumberRandom(numberInicial, numberFinal, inteiro) {
    numberInicial = numberInicial
    numberFinal = numberFinal
    inteiro = inteiro

    if (typeof (numberInicial) != "number" || typeof (numberFinal) != "number" || (typeof(inteiro) != "boolean")) {
        throw new Error("é obrigatorio passar todos os parametros necessários!! : \n 1- parámetro(tipo Number) \n 2- parámetro(tipo Number) \n 3- parámetro(tipo boolean) \n")
    }

    let numRandom = ((Math.random(numberInicial,numberFinal) * numberFinal) + 1)

    if(inteiro == true){
        return parseInt(numRandom)
    }
    else if(inteiro == false){
        return numRandom
    }

}

console.log(getNumberRandom(0, 10, true))
console.log(getNumberRandom(0, 17, true))
console.log(getNumberRandom(0, 10, false))
console.log(getNumberRandom(0, 17, false))
console.log(getNumberRandom(0, false,5))

