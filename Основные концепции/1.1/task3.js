//* задача 1.1.16
// compareWithPrecision
// Напишите функцию, которая сравнивает два числа с определенной погрешностью.

// Пример:

// compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true

function compareWithPrecision(a, b, precision) {
	return (Math.abs(a - b) <= precision) ?	true : false
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001))