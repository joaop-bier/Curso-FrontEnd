const username = (function(){
    let name = String(prompt("Digite o seu nome de usuário: "))
    const userName = name

    return userName
})()

document.querySelector(".top-bar p").innerHTML += (`<b> ${username} </b>`)