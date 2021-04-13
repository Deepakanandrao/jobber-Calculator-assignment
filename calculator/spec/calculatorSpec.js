describe("Calculator", function () {
    var operator;
    var firstOperand;
    var secondOperand;

    beforeEach(function () {
    });

    it("It should perform addition", function () {
        var sum = Calc.new.one.plus.two;
        expect(sum).toEqual(3);
    });

    it("It should perform substraction", function () {
        var sum = Calc.new.five.minus.six;
        expect(sum).toEqual(-1);
    });

    it("It should perform multiplication", function () {
        var sum = Calc.new.seven.times.two;
        expect(sum).toEqual(14);
    });

    it("It should perform division", function () {
        var sum = Calc.new.nine.divided_by.three;
        expect(sum).toEqual(3);
    });

    it("It should throw error", function () {
        expect(function () { Calc.new.fine.divided_by.three }).toThrowError();
    });

    it("It should throw error if used two operators in a row", function () {
        expect(function () {
            Calc.new.plus.divided_by.three;
        }).toThrowError();
    });
    it("It should throw error if used two numbers in a row", function () {
        expect(function () {
            Calc.new.nine.nine.plus;
        }).toThrowError();
    });
});