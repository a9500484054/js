





String()
Number()
Boolean()

isNaN(NaN)
isArray()

toString()

parseInt()

// *NULL
//--------------------------------------------------//
1 - "3" - null + "22" // 20(Number), null = 0  
1 - "3" - null + "22" // '-222'(String)
null === false //false
null === true //false
typeof null // object
//--------------------------------------------------//

// *NaN
//--------------------------------------------------//
isNaN(value) // Проверка на NaN
//--------------------------------------------------//

// *Array
//--------------------------------------------------//
Array.isArray(elem) // Провера на массив

// \n	Перевод строки
// \r	Возврат каретки: самостоятельно не используется. В текстовых файлах Windows для перевода строки используется комбинация символов \r\n.
// \', \"	Кавычки
// \\	Обратный слеш
// \t	Знак табуляции
// \b, \f, \v	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.
// \xXX	Символ с шестнадцатеричным юникодным кодом XX, например, '\x7A' — то же самое, что 'z'.
// \uXXXX	Символ в кодировке UTF-16 с шестнадцатеричным кодом XXXX, например, \u00A9 — юникодное представление знака копирайта, ©. Код должен состоять ровно из 4 шестнадцатеричных цифр.
// \u{X…XXXXXX} (от 1 до 6 шестнадцатеричных цифр)	Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.


hasOwnProperty('') // проверяет если такой ключ



let qq = " -9 " + 5 // *' -9 5' - String
let qq = "" - 1 + 0 // *Number
let qq = "" + 1 + 0 // *String
let qq = "4" - 2 // *Number


let qq = 1 - "3" + null + 22 // *20
let qq = 1 + "3" + false + 22 // *"13false22"
let qq = 1 - "3" - null + "22" // *"-222"

console.log(typeof null) // object
console.log(typeof alert) //function
console.log(typeof []) // object
console.log(typeof {}) // object




/*
* Выберите правильный ответ
* Укажите все значение для которых верно равенство == false

* "false"
* undefined +
* null +
* "0"

*/

console.log("false" == false) // false
console.log(undefined == false) // false
console.log(null == false ) // false 
console.log(0 == false ) // true




// Словарь
// Конкатенация - соеднинеия строки и т.д.
// Итерация - круг цикла 
// операнд 
// Что такое CallBack
// Кртано - остаток при делении 
// Приоритет операторов
// ! Факториал числа 

5! = 1+2+3+4+5

(...All) - Массив
(a, a, ...All) 
undefined 
Infinity
(30 - 'asfasf'), ("4px" - 2), parseInt('zxvzxvzx123'), Number('false'),Number([1,2,3]), (true + undefined)// NaN
null

.?    ?.

obj.?[name].?[age]


??

innerHTML
typeof typeData
length


Object.toString() // Метод
if(!!value)

console.log()
console.table()
console.clear()



`${value}`


/*****************
* * ПРЕОБРАЗОВАНИЯ ТИПОВ ДАННЫХ
******************/

// *Приоброзования в строку 
// Number to String
value = String(10) // '10'
value = String(10+40) // '50'
value = (40).toString() // '40'
value = String(true)  // 'true'
value = String(false) // 'false'
value = String([1, 2, 3]) // '1, 2, 3'
value = String({ name: 'Aleksei', age: 30 }) // '[object Object]'
value = 30 + '' + 30 // '3030'
value = 30 + '' + undefined // '30undefined'
value = 30 - 'asfasf' // NaN
value = 30 - '5' // 25
value = 30 * '5' // 150
value = true + 10 // 11
value = true + undefined // NaN


// *Приоброзования в число 
// String to Number 
value = Number('10') // 23
value = Number(false) // 1
value = Number(true) // 0
value = Number(null) // 0
value = Number('false') // NaN
value = Number([1,2,3]) // NaN
value = parseInt('123pxpsxofpd') // 200
value = parseInt('zxvzxvzx123')// NaN
value = parseFloat('123.213dfsdpfos') // 123.213

// *Приоброзования в булиан 
// Boolean 
value = Boolean('123') // true
value = Boolean(' ') // true
value = Boolean('') // false
value = Boolean(1) // true
value = Boolean(-1) // true
value = Boolean(0) // false
value = Boolean(undefined) // false
value = Boolean(null) // false
value = Boolean({}) // true
value = Boolean([]) // true
value = Boolean("") // false
value = Boolean(" ") // true
value = Boolean({}) // true
value = Boolean([]) // true
value = Boolean(0)// false
value = "4px" - 2 // NaN
value = null + 1 // 1
value = undefined + 1 // NaN
value = true + false // 1