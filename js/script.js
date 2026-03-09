/* Logica y funcionamiento */
let display = document.getElementById("display")

function addToDisplay(value){

    let lastChar = display.innerText.slice(-1)
    let operators = ["+","-","*","/"]

    if(operators.includes(lastChar) && operators.includes(value)){
        return
    }

    if(display.innerText === "0"){
        display.innerText = value
    }else{
        display.innerText += value
    }
}
function clearDisplay(){
    display.innerText = "0"
}
function calculate(){
    try{
        display.innerText = eval(display.innerText)
    }
    catch{
        display.innerText = "Error"
    }
}
/* Boton DEL o borrar */
function deleteLast(){
    display.innerText = display.innerText.slice(0,-1)

    if(display.innerText === ""){
        display.innerText ="0"
    }
}