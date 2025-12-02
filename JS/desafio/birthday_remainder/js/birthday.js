function quantoFaltaPara(m, d) {
    let dateAtual = new Date() // Data Atual
    let yearAtual = dateAtual.getFullYear() // Ano Atual
    let monthAtual = (dateAtual.getMonth() + 1) // Mês Atual
    let dayAtual = dateAtual.getDate()// Dia Atual

    let dateNiver = new Date(yearAtual, m - 1, d) //Dia do Aniversário
    let monthNiver = (dateNiver.getMonth() + 1) // Mês do aniversário
    let dayNiver = dateNiver.getDate() // Dia do Aniversário
    dateNiver.setHours(0, 0, 0, 0); // Zerando horas,minutos,segundos e milisegundos


    //Se o o mês Atual for maior que o mês do aniversário, somar mais um no yearAtual ou o dia também
   if(monthAtual > monthNiver || (monthAtual === monthNiver && dayAtual > dayNiver)){
        dateNiver.setFullYear(yearAtual += 1) 
   }

    let contRemainder = (dateNiver.getTime() - dateAtual.getTime()) // Calculando o tempo restante por aniversário(milisegundos)
    let daysRemainder = Math.ceil((contRemainder / 86400000)) // dividindo a quantidade restante com o valor de milisegundos para dia

    return daysRemainder
}
