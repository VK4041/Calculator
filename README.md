# Calculator

**Live Preview:** [https://vk4041.github.io/Calculator/](https://vk4041.github.io/Calculator/)

<img width="1826" height="926" alt="image" src="https://github.com/user-attachments/assets/7d5585f4-1f95-4a8e-809c-8258052da742" />

A simple, functional calculator built with vanilla JavaScript featuring basic mathematical operations and full keyboard support.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, division
- **Decimal Support**: Handle floating-point calculations
- **Keyboard Input**: Full keyboard support for numbers and operators
- **Backspace & Clear**: Delete last input or reset completely
- **Chain Calculations**: Perform consecutive operations
- **Error Handling**: Division by zero protection

## 🎮 Controls

### Mouse
Click number buttons (0-9), operators (+, -, ×, ÷), decimal (.), equals (=), Clear, or Back

### Keyboard
- **Numbers**: 0-9
- **Operators**: +, -, *, / (or x)
- **Calculate**: Enter or =
- **Clear**: Escape
- **Delete**: Backspace

## 🏗️ Project Structure

```
Calculator/
├── index.html       # HTML structure
├── script.js        # Logic and event handling
├── styles.css       # Styling
└── README.md
```

## 🛠️ Implementation

### State Management
Uses flags to track calculator state:
- `num1`, `num2`: Operands
- `operator`: Current operation
- `num1Flag`: Tracks which number is being entered
- `operatorPresentFlag`, `resultDisplayedFlag`: UI state

### Core Functions
- `operate()`: Performs calculations based on operator
- `eventHandler()`: Handles all button clicks and keyboard input
- `createNumpad()` / `createOperators()`: Dynamically generate UI buttons

### Precision
Results rounded to 2 decimal places using:
```javascript
Math.round(operate(num1, num2, operator) * 100) / 100
```

## 🚀 Getting Started

```bash
git clone https://github.com/VK4041/Calculator.git
cd Calculator
```

Open `index.html` in your browser or use a local server.

## 🎓 Key Concepts

- DOM manipulation and dynamic element creation
- Event handling (mouse + keyboard)
- State management with flags
- Input validation with regex
- Floating-point arithmetic handling

## 📄 License

MIT License

## 👨‍💻 Author

**Varun Kumar** - [@VK4041](https://github.com/VK4041)

---

**Built with**: Vanilla JavaScript • HTML5 • CSS3
