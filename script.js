const screen = document.querySelector('.screen')
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
        //btn.classList.add('btn')
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
function updateScreen(str) {
    let screenText = screen.firstElementChild

    if (!(['Clear', 'Back'].includes(str)) && screenText.textContent.length < 11) {
        screenText.textContent += str
    }
    if (str === 'Back') {
        screenText.textContent = screenText.textContent.slice(0, -1)
    }
    if (str === 'Clear') {
        screenText.textContent = ''
    }
}
function clickHandler(str) {
    updateScreen(str)
}
function attachListeners(btnRow1, numPad, operators) {
    btnRow1.childNodes.forEach(btn => {
        btn.addEventListener('click', () => clickHandler(btn.textContent))
    })

    numPad.childNodes.forEach(row => {
        row.childNodes.forEach(numBtn => {
            numBtn.addEventListener('click', () => clickHandler(numBtn.textContent))
        })
    })

    operators.childNodes.forEach((row) => {
        row.childNodes.forEach(opBtn => {
            opBtn.addEventListener('click', () => clickHandler(opBtn.textContent))
        })
    })
}
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Error, division by zero')
        return 0
    }
    return num1 / num2
}
function main() {
    const body = document.querySelector('body')
    const footer = document.querySelector('.footer')
    const container = document.querySelector('.container')
    const mainBody = document.querySelector('.mainBody')
    const title = document.querySelector('.title')
    const row1 = document.querySelector('.row1')
    const row2 = document.querySelector('.row2')
    const screenText = screen.firstElementChild


    //container.classList.add('')
    screen.classList.add('flex-col')
    screenText.classList.add('right')
    row1.classList.add('flex-row')
    title.classList.add('text-center')
    mainBody.classList.add('flex-col')
    footer.classList.add('text-center')
    body.classList.add('flex-col')

    const numPad = createNumpad(row2)
    const operators = createOperators(row2)
    attachListeners(row1, numPad, operators)
}
main()