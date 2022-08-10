//* Задача 1.2.6

// Напишите функцию, которая принимает число.
// Если число кратно 3, функция должна возвращать строку «Fizz».
// Если кратно 5, функция должна возвращать строку «Buzz».
// Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.


function fizzbuzz(number) {
	if(number % 3 === 0 && number %  5 === 0 ) {
		return 'FizzBuzz'
	} if(number % 5 === 0) {
		return 'Buzz'
	} if (number % 3 === 0 ) {
		return 'Fizz'
	} else {
		return number
	}
}

console.log(fizzbuzz(15))