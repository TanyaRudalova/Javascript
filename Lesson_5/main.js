// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
//   let S = (a,b) => a*b ;
//   console.log(S(3,4))
//   document.write('Площа прямокутника :'+ S(3,4))

// - створити функцію яка обчислює та повертає площу кола
//    let S = (r) => {
//     return 2*3.14*r
//     }
//     console.log(S (3))
//     document.write('Площа кола:'+ S(3))

// - створити функцію яка обчислює та повертає площу циліндру
//     let area = (h,r)=> {
//     return (2*3.14* r*(r+h))
//     }
//     console.log(area(4,2))
//     document.write('Площа циліндра:'+ area(4,2))

// - створити функцію яка приймає масив та виводить кожен його елемент
//    let arrays = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i]);
//     }
//        }
//     arrays([456,321,952,645] )

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//    let creator = (txt)=> {
//     document.write(`<p> ${txt} </p> `)
//     document.write(`<p> ${txt} </p> `)
//     }
//    creator('Hello')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//   let someText = (txt)=> {
//     document.write(`<ul>`)
//     document.write(`<li> ${txt}</li>`)
//     document.write(`<li> ${txt}</li>`)
//     document.write(`<li> ${txt}</li>`)
//     document.write (`</ul>`)
//   }
//   someText('Hello!')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     let someText = (txt, length)=> {
//     document.write(`<ul>`)
//     for (let i=0; i<length; i++) {
//     document.write(`<li> ${txt}</li>`)
//     document.write(`<li> ${txt}</li>`)
//     document.write(`<li> ${txt}</li>`)
//     }
//     document.write (`</ul>`)
// }
//    someText('Hello!', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//    let array = (arr)=> {
//      document.write(`<ul>`)
//        for (let i=0; i<arr.length; i++) {
//        document.write(`<li> ${arr[i]}</li>`)
//        }
//        document.write (`</ul>`)
//    }
//    array([34,56,21342,3433, true, false, 'table', 'apple'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//     let objectCreator = (array)=> {
//     for (const arrayElement of array) {
//         document.write( `<div> ${arrayElement.id}, ${arrayElement.name}-${arrayElement.age}`)
//     }
//       }
//    objectCreator([{id: 43 , name: 'Olya', age: 21}, {id: 78, name: 'Petro', age: 34},
//     {id: 45, name: 'Vasyl', age:32}])