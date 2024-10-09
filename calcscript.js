function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0) {
        return "Math error";
    }
    return a / b;
}

function operate(a, operator, b) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return;
    }
    return parseFloat(result.toFixed(2));
}

function clear(){
    firstNumber = '0';
    secondNumber = '0';
    operator = '';
    screenInput.value = firstNumber;
}

function checkEmptyValues(){
    if (operator === ''){
        return true;
    }
    return false;
}

function emptyValues(){
    firstNumber = '0';
    secondNumber = '0';
    operator = '';
}

function handleButton(e){
    const target = e.target;
    if (target.classList.contains('clear')){
        clear();
    }else if (target.classList.contains('operator')) {
        if (firstNumber !== '0' && operator !== '') {
            screenInput.value = operate(Number(firstNumber), operator, Number(secondNumber))
            if (screenInput.value === 'Math error'){
                emptyValues();
            } else {
                emptyValues();
                firstNumber = String(screenInput.value);
            }  
        } 
        console.log('Operator button clicked:', target.value);
        operator = target.value;
        console.log(typeof(operator))
    } else if (target.classList.contains('calculate')){
        if (!checkEmptyValues()) {
            screenInput.value = operate(Number(firstNumber), operator, Number(secondNumber));
            if (screenInput.value === 'Math error'){
                emptyValues();
            } else {
                emptyValues();
                firstNumber = String(screenInput.value);
            }  
        }
    }else if (operator === '') {
        console.log('First numbers clicked:', target.value);
        if (firstNumber === '0') {
            if (target.classList.contains('decimal') && !firstNumber.includes('.')) {
                firstNumber += target.value;
            } else {
                firstNumber = target.value;
            }
        } else if ((target.classList.contains('decimal') && !firstNumber.includes('.'))) {
            firstNumber += target.value;
        }  else if (firstNumber.includes('.') && !target.classList.contains('decimal')){
            firstNumber += target.value;
        } else if (!target.classList.contains('decimal')) {
            firstNumber += target.value;
        }
        screenInput.value = firstNumber;
    } else { 
        console.log('Second numbers clicked:', target.value);
        if (secondNumber === '0') {
            if (target.classList.contains('decimal') && !secondNumber.includes('.')) {
                secondNumber += target.value;
            } else {
                secondNumber = target.value;
            }
        } else if ((target.classList.contains('decimal') && !secondNumber.includes('.'))) {
            secondNumber += target.value;
        }  else if (secondNumber.includes('.') && !target.classList.contains('decimal')){
            secondNumber += target.value;
        } else if (!target.classList.contains('decimal')){
            secondNumber += target.value;
        }
        screenInput.value = secondNumber;
    }
}


let firstNumber = '0', secondNumber = '0', operator = '';

let numButtons = document.querySelectorAll(".btn");

numButtons.forEach(button => {
    button.addEventListener("click", handleButton);
});

let screenInput = document.querySelector("input");

