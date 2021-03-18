//FOCUS: SRP 
const display = document.querySelector(".cal-display");
let operation = null;
let firstNumber = null;
let secondNumber= null;

document.querySelectorAll(".number").forEach(numberButton => { 
    numberButton.addEventListener('click', () => { 
        const number = numberButton.textContent
        if (firstNumber === null) { 
            firstNumber = number; 
            display.textContent = firstNumber;
            return; 
        }
        if (firstNumber !== null&& operation== null&& secondNumber==null){
            firstNumber+=number;
            display.textContent=firstNumber;
            return
        }
       if (secondNumber === null && operation !== null) { 
            secondNumber = number; 
            display.textContent = secondNumber; 
            return; 
        }
        if (secondNumber!== null && operation !==null) {
            secondNumber += number
            display.textContent = secondNumber;
            return
        }
    })
})

document.querySelectorAll(".operation").forEach(operationButton => { 
    operationButton.addEventListener('click', () => { 
        const selectedOperation = operationButton.textContent; 
        if (operation === null && firstNumber !== null) { 
            operation = selectedOperation;
            return; 
        }
        else if(secondNumber!== null){
        const answer=calculate();
        firstNumber = answer;
        operation=selectedOperation
        secondNumber = null; 
        display.textContent = firstNumber; 
        return
        }
    })
})


document.querySelector(".equals")
.addEventListener("click", () => {

    
    if (firstNumber !== null && operation !== null && secondNumber !== null) { 
        const answer = calculate(); 
        firstNumber = answer;
        operation = null; 
        secondNumber = null; 
        display.textContent = firstNumber; 
    }
})


function calculate() { 
    
    switch (operation){
        
        case "+":
            return add();        
        case "-":
            return subtract();
        case "x":
            return multiply();
        case "÷":
            return divide();
    }
}


function add() { 
    return `${Number(firstNumber) + Number(secondNumber)}`; 
}
//TODO

function subtract() { 
    return `${Number(firstNumber) - Number(secondNumber)}`; 
}
//subtract 

function multiply() { 
    return `${Number(firstNumber) * Number(secondNumber)}`; 
}
//multiply 

function divide() { 
    return `${Number(firstNumber) / Number(secondNumber)}`; 
}
//divide


document.querySelector(".clear")
.addEventListener('click', ()=>{
    firstNumber = null;
    secondNumber = null;
    operation = null;
    display.textContent = "";
})
