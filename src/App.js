const result1 = document.querySelector(".resultNumber1")
const result2 = document.querySelector(".resultNumber2")
const result3 = document.querySelector(".resultNumber3")
const result4 = document.querySelector(".resultNumber4")

const numbersForm = document.querySelector(".formForNumbers")

const firstNumberFromInput = document.querySelector(".firstInput")
const secondNumberFromInput = document.querySelector(".secondInput")

class App {
    constructor(a,b) {
        this.a = a;
        this.b = b;
        if (isNaN(a)) {
            throw Error('First number is incorrect');
        } else if (isNaN(b)) {
            throw Error('Second number is incorrect');
        }
    }
    add(){
        return Number(this.a) + Number(this.b);
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if (this.b === 0) {
            throw Error(`Error: second number can't be 0`);
        } else {
            return this.a / this.b;
        }
    }
}
try {
    const handleInputNumbers = event => {
        event.preventDefault();

        const firstNumber = Number(firstNumberFromInput.value);
        const secondNumber = Number(secondNumberFromInput.value);
        console.log(firstNumber);
        console.log(secondNumber)

        const a = Number(firstNumber);
        const b = Number(secondNumber);
        const calc = new App(a, b);
        const addNumber = (calc.add().toFixed(2));
        const subtractNumber = (calc.subtract().toFixed(2));
        const multiplyNumber = (calc.multiply().toFixed(2));
        const divideNumber = (calc.divide().toFixed(2));

        result1.innerText = `Add = ${addNumber}`
        result2.innerText = `Subtract = ${subtractNumber}`
        result3.innerText = `Multiply = ${multiplyNumber}`
        result4.innerText = `Divide = ${divideNumber}`

        console.log(calc.add());
        console.log(calc.subtract());
        console.log(calc.multiply());
        console.log(calc.divide());

    };



    numbersForm.addEventListener("submit", handleInputNumbers)
} catch(err) {
    console.log('There is an error ', err.message);
}