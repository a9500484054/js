
/*****************
* * Базовые МЕТОДЫ МАССИВА
******************/

//* Push(https://clck.ru/XBr3g)
// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
//* Возвращаемое значение
// Новое значение свойства length объекта, для которого был вызван данный метод.
//* Пример

var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4

// -------------------------------------------------------------------------------------------------------------------

//* Unshit (https://clck.ru/XBrvb)
// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
//* Возвращаемое значение
// Новое свойство length объекта, над которым был вызван метод unshift.
//* Пример

var arr = [1, 2];
arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]

// -------------------------------------------------------------------------------------------------------------------

//* Shift (https://clck.ru/XBrmx)
// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
//* Возвращаемое значение
// Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство length массива равно 0, вернётся значение undefined.
//* Пример

var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
console.log('myFish до: ' + myFish); //myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();
console.log('myFish после: ' + myFish); //myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted); //Удалён этот элемент: ангел

// -------------------------------------------------------------------------------------------------------------------
//* Pop (https://clck.ru/XBrhc)
// Метод pop() удаляет последний элемент из массива и возвращает его значение.
//* Возвращаемое значение
// Последний элемент массива или undefined, если массив пуст.
//* Пример

var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']

var popped = myFish.pop();
console.log(myFish); // ['ангел', 'клоун', 'мандарин']

console.log(popped); // 'хирург'

// -------------------------------------------------------------------------------------------------------------------

//* Slice(https://clck.ru/XBqNG)
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
//* Возвращаемое значение
// Новый массив, содержащий извлечённые элементы.
//* Пример

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); // expected output: "the lazy dog."
console.log(str.slice(4, 19)); // expected output: "quick brown fox"
console.log(str.slice(-4)); // expected output: "dog."
console.log(str.slice(-9, -5)); // expected output: "lazy"

//-------------------------------------------------------------------------------------------------------------------

//* Splice(https://clck.ru/XBrDk)
// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
//* Возвращаемое значение
// Массив, содержащий удалённые элементы. Если будет удалён только один элемент, вернётся массив из одного элемента. Если никакие элементы не будут удалены, вернётся пустой массив.
//* Пример

//-------------------------------------------------------------------------------------------------------------

//* split('')(https://clck.ru/UgWdZ)
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//* Возвращаемое значение
// Метод split() возвращает новый массив.
//* Пример




alue.concat() //


alue.reverse() // переварачивает массив
alue.split('')(',')// приобразует кадыждый элемент строку в массив, 
alue.join()('')(' ') //  приобразует массив в строку 

alue.indexOf('text') //  возвращает индекс совпавщего элеменита  массива 
alue.findIndex(function() {}) //  возвращает индекс совпавщего элеменита  массива 
alue.includes('text') //  возвращает булевское значение

.sort();


/*****************
* *МЕТОДЫ Сортировки МАССИВА
******************/

//* forEach (https://clck.ru/LpiTt)
// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//* Примеры

arr.forEach(function (person, index, pArr) {})
arr.forEach(person => console.log(person))

function replaceItemsMutate(arr, item, replaceItem) {
	arr.forEach((persone, index, array) => {
		if(persone == item) {
			array[index] = replaceItem
		}
	})
	return arr
}

console.log(replaceItemsMutate([1,2,3,4,2], 2, 'lol')) // [1, "lol", 3, 4, "lol"]

//* Map(https://clck.ru/PWa8n)
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
//* Возвращаемое значение
// Новый массив, где каждый элемент является результатом callback функции.
//* Примеры

const ArrMap = [ {name: 'Vlad', budget: 3500}, {name: 'Ivan', budget: 3000}, {name: 'Adam', budget: 3500} ]

const newArr = ArrMap.map(function (person, index, pArr) {}) // приобразует текущий массив в новый
const newArr = ArrMap.map(person => {return 'hellow'}) // ['hellow','hellow','hellow'] 
const newArr = ArrMap.map(person => person.name) // ['Vlad','Ivan','Adam'] 
const newArr = ArrMap.map(person => `${person.name} (${person.budget})`) // ['Vlad (3500)','Ivan (3500)','Adam (3500)'] 
const newArr = ArrMap.map(person => person.budget * 2) // ['7000','6000', '7000'] 


//* filter
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
//* Примеры

const newArr = ArrMap.filter(person => person.budget >= 3500) // ['Vlad','Ivan','Adam'] 


//* Some(https://clck.ru/XGXRY)
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
//* Возвращаемое значение
// true, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.
//* Примеры


//* Reduce
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
//* Примеры

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; 

console.log(array1.reduce(reducer)); // 1 + 2 + 3 + 4 // expected output: 10
console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4 // expected output: 15


const ArrReduce = [ {name: 'Vlad', budget: 3500}, {name: 'Ivan', budget: 3000}, {name: 'Adam', budget: 3500} ]

const newArr = ArrReduce.reduce((acc, person) => acc + person.budget, 0) // 0 + 3500 + 3000 + 3500 = 10000
const newArr = ArrReduce.reduce((acc, person) => acc + person.budget, 10000) // 10000 + 3500 + 3000 + 3500 = 20000

const lettersCount = (str) => {
	str = str.toLowerCase().split('').reduce((acc, i) => {
		(!acc[i]) ? acc[i] = 1 : acc[i] = acc[i] + 1;
		return acc;
	}, {})
	return str
}
console.log(lettersCount('aAAbbccde')); // {a: 3, b: 2, c: 2, d: 1, e: 1,}

function replaceItemsClear(arr, item, replaceItem) {
	let newArr = arr.reduce((acc, currentValue, index) => {
		acc[index] = arr[index]
		if(arr[index] == item) {
			acc[index] = replaceItem
		}
		return acc
	}, [])
	return newArr	
}

console.log(replaceItemsClear([1,2,3,4,2], 2, 'lol')) // [1, "lol", 3, 4, "lol"]

//* find
// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
// Также смотрите метод findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения.
// Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте Array.prototype.indexOf() или Array.prototype.includes() соответственно.
//* Примеры
const Arrfind = [ {name: 'Vlad', budget: 3500}, {name: 'Ivan', budget: 3000}, {name: 'Adam', budget: 3500} ]
const newArrfind = Arrfind.find(person => person.name === 'Ivan') // {name: 'Ivan', budget: 3000}

//* FindIndex
// Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
//* Примеры

const ArrfindIndex = [ {name: 'Vlad', budget: 3500}, {name: 'Ivan', budget: 3000}, {name: 'Adam', budget: 3500} ]
const newArrfindIndex = ArrfindIndex.findIndex(person => person.name === 'Ivan') // 1


/**************************************************************************************************/
/**************************************************************************************************/







const allBudget = pepole
	.filter(person => person.budget > 2000)
	.reduce((acc, person) => {
	acc += person.budget
		return acc
}, 0)

