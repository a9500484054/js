/*****************
* * КОММЕНТАРИИ
******************/
// Однострочный комментарий 
/*
	Многострочный комментарий 
*/
/** 
 * JSDoc комментарий 
 */

/*****************
* * ТИПЫ ОШИБОК
******************/

//* SyntaxError - Ошибка синтаксиса 
//* ReferenceError - Ошибка обращения к переменной которая еще не объявлена 
//* TypeError - ошибка типизации (Убидиться что используються объекты верно)



/**************************************************************************************************/
/**************************************************************************************************/


/** Особености JS
** 1. Js Динамический типизированный язык (При присвоении перемнной JS димачиеский определит тип данных, также переменную можно потом записать другой тип данных)
** 2. В Одной и той же переменной можем хранит в себе любой тип данных
** 3. Нам не нужно определять тип данных при создании данных 
**/


/**************************************************************************************************/
/**************************************************************************************************/


/*****************
 * * ПЕРЕМЕННЫЙ
 ******************/

/**  Особенности var
* *1.Мы можем определить не сколько var с одинаковым именем
* *2.Высплытия - перемнные var предварительно собираються браузером и выноситься вверх кода, а также непосредственно их определения в том месте где мы им присваиваем значения
**/

/**  Отличия var от let
* *1. let не может быть несколько, нельзя обьявлять одинковые неаименования переменных 
* *1. К переменной let нельзя обращаться пока она не объявлена 
**/

/**  Особенности Const
* *1.Преопределения const запрещено 
*  *Исключения - можно менять значаения ссылочных типов
**/


/**************************************************************************************************/
/**************************************************************************************************/

/*****************
 * * ОПЕРАТОРЫ 
 ******************/

/** операторы JS
** a = b - Присвоение
** a == b - равно
** a === b - равно
** a > b, a < b - больше/меньше или равно
** a >= b, a <= b - Больше/меньше или равно:
** a != b - не равно
** a % b - это остаток от целочисленного деления a на b.
** 
** && - и // false
** || - или // true
** +/-= - сложить/вычисть   
** ++/-- - прибавить +1/-1
** ** - 	возводит в степень
**/

/** операторы JS
* *c += a //c = c + a
* *c -= a //c = c - a
* *c *= a //c = c * a
* *c /= a //c = c / a
* *с = 5 % 2 // 1, с = 4 % 2 // 0 - остаток от деления 
* *value++ / value-- // число изменится на следующий строке  
* *++value / --value // Число изменится сразу на этой же строке 
**/

/** Особености Операторов 
** Чем отличается Оператор == и === ?
** == - Сравнивает значение но не типы данных
** === - сравнивает значение и тип данных
**/



/**************************************************************************************************/
/**************************************************************************************************/

/*****************
* * ТИПЫ ДАННЫХ 
******************/

/** Примитивные типы данных 
 ** number: 2019, 1.5, NaN, Infinity
 ** string: 'Hellow' "Hellow" `Hellow`
 ** boolean: true false
 ** Null: null - Это значит ничего/несущесвтует. Пример: Хотим выбрать DOM элемент которого нет, это null 
 ** Undefined: undefined - Когда переменная объявлена но не как не определена
 ** symbol()
 **/


// Особенности/Исключение 
console.log(typeof null) // object - На самом деле это отдельный тип данных Null
console.log(typeof NaN) // Number - NaN Являеться неопределенным числом
console.log(typeof isNaN(NaN)) // правильная проверка на NaN 


/** Ссылочный типы данных 
 ** Объекты. (Reference type) Передаються по ссылки 
 ** - Object { name: 'Aleksei', age: 30 }
 ** *Array: [1, 2, 3]
 ** *Function: function foo() {}
 ** *Date: new Date()
 **/

/**************************************************************************************************/
/**************************************************************************************************/

/*****************
* * УСЛОВНЫЕ ОПЕРАТОРЫ
******************/

// Варинат 1
if(age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}

// Варинат 2
let accessAllowed = (age > 18) ? true : false;
let condition = (year == 2015); // преобразуется к true или false

// Варинат 3
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

	function pow(x, n) {
		return (n == 1) ? x : (x * pow(x, n - 1));
	}


	switch(x) {
		case 'value1':  // if (x === 'value1'
			[break]
	
		case 'value2':  // if (x === 'value2')
		
			[break]
	
		default: // else
		
			[break]
	}



/************************************************************************************************/
/**************************************************************************************************/

/*****************
* * ЦИКЛЫ
******************/

// while
while(i++ < 10) {
	console.log(i)
}

//do while
do {
	console.log('sdsf')
} while(i < 0)

//for
	for (let i = 0; i < str.length; i++) {
	console.log(str[i])
	continue // пропускает итерацию
	break // Останавливает цикл
}

//for in
for (let key in user) {
	console.log(key) // выведет ключ 
	console.log(user[key]) // выведет значения
}
//for of
for (let person of people) {
	console.log(person) // выведет знание массива
}




/**************************************************************************************************/
/**************************************************************************************************/

/*****************
* * ФУНКЦИИ
******************/
//* Наименование
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false


function name() {
	console.log('тест')
}

//Анонинмная функиция
(function(msg) {
	console.log(msg)
})('Hellow')


//Стрелочные функции 
() => {}
const name = () => {}
const name = (name) => {}
const name = name => console.log('sdfsdf')
const name = num => num ** 2
const name = (a, b) => a + b
//Параметры по умолчанию
const name = (a, b = 1) => a + b


function sumAll(...All) {
	
}


/**************************************************************************************************/
/**************************************************************************************************/

/*****************
* * МАССИВ
******************/

// Создание массива 
let Aarr = new Array() 
let Aarr = [] 
// Пример массива
// Обычный массив
let arrTwo = [
	'Коля',
	{
		type: 'JS',
		age: 36
	},
	true,
	function() {
		console.log('Привет')
	}
]
// Многомерные массивы
let matrix = [
	[1,2,3],
	[1,2,3],
	[1,2,3]
]

// Проверка на массив 
let value = Array.isArray(arrTwo) // true || false

// Как обращаться к элементу Массива
console.log(arrTwo) //{., ., .}
console.log(arrTwo[0]) // 'Коля'
console.log(arrTwo[1].type) // 'JS' // Обращаемся к свойству объекта по названию ключа
console.log(arrTwo[3]()) // Круглые скобки нужны для того что бы выполнилась функция и мы получили результат 

console.log(matrix) 
console.log(matrix[0][1]) // 2

/**************************************************************************************************/
/**************************************************************************************************/

/*****************
* * Объекты
******************/

let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

const user = {
	firstName: 'Denis',
	age: 23,
	isAdmin: true,
	email: 'aslfask@ldfasf.fd',
	'user-addres': {
		city: 'SPB'
	},
	skills: ['html', 'css', 'js']
}

let value = user.firstName // 'Denis'
let email = 'email'
let skills = 'skills'


alue = user['isAdmin'] // true
alue = user['user-addres'] // object{city: 'SPB'}
alue = user['user-addres'].city // SPB'
alue = user['user-addres']['city'] // SPB'
alue = user[email] // 'aslfask@ldfasf.fd'
alue = user[skills] // ['html', 'css', 'js']
alue = user[skills][0] // html

user.firstName = "Den" // перезапишим значение 
user.lastName = "SF" // Добавляем в объект ключ и значение  

user['user-addres'].city = 'Kiev' // Изменяем значение на "kiev"
user['user-addres'].country = 'UK' //  Добавляем в объект ключ и значение  
console.log(alue)



for (let key in getStr) {
  if(getStr.hasOwnProperty(key)) {
    // console.log(getStr[key])
  } 
}

const keys = Object.keys(object)
keys.forEach(key => {
  console.log('Key :', key)
})



/**************************************************************************************************/
/**************************************************************************************************/








/**************************************************************************************************/
/**************************************************************************************************/
