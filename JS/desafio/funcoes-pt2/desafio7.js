(function(){
    const numeros = [1,2,3,4,5,6,7,8]
    let somaPar = 0

    for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        
        somaPar += numeros[i]
    }
   
}
    console.log("A soma dos valores par da array é " + somaPar)
}())
