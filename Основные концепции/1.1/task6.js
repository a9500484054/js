//* задача 1.1.21
// Урок с кодом
// На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом


// Wrap Paragraph
// Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

// Пример:

const text = `Some
simple multiline
text`;

// console.log(wrapInParagraph(text)); // <p>Some</p>
//  <p>simple multiline</p>
//  <p>text</p>

// const text2 = 'some\ntext';

// console.log(wrapInParagraph(text2)); // <p>some</p>
//  <p>text</p>

// function wrapInParagraph(str){
// 	str = str.split('\n')
// 	for (let i = 0; i < str.length; i++) {
// 		str[i] = '<p>' + str[i] + '</p>'
// 	}
// 	return str.toString().replace(/,/gi, '\n')
// }
function wrapInParagraph(str){
	newStr = str.split('\n').map(str => str = '<p>' + str + '</p>')
	return newStr.toString().replace(/,/gi, '\n')
}

console.log( wrapInParagraph(text))