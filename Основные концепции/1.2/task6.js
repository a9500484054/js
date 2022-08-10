//* Задача 1.2.10

// Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.

// findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
// findAllIdx([1,1], 0) // []

function findAllIdx(arr, value) {
	let newArray = []
	arr.map((person, index) => {
		if(value === person) {
		newArray.push(index)
		}
	})
	return newArray
}

console.log(findAllIdx([1,0,1,0,0,1], 0))

