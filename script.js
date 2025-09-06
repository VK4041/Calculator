const screen = document.querySelector('.screen')
let screenText = screen.firstChild

let num1 = ''
let num2 = ''
let operator = ''
let num1Flag = true
function createNumpad(numpadRow) {
    const numPad = document.createElement('div')
    const numRows = Array.from({ length: 4 }, () => document.createElement('div'));

    numPad.classList.add('flex-col', 'numPad')
    numRows.forEach(each => each.classList.add('flex-row'))
    let num = 9

    numRows.slice(0, -1).forEach(row => {
        while (row.hasChildNodes()) row.removeChild(row.firstElementChild)

        let numBtn = getButton()
        numBtn.textContent = num--
        row.appendChild(numBtn)

        while (num % 3) {
            let newNumBtn = getButton()
            newNumBtn.textContent = num--
            row.insertBefore(newNumBtn, row.firstChild)
        }
        numPad.appendChild(row);
    })
    let zeroBtn = getButton()
    let zeroDiv = numRows[3]

    zeroBtn.textContent = num
    zeroDiv.classList.add('left')

    zeroDiv.appendChild(zeroBtn)
    numPad.appendChild(zeroDiv)
    numpadRow.appendChild(numPad)
    numpadRow.classList.add('flex-row')
    return numPad
}
function createOperators(numpadRow) {
    const operators = document.createElement('div')
    const opRows = Array.from({ length: 3 }, () => document.createElement('div'))

    let opText = ['+', '-', 'x', '÷', '=']
    let opBtns = Array.from({ length: 5 }, () => getButton())
    opBtns.forEach((btn, index) => {
        btn.textContent = opText[index]
    })
    let i = 0;
    let j = -1;
    while (i < 5) {
        if (i % 2 == 0) {
            opRows[++j].appendChild(opBtns[i++])
        }
        else {
            opRows[j].appendChild(opBtns[i++])
        }
    }
    opRows.forEach(row => {
        operators.appendChild(row)
        row.classList.add('flex-row')
    })
    opRows[2].classList.add('right')
    numpadRow.appendChild(operators)
    operators.classList.add('flex-col', 'operators')
    return operators
}
function getButton() {
    return document.createElement('button')
}
function operate(num1, num2, op) {
    let result
    switch (op) {
        case '+': result = add(num1, num2)
            break;
        case '-': result = subtract(num1, num2)
            break;
        case 'x': result = multiply(num1, num2)
            break;
        case '÷': result = divide(num1, num2)
    }
    return result
}
function buttonListeners() {
    const buttons = document.querySelectorAll('.container button')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => clickHandler(btn.textContent))
    })
}
function clickHandler(btn) {

    //If digits are clicked
    if (/\d/.test(btn)) digitAppender(btn)

    //If operators are clicked given only num1 is entered yet
    if (/[\+\-x\÷]/.test(btn) && num1 && !num2) {
        num1Flag = false
        operator = btn
        screenText.textContent += btn
        //console.log(`Operator: (${btn}) was clicked`)
    }

    //If both num1 and num2 are entered and any operator is clicked, calculate
    if (/[\+\-x\÷\=]/.test(btn) && num1 && num2) {
        //Convert both variables to integer
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        let result = operate(num1, num2, operator)

        //Check to display other operators upon initial calculation
        let nextOp = (btn !== '=') ? btn : ''

        //console.log(`Result: ${num1} ${operator} ${num2} = ${result}`)

        num1 = result
        num2 = ''
        operator = btn
        screenText.textContent = result.toString() + nextOp
    }
}
function digitAppender(btn) {
    // If num1 flag is on and digits are entered: append to num1
    if (num1Flag) {
        num1 += btn
        //console.log(`Num1: ${num1} & Num2: ${num2}`)
        screenText.textContent = num1
    }
    //Num1 flag is off, so: append to num2 now
    else {
        num2 += btn
        //console.log(`Num1: ${num1} & Num2: ${num2}`)
        screenText.textContent += num2
    }
}
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Error, division by zero')
        return 0
    }
    return parseInt(num1 / num2)
}
function main() {
    const body = document.querySelector('body')
    const footer = document.querySelector('.footer')
    const mainBody = document.querySelector('.mainBody')
    const title = document.querySelector('.title')
    const row1 = document.querySelector('.row1')
    const row2 = document.querySelector('.row2')

    screen.classList.add('flex-col')
    screenText.classList.add('right')
    row1.classList.add('flex-row')
    title.classList.add('text-center')
    mainBody.classList.add('flex-col')
    footer.classList.add('text-center')
    body.classList.add('flex-col')

    const numPad = createNumpad(row2)
    const operators = createOperators(row2)
    buttonListeners()
}
main()