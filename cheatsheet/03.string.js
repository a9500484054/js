/*****************
* * МЕТОДЫ СТРОК
******************/

str.toLowerCase() // Приобразует текс к нижнему регистру 
str.toUpperCase() // Приобразует текс к Верхнему регистру 
str.concat(' ', str) // Конкатенирует строку
str.split(' ') // Приобразует строку в массив

str.indexOF('a') // вернет индекс первого значения которое найдет, чувствителен к регистру
str.indexOF('a', 10) // Начнет искать с 10 позиции  
str.indexOF('!') // Если сомвол не найден вернет '-1' 
str.indexIncludes('f') // Вернет true или false 
str.includes() // Ищет совбадения в строке

str = 'Hellow dsf'

str.replace('Hellow', 'Hi') // Заменяет значение строки 'hi dsf'
str.replace(/,/gi, ' ') // Заменяет значение строки

str.slice() // 'Hellow dsf'
str.slice(0) // 'Hellow dsf'
str.slice(0, 5) // 'Hellow'
str.slice(4) // "ow dsf"
str.slice(0, -3) // "Hellow "

str.charCodeAt() // Вернет числовое значение Юникода
'a'.charCodeAt() // 97
'A'.charCodeAt() // 65


str.length //возвращает количество символов в строке




// *Приоброзования в строку 
// Number to String
value = String(10) // '10'
value = String(10+40) // '50'
value = (40).toString() // '40'
// Boolean to String
value = String(true)  // 'true'
value = String(false) // 'false'
// Array to String
value = String([1, 2, 3]) // '1, 2, 3'
// object String
value = String({ name: 'Aleksei', age: 30 }) // '[object Object]'
//
value = 30 + '' + 30 // '3030'
value = 30 + '' + undefined // '30undefined'
value = 30 - 'asfasf' // NaN
value = 30 - '5' // 25
value = 30 * '5' // 150
value = true + 10 // 11
value = true + undefined // NaN
