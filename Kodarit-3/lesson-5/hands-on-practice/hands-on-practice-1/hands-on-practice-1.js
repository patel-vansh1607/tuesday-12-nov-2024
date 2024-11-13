function calculatingNumbers(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero is undefined";
        }
    } else {
        return "Error: Invalid operator";
    }
}

let result = calculatingNumbers(10, 5, '/');
console.log(result);  