function calculator(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    } else {
        return 'Invalid operator';
    }
}
console.log(calculator(10, 5, '-'));