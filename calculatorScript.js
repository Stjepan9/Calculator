

const add = (x,y)=> x + y;
const subtract =(x,y) => x - y;
const divide = (x,y) => {
    if( y === 0) return "ERROR";
    return x / y;
};
const multiply = (x,y) => x * y;


let operator;
let x;
let y;

const operate = (operator, x, y) =>{
    switch(operator){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
};

const calculatorDisplay = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");

let displayValue = "";


digitButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayValue += button.textContent;
        calculatorDisplay.value = displayValue;
    });
});