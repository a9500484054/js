// *задача 1.2.7
// Arithmetic
// Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки) и возвращает результат соответстующей операции.

// Первые 2 аргумента это положительные целые числа

// Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

// Примеры использования:

// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
// В случает если оператор некорректен, функция должна возвращать NaN

// arithmetic(5, 2, "aaa")      => returns NaN



// const arithmetic = (a, b, operator) => {
// 	if (operator === 'add') {
// 		return a + b
// 	} 	if (operator === 'subtract') {
// 		return a - b
// 	}	if (operator === 'multiply') {
// 		return a * b
// 	}	if (operator === 'divide') {
// 		return a / b 
// 	} else {
// 		return NaN
// 	}
// };
const arithmetic = (a, b, operator) => {
	let result
	switch(operator) {
		case 'add':
		result = a + b
		break; 
		case 'subtract':
		result = a - b
		break; 
		case 'multiply':
		result = a * b
		break; 
		case 'divide':
		result = a / b 
		break;
		default: 
		result = NaN
	}
	return result
}


console.log(arithmetic(1,32, 'multiply'))


