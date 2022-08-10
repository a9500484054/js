// Отличия Колекции от массива
// 1.НЕ работают методы массивово
// 2.работает цикл for of
// Живая коллекция (querySelector) сразу видет изменения в DOM деревве 
// Статичная коллекция (getElementsByClassName)

// Поиск элементов HTML

const ElementById = document.getElementById('id')  //Поиск элемента по идентификатору элемента
const ElementByTagName = document.getElementsByTagName('div')// Поиск элементов по имени тега
const ElementClassName = document.getElementsByClassName('class')//Поиск элементов по имени класса
const ElementByName = document.getElementsByName('class')//Поиск элементов по атрибуту name


const htmlElement = document.documentElement // объект HTML 
const headElement = document.head // объект head
const bodyElement = document.body // объект Body


const firstChieldNode = bodyElement.firstChild // Выбирает первый дочерний элемент с узлами
const lastChieldNode = bodyElement.lastChild // Выбирает послений дочерний элемент с узлами

const ChieldNode = bodyElement.childNodes // Выбирает все дочерние элементы с узлами


const previousSiblingNode = bodyElement.previousSibling // Преведущий узел  
const nextSiblingNode = bodyElement.nextSibling // NaN
const parentNode = bodyElement.parentNode // Получить родителя элемента


const parentNode = bodyElement.children // Содержит элемент, без узлов. 


const firstChield = bodyElement.firstElementChild // Выбирает первый дочерний элемент(Теги) 
const lastChield = bodyElement.lastElementChild // Выбирает послений дочерний элемент(Теги)


const previousSibling = bodyElement.previousElementSibling // Преведущий узел  (Теги) 
const nextSibling = bodyElement.nextElementSibling // NaN 
const parentElement = bodyElement.parentElement // Получить родителя элемента (Теги) 


const oneElement = document.querySelector('.class')
const twoElement = document.querySelectorAll('.class')//('.class.class')('.class .class')('.class>li')('#id')('li.class')('[nameatribut]')('[nameatribut="90"]')

//Изменения 

elem.matches('[class$="btn--active"]') // проверяте класс возвращает boolen
elem.nextElementSibling('[class$="btn--active"]') // Выбирает следующий елемент  


elem.innerHTML // Получаем содержимое объекта
elem.innerHTML = 'loremloremloremloremloremloremloremlorem' // Добавляем текст в объект

elem.outerHTML // Получаем содержимое объекта и объект 
elem.outerHTML = 'loremloremloremloremloremloremloremlorem'  //

elem.textContent // Получаем только текст объекта 
elem.textContent = 'loremloremloremloremloremloremloremlorem' // отправляем стройкой, теги не видет  

elem.data // коменнтарии и узыл 
elem.data = 'loremloremloremloremloremloremloremlorem' // отправляем стройкой, теги не видет  




//Создание тегов 

const oneDiv = document.createElement('div') //создаем тег
const oneText = document.createTextNode('Текст') //создаем строку

//Вставляем тегов 

elem.before(oneDiv) 
elem.after(oneDiv) 
elem.prepend(oneDiv) 
elem.append(oneDiv) 
elem.append(oneDiv, 'Текст') 


elem.insertAdjacentHTML(
	'afterend',// Выбираем куда вставляем, 4 варианта 
	`<p>sdf;sdlfsdfsdf;lsdssds</p>` //Теги буду читаться в DOM Дереве
) 


elem.clonNode() //Клонирует объект
elem.remove() //удалиить 


elem.classList // Возвращет все классы 
elem.classList.add('active')
elem.classList.remove('active')
elem.classList.toggle('active')
elem.classList.contains('active') // проврека на boolean




elem.style.color = "red"
elem.style.marginBotttom = "29px"
elem.style.zIndex = "10"


elem.style.zIndex // Возвращает значения свойста, если оно прописанов style
elem.style.zIndex = "" // Удаляет значения свойста, если оно прописанов style


elem.style.cssText = `
	margin: 30px;
	padding: 30px;
	top: 30px;
	left: 30px;
`;


const elementStyle = getComputedStyle(element)
console.log(elementStyle.fontSize) // получаем занчение css свойста

const elementStyleBefore = getComputedStyle(element, "::before");
console.log(elementStyleBefore.color) // получаем занчение псевдоэлемента свойста 


const elementStyleParsen = getComputedStyle(element)
const elementStylePL = parseInt(elementStyleParsen.paddingLeft)
console.log(elementStylePL) // получаем занчение псевдоэлемента свойста Только цифры без единиц измерения 


elem.hasAttribute('name') //Наличие атрибута
elem.getAttribute('name') //значение атрибута
elem.setAttribute('name', 'value') //устанавливаем значение атрибута
elem.removeAttribute('name') //удаляем атрибут


console.dir()
console.log()


elem.dataset.size //???
elem.tagName //Возвращем имя 
elem.hidden = true // Скрываем объекта
elem.matches('[class$="btn--active"]')



for (let i = 0; i < massivClass.length; i++) {}
	

function clickClose(event) {
	let x = event.clientX
	
	if(x > 360) {
		let block = document.querySelectorAll('.blok-js-active')
	}
}

let elems = document.querySelectorAll('.cps-popap')

for(let elem of elems) {
	if(elem.matches('[class$="btn--active"]')) {
		
	}
}



	// let elemss = document.querySelectorAll('.cps-popap')
	window.onclick = function(event) {
		console.log(event.target)
		// if(event.target == elemss){
		// 	console.log('fdsdfsdf')
		// }
	}