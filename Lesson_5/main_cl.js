// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (a,b,c)=> {
    if (a<b && a<c) {
    console.log(a);
     }
    else if (b<a && b<c) {
     console.log(b);
     }
     else {
         console.log(c);
    }
    };
  minNum(7, 6, 9)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
  let maxNum = (a,b,c)=> {
    if (a>b && a>c) {
        console.log(a);
    }
    else if (b>a && b>c) {
        console.log(b);
      }
    else {
        console.log(c);
      }
   };
  maxNum(1,8,5)

// - створити функцію яка повертає найбільше число з масиву
  let maxArray = (arr)=> {
    let max = arr[0];
    for (const Element of arr) {
        if (Element>max) {
            max = Element
        }
    }
    return max;
  };
  document.write ( `<h2> Найбільший елемент масиву: ${maxArray([45,21,78])} </h2>` );


// - створити функцію яка повертає найменьше число з масиву
   let minArray = (arr)=> {
    let min = arr[0];
    for (const Element of arr) {
        if (Element < min) {
            min = Element
        }
    }
    return min;
   }
   document.write ( `<h2> Найменший елемент масиву: ${minArray([21,67,99,34])} </h2>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
    let array = (arr)=> {
    let sum = 0;
    for(const Elements of arr) {
    sum = sum + Elements
    }
     return sum;
    }
    document.write(array([45,21,99,56]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    const serArray = (arr)=> {
    let sum = 0;
    for (const element of arr) {
    sum = sum + element / arr.length
    }
    return sum;
    }
    document.write(serArray([4, 6,7,10]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
    const someNumb =(arg)=> {
    let max = arg[0];
    let min = arg[0];
    for(const element of arg) {
        if (element>max) {
            max = element;
        }
        if (element<min) {
            min = element;
        }
    }
       console.log("max ", max);
    return min;
    }
    document.write('Найменше число:' + someNumb([10,21,87,99]))


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//    let rundom =(length)=> {
//    let arr = [];
//    for (let i=0; i<length; i++) {
//       arr.push(Math.floor(Math.random()*100));
//    }
//    return arr
//    };
//    document.write(rundom(5))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
   let someRundom =(length, limit)=> {
   let arr = []
       for (let i = 0; i < length; i++) {
       arr.push(Math.floor(Math.random()*limit));
       }
       return arr
   }
  document.write(someRundom(7,900));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
   let arrayReverse = (arr)=> {
   let newArr = []
   for (let i= arr.length-1, ri=0; i>=0; i--, ri++ ) {
       newArr[ri]= arr[i]
   }
   return newArr;
   }
   console.log(arrayReverse([45,78,23,12]))