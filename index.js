const sign = document.querySelector('.container-2-content-sign-select');
const result = document.querySelector('.result')
const num1 = document.querySelector('.container-1-content-input')
const num2 = document.querySelector('.container-3-content-input')
console.log(num1);
// const resultTitle = 


const operation = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
}

const calculateData = {
    num1: '',
    num2: '',
    sign: '',
    result: '',
}

function sum(num1, num2) {
    return (+num1) + (+num2)
}
function subtract(num1, num2) {
    return (+num1) - (+num2)
}
function multiply(num1, num2) {
    return (+num1) * (+num2)
}
function divide(num1, num2) {
    return (+num1) / (+num2)
}

function calculate(num1, num2, sign) {
    switch (sign) {
        case operation.sum:
            calculate.result = String(sum(num1, num2))
            break;
        case operation.subtract:
            calculate.result = String(subtract(num1, num2))
            break;
        case operation.multiply:
            calculate.result = String(multiply(num1, num2))
            break;
        case operation.divide:
            calculate.result = String(divide(num1, num2))
            break;
    }
}



num1.addEventListener('keyup', function (event) {
    calculateData.num1 = event.target.value
    console.log(calculateData.num1);
})
num2.addEventListener('keyup', function (event) {
    calculateData.num2 = event.target.value
    console.log(calculateData.num2);
})

sign.addEventListener('change', function (event) {
    calculateData.sign = event.target.value
    console.log(event.target.value);
})

btn1.addEventListener('click', function(event) {
    calculate(calculateData);
    result.textContent = calculateData.result
    
    })