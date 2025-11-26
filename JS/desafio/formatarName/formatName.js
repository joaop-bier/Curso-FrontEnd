function formatarName(name) {

    let nameUser = name.trim()
    let positionOneName = nameUser.indexOf(" ")

    if (positionOneName === -1) {
        return nameUser
    }
    
    let oneName = nameUser.slice(0, positionOneName)
    let restName = nameUser.slice(positionOneName)

    nameFormat = `${restName} , ${oneName}`
    return nameFormat.trim()
}

console.log(formatarName("João Antonio Pedro"))
console.log(formatarName("Antonio Alves Bier"))
console.log(formatarName("Alves"))