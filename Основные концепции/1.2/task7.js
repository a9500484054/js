//* Задача 1.2.13
// replaceItems
// Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

// Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

// Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

// replaceItemsClear([1,2,3,4,2], 2, 'a'); //  [1,'a',3,4,'a']
// const arr = [1,2,3,4,2];
// replaceItemsMutate(arr, 2, 'a');
// console.log(arr); // [1,'a',3,4,'a']

// function replaceItemsClear(arr, item, replaceItem) {
// 	let newArr = arr.reduce((acc, currentValue, index) => {
// 		acc[index] = arr[index]
// 		if(arr[index] === item) {
// 			acc[index] = replaceItem
// 		}
// 		return acc
// 	}, [])
// 	return newArr	
// }

// console.log(replaceItemsClear([1,2,3,4,2], 2, 'lol'))


// function replaceItemsMutate(arr, item, replaceItem) {
// 	arr.forEach((persone, index, array) => {
// 		if(persone === item) {
// 			array[index] = replaceItem
// 		}
// 	})
// 	return arr
// }

// console.log(replaceItemsMutate([1,2,3,4,2], 2, 'lol'))


function replaceItemsClear(arr, item, replaceItem) {
	let newArr = arr.map((acc, index) => {
		acc = arr[index]
		if(arr[index] === item) acc = replaceItem
		return acc
	}, [])
	return newArr	
}

console.log(replaceItemsClear([1,2,3,4,2], 2, 'lol'))
