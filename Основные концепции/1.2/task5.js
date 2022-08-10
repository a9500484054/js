//* Задача 1.2.9
// Are brackets balanced
// Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.


// areBracketsBalanced('((')
// areBracketsBalanced('') 
// areBracketsBalanced('(())')



const areBracketsBalanced = (str) => {
	let counter = 0 
	if(str.length % 2 == 0 ) {
		if( str == '' || str == ' ') return true
		strArray = str.split('')
		if (strArray[0] !== '(' || strArray[strArray.length - 1] !== ')') return false;
		for (let i = 0; i < strArray.length; i++) {
			if(strArray[i] == '(') {
				counter++
			} else {
				counter--
			}
			if(counter < 0) {
				return false
			}
		}
		if(counter == 0) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
};



console.log(areBracketsBalanced('())(()'))






// const areBracketsBalanced = (str) => {
// 	let counter = 0 
// 	if(str.length % 2 == 0 ) {
		
// 	}

// };

// // console.log(areBracketsBalanced('(f(()'))

// // let str = '(())'
// let str = '(())'
// str = str.split('')
// // console.log(str)
// let regExp = /\(\)/gm
// let newStr

// const removeBracket = str => {
// 	for (let i = 0; i < str.length; i++) {
// 		if(str[i] === ')') {
// 			console.log(str.indexOf(str[i]))
// 			if(str[i - 1] === '(' ) {
// 				console.log(str.indexOf(str[i]))
// 				newStr = str.splice(str.indexOf(str[i - 1]), 2)
// 				break
// 			} 
// 		} else {

// 		}
// 	}
// 	return str
// } 



// // arr.forEach(item => {
// //   const result = checkBrackets(item);
// //   console.log(item, result);
// // })

// // for (let i = 0; i < str.length; i++) {
// // 	// console.log(str[i])
// // 	if(str.length !== 0) {
// // 		if(str[i] === ')') {
// // 			console.log(str[i])
// // 			if(str[i - 1] === '(') {
// // 				console.log(str[i - 1])
// // 				newStr = str.splice(str.indexOf(str[i]), 2)
// // 				break
// // 			} 
// // 		} else {
// // 			// console.log(false)
// // 		}
// // 	}
// // 	// if(str[i] === '(') {
// // 	// 	// console.log(str[i])
// // 	// 	if(str[i + 1] === ')') {
// // 	// 		// console.log(str[i + 1])
// // 	// 		newStr = str.splice(str.indexOf(str[i]), 2)
// // 	// 		// console.log(str.indexOf(str[i]))
// // 	// 	}
		
// // 	// }
// // }



// console.log(str)
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))
// console.log(removeBracket(str))


// 				// newStr = str.splice(str.indexOf(str[i]), 2)
// 				// for (let q = 0; q < str.length; q++) {
// 				// 	console.log(str[q + 1])
// 				// }

