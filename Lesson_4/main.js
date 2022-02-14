// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//    function Area (a,b) {
//      return  a * b;
//    }
//    console.log (Area (6,2))
//   document.write('Площа прямокутника:' + Area (6,2) )


// - створити функцію яка обчислює та повертає площу кола з радіусом r  
//     function f(r) {
//     return (3.14*r)
//     }
//     console.log (f (6))
//     document.write('Площа кола:' + f (6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//        function areaOfCylinder (h,r) {
//         return (2*3.14* r*(r+h))
//       }
//       console.log ( areaOfCylinder(4,2))
//       document.write('Площа циліндра:' + areaOfCylinder(4,2))

// - створити функцію яка приймає масив та виводить кожен його елемент
//    let array = [567, 321, 543, 999, 'table', 'window']
//    function iteratorOfArray (array) {
//      for (let i = 0; i < array.length; i++) {
//        document.write(array[i])
//      }
//        }
//        iteratorOfArray(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     function txtCreator (someText) {
//      document.write(`<p> ${someText} </p>` )
//      document.write(`<p> ${someText} </p>` )
//      }
//      txtCreator('hello')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//    function someList (list) {
//        document.write ( `<ul>`)
//        document.write ( `<li> ${list}  </li>` )
//        document.write ( `<li> ${list}  </li>` )
//        document.write ( `<li> ${list}  </li>` )
//        document.write ( `</ul>`)
//    }
//      someList ('Hello okten')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     function someList (list, counter) {
//         for (let i = 0; i < counter; i++) {
//
//             document.write ( `<ul>`)
//             document.write(`<li> ${list}  </li>`)
//             document.write(`<li> ${list}  </li>`)
//             document.write(`<li> ${list}  </li>`)
//             document.write ( `</ul>`)
//         }
//     }
//      someList ('Hello okten' ,5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//      let list = [45, 67, 21, true, false, 'apple', 'table']
//      function somelist (setOfList) {
//             document.write ( `<ul>`)
//        for (let i = 0; i < setOfList.length; i++) {
//          document.write(`<li> ${setOfList[i] } </li>`);
//        }
//        document.write ( `</ul>`)
//      }
//      somelist(list)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//     let array = [ {id : 43567, name : 'Olya', age : 21}, {id : 78654, name : 'Petro', age : 34},
//       {id : 90876, name : 'Oksana', age : 56}  ]
//
//       function arrObject (arr) {
//         for (const arrElement of arr) {
//           document.write(`<div> ${arrElement.id} .${arrElement.name} - ${arrElement.age}</div>`)
//         }
//       }
//       arrObject(array)

