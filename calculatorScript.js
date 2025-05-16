const calculatorDisplay = document.querySelector("#display");




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


console.log(operate("+", 5, 6));
