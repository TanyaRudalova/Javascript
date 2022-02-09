// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//       let numbers= [67, 89,45,23,43,];
//       let text = ['table', 'apple', 'pen', 'yellow', 'weather'];
//       let mix = [ 'Anya', 'Oleg', true, false, 76 ];
//       console.log ( numbers );
//       console.log(text);
//       console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
//    let array = [];
//      array [0]= 'Hello'
//      array [1]= 'How are you?'
//      array [2]= 'Are you ok today?'
//      array [3]= ':)'
//     console.log (array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//    for (let i=0; i< 10; i++ ) {
//       document.write( `<div>hello</div>`);
//     }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//      for (let i=0; i<10; i++) {
//          document.write(` <div> ${i}-some text</div>`)
//      }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//   let i=0
//   while (i<20) {
//     document.write(`<h1>some title</h1>`);
//     i++;
//   }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     let i = 0;
//     while (i<20) {
//         document.write(`<h1> ${i}some title</h1>`)
//         i++;
//         }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//    let arrTxt = [ 45, 56, 21, 1, 99, 145, 67, 32, 4,8 ];
//    for (i=0; i<arrTxt.length; i++) {
//        console.log (arrTxt [i] )
//    }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//        let arrNumbers = ['Table', 'Newspaper', 'Pen', 'Apple', 'Hair', 'Problems', 'Shine', 'Building',
//            'Flower', 'Car' ];
//        for (i=0; i<arrNumbers.length; i++ ) {  
//            console.log (arrNumbers [i])
//        }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. 
//       let array = [187, 675, 'Anya', 'Petro', 'Number', 45, 32, 'Okten', 'Girl', 12 ];
//       for (i=0; i<array.length; i++) {
//           console.log(array [i])
//       }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
//     let arrayBox = [ true, 'Anya', 'Petro', 67, 21, 90, 'Apple', false, 12, 'Number' ]
//     for (i=0; i<arrayBox.length; i++ ) {
//         if (typeof arrayBox[i] === 'boolean') {
//             console.log(arrayBox[i])
//         }
//         }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки числові елементи
//       let arrayBox = [ true, 'Anya', 'Petro', 67, 21, 90, 'Apple', false, 12, 'Number' ];
//       for (let i = 0; i < arrayBox.length; i++) {
//       if (typeof arrayBox[i]=== "number") {
//             console.log(arrayBox[i])
//       }

// }

// / - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести
// тільки рядкові елементи
//    let arrayBox = [ true, 'Anya', 'Petro', 67, 21, 90, 'Apple', false, 12, 'Number' ];
//     for (let i = 0; i < arrayBox.length; i++) {
//       if (typeof arrayBox[i] === "string")  {
//             console.log(arrayBox[i])
//       }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
//   let arr = []
//     arr[0] = 45;
//     arr[1]= 90;
//     arr[2]= true;
//     arr[3]= false;
//     arr[4]= 'Olya';
//     arr[5]= 'Perto';
//     arr[6]= 'Apple';
//     arr[7]= 'Car';
//     arr[8]= 23;
//     arr[9]= 1
//    for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
//    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
//     for (let i=0; i<10; i++) {
//           console.log('поточний крок циклу: '+i+' ')
//           document.write('поточний крок циклу: '+i+' ')
//     }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
//      for (let i=0; i<100; i++) {
//            console.log('поточний крок циклу: '+i+' ')
//           document.write('поточний крок циклу: '+i+' ')
//      }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// document.write
//         for (let i=0; i<100; i+=2 ) {
//         console.log('поточний крок циклу: '+i+' ')
//         document.write('поточний крок циклу: '+i+' ')
//          }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//      for ( let i=0; i<100; ) {
//            if ( i%2 ===0 )  {
//                  console.log('поточний крок циклу: '+i+' ')
//                  document.write('поточний крок циклу: '+i+' ')
//            }
//      }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//           for ( let i=0; i<100; i++ ) {
//           if ( i%2 ===1 )  {
//              console.log('поточний крок циклу: '+i+' ')
//              document.write('поточний крок циклу: '+i+' ')
//            }
//           }