let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");

let result = document.getElementById("sum-el");

function add() {
    let sum = parseInt(num1.value) + parseInt(num2.value);
    console.log(sum)
    result.textContent = "Result: " + sum 
}
function subtract() {
    let subtract = parseInt(num1.value) - parseInt(num2.value)
    console.log(subtract)
    result.textContent = "Result: " + subtract

}
function divide() {
    let divide = parseInt(num1.value) / parseInt(num2.value)
    console.log(divide)
    result.textContent = "Result: " + divide
}
function multiply() {
    let multiply = parseInt(num1.value) * parseInt(num2.value)
    console.log(multiply)
    result.textContent = "Result: " + multiply     
}
    