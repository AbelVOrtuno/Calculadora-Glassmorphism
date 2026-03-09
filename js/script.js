/* Logica y funcionamiento */
let display = document.getElementById("display")
let history = document.getElementById("history")

function addToDisplay(value){

    if(display.innerText.length > 15){
        return
    }

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
        history.innerText = display.innerText + "="
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
/* Activa soporte de teclado */
document.addEventListener("keydown", function(event){

    event.preventDefault()

    let key = event.key
    if(!isNaN(key)){
        addToDisplay(key)
    }
    if(key === "+" || key === "-" || key ==="*" || key === "/"){
        addToDisplay(key)
    }
    if(key === "Enter"){
        calculate()
    }
    if(key === "Backspace"){
        deleteLast()
    }
    if(key === "Escape"){
        clearDisplay()
    }
    if(key === "."){
        addToDisplay(".")
    }
})
/* Limitar numeros muy largos */
