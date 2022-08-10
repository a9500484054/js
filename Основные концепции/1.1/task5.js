//* задача 1.1.19
// Stop gninnipS My sdroW!
// Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

// Примеры:

// reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
// reverseLongWords('This is a test'); // This is a test
// reverseLongWords('This is another test'); // This is rehtona test

// const reverseLongWords = (str) => {
// 	str = str.split(' ')
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i].length >= 5) {
// 			str[i] = str[i].split('')
// 			str[i] = str[i].reverse()
// 			str[i] = str[i].toString().replace(/,/gi, '')
// 		}
// 	}
// 	return str.toString().replace(/,/gi, ' ')
// }
const reverseLongWords = (str) => {
	let newStr = str.split(' ').map(str => {
		if (str.length >= 5) return str.split('').reverse().toString().replace(/,/gi, '')
		return str
	})
	return newStr.toString().replace(/,/gi, ' ')
}

console.log(reverseLongWords('This is another test'))
