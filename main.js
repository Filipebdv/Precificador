let copyValue = document.getElementById("submit")
let resultPart
let result
let profit
let final
let storePart
let onlinePart

function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return "R$" + value
}


copyValue.addEventListener("click", function copyBox(){
    let checkBox = document.getElementById("copy").checked
    if(checkBox == true){
        copy = String(formatMoney(final))
        navigator.clipboard.writeText (copy)
    }
    console.log("Texto copiado")
})

function math()
{
    let quantity = Number(document.getElementById("productQuantity").value)
    let productValue = Number(document.getElementById("productValue").value)
    let percentage = Number(document.getElementById("percentage").value)
    
    if (quantity == 0){
        quantity = quantity + 1
        resultPart = productValue / quantity
        result = resultPart * percentage / (100)
        storePart = resultPart * 20 / (100)
        onlinePart = resultPart * (percentage - 20) / (100)
        final = resultPart + result
        profit = final - resultPart
    
        document.getElementById("resultPart").innerHTML = "Valor unitário: " + formatMoney(resultPart)
        document.getElementById("resultTotal").innerHTML = "Valor total do produto: " + formatMoney(final)
        document.getElementById("profit").innerHTML = "O lucro é de: " + formatMoney(profit)
        document.getElementById("store").innerHTML = formatMoney(storePart)
        document.getElementById("online").innerHTML = formatMoney(onlinePart)
    }
    else{
        resultPart = productValue / quantity
        result = resultPart * percentage / (100)
        storePart = resultPart * 20 / (100)
        onlinePart = resultPart * (percentage - 20) / (100)
        final = resultPart + result
        profit = final - resultPart
    
        document.getElementById("resultPart").innerHTML = "Valor unitário: " + formatMoney(resultPart)
        document.getElementById("resultTotal").innerHTML = "Valor total do produto: " + formatMoney(final)
        document.getElementById("profit").innerHTML = "O lucro é de: " + formatMoney(profit)
        document.getElementById("store").innerHTML = formatMoney(storePart)
        document.getElementById("online").innerHTML = formatMoney(onlinePart)
    }
}