//* Задача 1.2.2
// Letters Count
// Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

// Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

// Пример:

// console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }

const lettersCount = (str) => {
	let newStr = str.toLowerCase().split('').reduce((acc, i) => {
		if (!acc[i]) {
			acc[i] = 1;
		} else {
			acc[i] = acc[i] + 1;
		}
		return acc;
	}, {});
	return newStr
}


console.log(lettersCount('aAAbbccde'))