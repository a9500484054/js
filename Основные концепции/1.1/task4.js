//* задача 1.1.18
// Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

// Пример:

// const str = 'sOme RanDoM sTRING';
// console.log(capitalize(str)); // Some Random String

// function capitalize(str){
// 	strLowerCase = str.toLowerCase()

// 	str = strLowerCase.split(' ')
	
// 	for (let i = 0; i < str.length; i++) {
// 		str[i] = str[i][0].toUpperCase() + str[i].slice(1)
// 	}

// 	str = str.toString().replace(/,/gi, ' ')

// 	return str
// }
function capitalize(str){
	let newStr = str.toLowerCase().split(' ').map(str => str[0].toUpperCase() + str.slice(1))
	return newStr.toString().replace(/,/gi, ' ')

}

console.log(capitalize('sOme RanDoM sTRING'))



