; (function () {
    const hero_content = document.querySelector(".hero .hero-content")
    const date = hero_content.querySelector("span").textContent.trim() //pegando o valor de date

    let [dayEvent, timeEvent] = date.split(" ") //separando os valores da spanSaveDate
    let [day, month, year] = dayEvent.split("/") // separando os valores da dayEvent que tem / e atribuindo em day, month, year
    let [hour, min] = timeEvent.split("H") // Separando por hour e min 
    let saveTheDate = new Date(year, month - 1, day, hour, min) //data do save The date

    const pContRegressiva = document.createElement("p") // criando um elemento p
    hero_content.append(pContRegressiva) //Adicionando pContRegressiva em hero_content

    function timeRemainder() {
        let dateUser = new Date() // pegando a data atual

        let [dateEvent, dateAtual] = [saveTheDate.getTime(), dateUser.getTime()] // pegando os valores em timeStamp desde 1970

        let msRemainder = (dateEvent - dateAtual) // subtraindo os valores para ter o valor em millisegundos que faltam para a dataAtual

        if(msRemainder <= 0){
            clearInterval(intervalId)
            pContRegressiva.textContent = `Contagem Regressiva: 0 dias, 0 horas, 0 minutos, 0 segundos`
            return
        }
        // Dias
        let dayRemainder = parseInt(msRemainder / 86400000)
        let divionRemainder = parseInt(msRemainder % 86400000)

        // Horas
        let hourRemainder = parseInt(divionRemainder / 3600000)
        divionRemainder = divionRemainder % 3600000

        // Minutos
        let minRemainder = parseInt(divionRemainder / 60000)
        divionRemainder = divionRemainder % 60000

        // Segundos
        let segRemainder = parseInt(divionRemainder / 1000)

        pContRegressiva.textContent = `Contagem Regressiva: ${dayRemainder} dias, ${hourRemainder} horas, ${minRemainder} minutos, ${segRemainder} segundos` //texto de p
        
    }

    const intervalId = setInterval(function () {
        timeRemainder()
    }, 1000);

})()