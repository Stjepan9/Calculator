

const add = (x,y)=> x + y;
const subtract =(x,y) => x - y;
const divide = (x,y) => {
    if( y === 0) return "ERROR";
    return x / y;
};
const multiply = (x,y) => x * y;


let currentOperator = null;
let firstNumber = 0;
let secondNumber = 0;
let resetDisplay = false;

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


 let digits = digitButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayValue += button.textContent;
        calculatorDisplay.value = displayValue;
        calculatorDisplay.style.color = "white";
        calculatorDisplay.style.textAlign ="right";
    });
});


const operatorButtons = document.querySelectorAll(".operator");

 operatorButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{

        if(currentOperator !== null) return;

        firstNumber = parseFloat(displayValue);
        currentOperator = button.textContent;
        resetDisplay = true;
    });
});