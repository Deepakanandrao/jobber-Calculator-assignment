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

class Cal {
    constructor() {
        this.current_operation = "";
        this.first_operand = "";
        this.second_operand = "";
        this.is_first = true;
        this.answer = 0;
    }

    one() {
        if (this.is_first) {
            this.first_operand = 1;
            this.is_first = false;
        } else {
            this.second_operand = 1;
            return this.calculate();
        }
        return this;
    }

    plus() {
        this.current_operation = "+";
        return this;
    }

    three() {
        if (this.is_first) {
            this.first_operand = 3;
            this.is_first = false;
        } else {
            this.second_operand = 3;
            return this.calculate();
        }
    }

    reset() {
        this.current_operation = "";
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
        console.log(this.answer);
        this.reset();
    }
}

c = new Cal();
c.one().plus().three();
