let numberPhone = "99856-1895"
let numberPhone2 = "1234-6784"

function numbersmascarados(phone){
    let numbersEscondidos = phone.slice(1,5)
    let position = phone.indexOf(numbersEscondidos)
    phone = [...phone]

    for(position; position <= 6; position++){
        if(isNaN(phone[position])){
            continue
        }
        phone[position] = "*"
    }

    phone = phone.join("")
    return console.log(phone)
}

numbersmascarados(numberPhone)
numbersmascarados(numberPhone2)