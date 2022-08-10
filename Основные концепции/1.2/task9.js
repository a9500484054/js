//* Задача 1.2.16
// Урок с кодом
// Has Arrays
// Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

// Пример:

// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1)); 
 // true

// const data1 = [];
// console.log(hasArrays(data2)); 
 // false

// const hasArrays = (arr) => {

// 	let newArr = arr.slice().sort();

// 	for (let i = 0; i < arr.length; i++) {
// 		newArr[i] = Array.isArray(arr[i])
// 	}
// 	let newArrValue = newArr.find(item => item === true)
	
// 	if(newArrValue === undefined) {
// 		return false
// 	}
// 	return newArrValue
// };


const hasArrays = (arr) => {
	let result = arr.some((elem) => { 
		if(Array.isArray(elem) === true) {
			return true
		}
	})
	return result
};

console.log(hasArrays(data1))


// console.log('Результат: ' + test)

