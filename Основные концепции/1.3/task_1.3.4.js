// *JS Core. Практическая задача 1.3.4
// getStringCount
// Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

// getStringCount
// ({
//   first: '1',
//   second: '2',
//   third: false,
//   fourth: ['anytime', 2, 3, 4 ],
//   fifth:  null,
// }); // 3

// getStringCount
// (['1', '2', ['3']]) // 3

// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount

let q = 0

// function getStringCount(object) {
//   console.log("Итерация ---------------------------: " + ++q)
  
//   let sum
//   if(sum === undefined)	sum = 0
//   console.log("Summa: " + sum)

//   const qweR = object.forEach(element => {
    
//     if (typeof element === 'string') {
//       sum++
//       console.log('Значение SUM-1: ' + sum)
//       // return sum + getStringCount(object)
//     } else if(typeof element ===  'object') {
//       const tesfs = object.forEach(elem => {
//         if (typeof elem === 'string') {
//           sum++
//           console.log('Значение SUM-2: ' + sum)
//         }
//       })
//       console.log('Есть объект')
//     }
    
//   })
  
//   return sum
// }



// console.log(getStringCount(['1', '2', ['3', '3']]))


function getStringCount(object) {
  let value
  if (value === undefined) value = 0

  let counter = object => {
    object.forEach(elem => {
      if(typeof elem === 'object' && elem !== null) {
        value += getStringCount(elem)
      } else if(typeof elem === 'string') {
          ++value
      } 
    })
  } 

  if(Array.isArray(object)) {
    counter(object)
  } else if(typeof object === 'object') {
    const keys = Object.keys(object)
    keys.forEach(key => {
      if(typeof object[key] === 'string'){
        ++value
      } else if(Array.isArray(object[key])) {
        counter(object[key])
      }
    })
  } else return false
  return value
}


const getStr = 
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 'anytime', 2, 'anytime', 4, ['anytime', 'anytime', 2, 'anytime', 4 ] ],
  fifth:  null,
  fourthd: ['anytime', 'anytime', 2, 'anytime', 4, ['anytime', 'anytime', 2, 'anytime', 4 ] ],
})

let koly = ['1', '2', '2','2','2', ['3', '3',  ['3',['3', '3']], null, ['3']]]

console.log(getStringCount(koly))
console.log(getStringCount(getStr))


// console.log(getStringCnt(getStr))
// console.log(getStringCount(['1', '2', ['3', '3'], ['3', '3']]))
// console.log(getStringCount(getStr))
// console.log(getStringCount(132))

