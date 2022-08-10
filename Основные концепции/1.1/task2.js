//* задача 1.1.14
// Default To
// Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию. Если нет, то нужно вернуть само значение (первый аргумент).

// Пример:

// console.log(defaultTo(1, 10)); // 1;
// console.log(defaultTo(undefined, 10)); // 10;


const defaultTo = (value, defaultValue) => {
	if(isNaN(value) == true || value == null || value == undefined) {
			return defaultValue
		} else {
			return value
		}

};