/*
Complete one of the following exercises (your choice) in the language of your choice. Demonstrate with tests that your solutions successfully
solves the required problems. Some problems may not be solvable in all languages; in such a case an appropriate language should be used. We
are evaluating these challenges from the lens that this is your best possible code.

Description
Fluent Calculator
The Kata is inspired by the “Calculating with Functions Kata for JavaScript” on codewars. The goal is to implement a simple calculator which
uses fluent syntax:

Calc.new.one.plus.two (result: 3)
Calc.new.five.minus.six (result: -1)
Calc.new.seven.times.two (result: 14)
Calc.new.nine.divided_by.three (result: 3)

There are only four operations that are supported (plus, minus, times, divided_by) and 10 digits (zero, one, two, three, four, five, six, seven, eight,
nine).

Each calculation consists of one operation only and will return an integer.
Note: This is not a string parsing problem. The calls above are a chain of methods. Some languages may require parenthesis in method calls.
That is OK, but consider a different language what would support the above syntax if possible. 
*/

//Global Error Handler
window.onerror = function (message, source, lineno, colno, error) {
    errorMsg =
        "Unsupported Operation" +
        "\n" +
        "Only four operators (plus, minus, times, divided_by) and" +
        "\n" +
        "10 digits are supported (zero, one, two, three, four, five, six, seven, eight, nine)\n";
    
    cr = document.getElementById("error_display");
    cr.innerHTML += "<br>" + errorMsg + "<br>";
    return true;
};

class Cal {
    NUMBERS = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };

    OPERATOR = {
        plus: "+",
        times: "*",
        divided_by: "/",
        minus: "-"
    };

    constructor() {
        this.current_operation = null;
        this.first_operand = "";
        this.second_operand = "";
        this.is_first = true;
        this.answer = 0;
    }

    reset() {
        this.current_operation = null;
        this.first_operand = "";
        this.second_operand = "";
        this.is_first = true;
    }

    calculate() {
        let a = this.first_operand;
        let b = this.second_operand;
        switch (this.current_operation) {
            case "+":
                this.answer = a + b;
                break;
            case "-":
                this.answer = a - b;
                break;
            case "*":
                this.answer = a * b;
                break;
            case "/":
                this.answer = a / b;
                break;
        }
        this.reset();
        return parseInt(this.answer, 10);
    }

    addOperators() {
        Object.keys(this.OPERATOR).forEach((key) => {
            Object.defineProperty(this, key, {
                get: function () {
                    if (!this.is_first && (typeof(this.first_operand) === 'number')) {
                        this.current_operation = this.OPERATOR[key];
                        return this;
                    }
                }
            });
        });
    }

    addNumbers() {
        Object.keys(this.NUMBERS).forEach((key) => {
            Object.defineProperty(this, key, {
                get: function () {
                    if (this.is_first) {
                        this.first_operand = this.NUMBERS[key];
                        this.is_first = false;
                        return this;
                    } else if ((typeof this.current_operation === "string")) {
                        this.second_operand = this.NUMBERS[key];
                        return this.calculate();
                    }
                }
            });
        });
    }
}

class Calc {
    static get new() {
        this.c = new Cal();
        this.c.addNumbers();
        this.c.addOperators();
        return this.c;
    }
}

function codeRun() {
    result_2 = Calc.new.nine.minus.two;
    cl = document.getElementById("info_display");
    cl.innerHTML += result_2 + '<br>';
    console.log(result_2);
}

function clearConsole() {
    cl = document.getElementById("info_display");
    cl.innerHTML = "<h2>Console Output</h2>";
     cl = document.getElementById("error_display");
     cl.innerHTML = "<h2>Console Errors</h2>";
}

function errorRun() {
   Calc.new.minus.minus.two; 
}