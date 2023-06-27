const result1 = document.querySelector(".resultNumber1")
const result2 = document.querySelector(".resultNumber2")
const result3 = document.querySelector(".resultNumber3")
const result4 = document.querySelector(".resultNumber4")

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
    const a = prompt('Add first number: ');
    const b = prompt('Add second number:: ');
    const calc = new App(a, b);
    const addNumber = (calc.add());
    const subtractNumber = (calc.subtract());
    const multiplyNumber = (calc.multiply());
    const divideNumber = (calc.divide());

    result1.innerText = `Add = ${addNumber}`
    result2.innerText = `Subtract = ${subtractNumber}`
    result3.innerText = `Multiply = ${multiplyNumber}`
    result4.innerText = `Divide = ${divideNumber}`

    console.log(calc.add());
    console.log(calc.subtract());
    console.log(calc.multiply());
    console.log(calc.divide());
} catch(err) {
    console.log('There is an error ', err.message);
} finally {
    console.log('Program completed successfully');
}


