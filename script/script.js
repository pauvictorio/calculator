const operationScreen = document.querySelector('.operation-screen');
const resultScreen = document.querySelector('.result-screen')
const keys = [...document.querySelectorAll('.button')];
let operationArray = [];
let resultArray = [];
let operand1 = [];
let operand2 = [];
let operator = '';

// Indicates whether operand2 array is to be accessed (isOperand2Accessed = true)
let isOperand2Accessed = false;

// Handle displaying of operation
function displayOperation() {
  // operationScreen.textContent = operand1.join('')
  //                                        // Adds commas as thousands separator
  //                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
  //                               // + ' '
  //                               + operator
  //                               // + ' '
  //                               + operand2.join('')
  //                                        // Adds commas as thousands separator
  //                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;
  // operationArray = [...operationScreen.textContent];
  // console.log(operationArray);
}

// Handle displaying of result
function displayInput() {
  // resultScreen.textContent = 
}

//
function allClear() {
  operationScreen.textContent = '';
  resultScreen.textContent = '';
  operand1 = [];
  operand2 = [];
  operator = '';
}

//
function clearEntry() {
  if (!isOperand2Accessed) operand1.pop();
  else operand2.pop();

  displayOperation();
}

//
function operate(a, b, operator) {
  if (operator === '+') return a + b;

  if (operator === '-') return a - b;

  if (operator === '*') return a * b;

  if (operator === '/') return a / b;
}

const events = ['keydown', 'click'];

events.forEach(event => window.addEventListener(event, e => {

  // Handle both keyboard and onscreen input
  const key = document.querySelector(`.button[data-key="${e.key}"]`) || e.target;
  
  if (keys.includes(key)) {

    // All clear
    if (key.getAttribute('id') === 'ac') allClear();

    // Clear last entry
    if (key.getAttribute('id') === 'ce') clearEntry();

    // Number
    if (key.getAttribute('class').split(' ').includes('nums')) {
      // if (!isOperand2Accessed) operand1.push(key.textContent);
      // else operand2.push(key.textContent);

      resultArray.push(key.textContent);
      displayInput();
    }

    // Operation key
    if (key.getAttribute('class').split(' ').includes('operation')) {
      isOperand2Accessed = true;
      operator = key.textContent;
      displayOperation();
    }


  }
}));