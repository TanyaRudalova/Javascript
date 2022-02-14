// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

   //  function numbers (num1, num2, num3) {
   //  if (num1 < num2 &&  num1 < num3)  {
   //      console.log (num1);
   //  }
   //  else if (num2 < num1 && num2 < num3) {
   //      console.log(num2)
   //      }
   //  else   {
   //      console.log(num3)
   //  }
   // }
   // numbers(3,10,1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//      function numbers (num1, num2, num3) {
//      if (num1 > num2 &&  num1 > num3)  {
//       console.log (num1);
//      }
//      else if (num2 > num1 && num2 > num3) {
//       console.log(num2)
//       }
//       else   {
//       console.log(num3)
//       }
//      }
//       numbers(3,1,10)


// - створити функцію яка повертає найбільше число з масиву
//    let arrayMax = [56,43,9,21,27,999]
//    function arrMax (maxNum) {
//    let max = maxNum[0]
//    for (const element of maxNum) {
//        if (element > max) {
//            max = element
//        }
//    }
//    return max
//    }
//   document.write(` <h2> Найбільший елемент масиву : ${ arrMax(arrayMax)  } </h2>`)


// - створити функцію яка повертає найменьше число з масиву
//    let arrayMin = [56,213,567,983, 21]
//    function arrMin (minNum) {
//    let min = minNum[0]
//        for (const element of minNum) {
//            if (element<min) {
//                min = element
//            }
//        }
//     return min
//     }
//     document.write(`<h2> Найменше число з масиву : ${arrMin(arrayMin)} </h2>`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//    let numbers = [2,5,9,1];
//    function arrayNum (num) {
//    let sum = 0
//    for (const element of num)  {
//        sum = sum + element;
//    }
//    return sum;
//    }
//    document.write(arrayNum(numbers))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let numbers2 = [2,5,9,1];
//     function arrayNumbers (numb) {
//     let sum =0
//     for (const element of numb)    {
//     sum = sum+ element /numb.length;
//     }
//     return sum
//     }
//     document.write(arrayNumbers(numbers2))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
//     function someNumbers (numbers) {
//     let max = arguments [0];
//     let min = arguments [0];
//     for (const element of arguments) {
//         if (element> max) {
//             max = element
//         }
//         if (element<min) {
//             min = element
//         }
//     }
//     return min;
//     }
//     document.write('Найменше число' + someNumbers(56,21,8907,432,12) )

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//    function random (length)  {
//    let array = []
//    for (let i = 0; i <length; i++) {
//            array.push(Math.floor(Math.random()*100));
//    }
//     return array
//    }
//    document.write(random(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
//    function randomNumb(limit,length) {
//     let array = []
//     for (let i = 0; i < length; i++) {
//     array.push(Math.floor(Math.random()*limit))
//       }
//      return array
//     }
//     document.write(randomNumb(678,23))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].  
// let array = [34,21,56,78,54,32]
//     function ritar(arr) {
//     let newArr = [];
//     for (let i =  arr.length-1, ri=0; i >= 0; i--, ri++) {
//         newArr[ri]= arr[i] ;
//     }
//     return newArr;
//     }
//     console.log(ritar([45,54,21,67,12]))


