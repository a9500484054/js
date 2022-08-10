// *JS Core. Практическая задача 1.3.5
// OptionalChaining
// Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

// Если какое-то из свойств не найдено - функция возвращает undefined.

// Пример:

// const obj = {
//   a: {
//     b: {
//       c: {
//         d: 'Привет!'
//       }
//     }
//   }
// }
// optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
// optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

// optionalChaining(obj, ["a", "c", "d"]) // undefined
// optionalChaining(obj, ["b", "d", "a"]) // undefined

let q = 0

// function optionalChaining (obj, chain) {
// 	console.log('----------------- ' + ++q)
//   let result 

// 	const keys = Object.keys(obj)

// 	for(let i = 0; i < chain.length; i++){
// 		if(chain[i] == keys) {
// 			if(typeof obj[keys] !== 'object'){
// 				result = obj[keys]
// 			} else {
// 				result = optionalChaining(obj[keys], chain)
// 			}
// 		} 
// 	} 
// 	return result
// }
function optionalChaining (obj, chain) {
	
  let result 



	// for (let key in obj) {
	// 	console.log('----------------- ' + ++q)
	// 	console.log(key) // выведет ключ 
	// 	console.log(obj[key]) // выведет значения

	// }
	const keys = Object.keys(obj)

	for(let i = 0; i < chain.length; ++i) {

		console.log('----------------- ' + ++q)
		console.log(chain[i])
		console.log(keys)
		if(chain[i] == Object.keys(obj)) {
			result = optionalChaining(obj[keys], chain)
		} else {
			result = undefined
		}

	}

	return result
}



const obj = {
	a: {
		b: {
			c: {
				d: 'Привет!'
      }
    }
  }
}
const objd = {
	a: 'Привет!'
}

let chain = ["a", "b", "c", "d", "e"]
// let chain = ["a"]




console.log(optionalChaining(obj, chain))
// console.log(optionalChaining(objd, chain))




