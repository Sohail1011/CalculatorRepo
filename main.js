let displayValue = '';
let currentOperator = '';
let firstOperand = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function setOperator(operator) {
    if (firstOperand === '') {
        firstOperand = displayValue;
        displayValue = '';
        currentOperator = operator;
    } else {

    }
}

function calculateResult() {
    let result;
    const secondOperand = displayValue;

    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (secondOperand === '0') {
                document.getElementById('display').value = 'Error';
                displayValue = '';
                return;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    displayValue = result.toString();
    firstOperand = '';
    currentOperator = '';
}