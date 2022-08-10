//* Задача 1.2.15
// Урок с кодом
// moveToStart
// Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

// Функция должна возвращать новый массив, а не мутировать старый.

// Примеры:

// console.log(
//   moveToStart([1, 2, 3, 4, 5], 3)
// ); // [3, 4, 5, 1, 2]

// console.log(
//   moveToStart([1, 2, 3, 4, 5], 3)
// ); // [3, 4, 5, 1, 2]

// console.log(
//   moveToStart([1, 2, 3, 4, 5], 10)
// ); // [1, 2, 3, 4, 5]


// const moveToStart = (arr, n) => {
// 	n = -n
// 	let newArr = arr.slice().sort()
// 	let firstElemArr = newArr.slice(n)
// 	let lastElemArr

// 	if(Math.abs(n) >= arr.length) {
// 		let x = Math.abs(n) % arr.length
// 		x = -x
// 		firstElemArr = firstElemArr.slice(x)
// 		lastElemArr = newArr.slice(0, arr.length - firstElemArr.length)
// 		newArr = firstElemArr.concat(lastElemArr)
// 		return newArr
// 	} else {
// 		lastElemArr = newArr.slice(0, arr.length - firstElemArr.length)
// 		newArr = firstElemArr.concat(lastElemArr)
// 		return newArr
// 	}	
// }

const moveToStart = (arr, n) => {
	let newArr = arr.slice().sort()

	if (n >= arr.length) {
		n = n % arr.length
	}

	for (let i = 0; i < n; i++) {
		newArr.unshift(newArr.pop())
	}
	return newArr
}

console.log(moveToStart([1, 2, 3, 4, 5], 9))
