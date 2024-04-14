const signSelect = document.querySelector('.container-2-content-sign-select');
const result = document.querySelector('.result-btn');
const firstNumInput = document.querySelector('.container-1-content-input');
const secondNumInput = document.querySelector('.container-3-content-input');
const resultTitle = document.querySelector('.result-value');
const reset = document.querySelector('.reset-btn');
const btnTitle = document.querySelector('.btnTitle')


const operation = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
};

const calculateData = {
    num1: '',
    num2: '',
    sign: '+',
    result: '',
};



function calculate({num1, num2, sign}) {
    switch (sign) {
        case operation.sum:
            calculateData.result = sum(num1, num2);
            break;
        case operation.subtract:
            calculateData.result = subtract(num1, num2);
            break;
        case operation.multiply:
            calculateData.result = multiply(num1, num2);
            break;
        case operation.divide:
            calculateData.result = divide(num1, num2);
            break;
    }
}

function sum(num1, num2) {
    return (+num1) + (+num2);
}
function subtract(num1, num2) {
    return (+num1) - (+num2);
}
function multiply(num1, num2) {
    return (+num1) * (+num2);
}
function divide(num1, num2) {
    return (+num1) / (+num2);
}


function resetCalculate() {
    calculateData.num2 = '';
    calculateData.num1 = '';
    calculateData.sign = '+';
    calculateData.result = '';
    resultTitle.textContent = '...';
    firstNumInput.value = '';
    secondNumInput.value = '';
    signSelect.value = '+';
  }


  firstNumInput.addEventListener('keyup', function (e) {
    calculateData.num1 = e.target.value;
    // console.log(calculateData.num1);
});
secondNumInput.addEventListener('keyup', function (e) {
    calculateData.num2 = e.target.value;
    // console.log(calculateData.num2);
});

signSelect.addEventListener('change', function (e) {
    calculateData.sign = e.target.value;
    // console.log(event.target.value);
});

result.addEventListener('click', function(e) {
    calculate(calculateData);
    resultTitle.textContent = calculateData.result;
    console.log(calculateData.result);
});

reset.addEventListener('click', resetCalculate);


//DZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZ
//DZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZ
//DZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZDZ

function formatUserName (str) {
    const lowerCase = str.toLowerCase().slice(1)
    const firstLetter = str[0].toUpperCase()
    return firstLetter + lowerCase
}
console.log(formatUserName('STAS'));


firstNumInput.addEventListener('keyup', function (e) {
    resultTitle.textContent = calculateData.num1
});

 btnTitle.addEventListener('click', function text(e) {
    resultTitle.textContent = formatUserName(calculateData.num1) 
    console.log(formatUserName(calculateData.num1));
});





