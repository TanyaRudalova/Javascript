// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

 let lengthOne = 'hello world'
console.log(lengthOne.length);

let lengthTwo = 'lorem ipsum'
console.log(lengthTwo.length);

let lengthThree = 'javascript is cool'
console.log(lengthThree.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem

let A = 'hello world'
let upperLs = A.toUpperCase()
console.log(upperLs)

let B= 'lorem ipsum'
let upperB = B.toUpperCase()
console.log(upperB)

let C = 'javascript is cool'
let upperC = C.toUpperCase()
console.log(upperC)


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let D = 'HELLO WORLD'
let lowerD = D.toLowerCase()
console.log(lowerD);

let E = 'LOREM IPSUM'
let lowerE = E.toLowerCase()
console.log(lowerE);

let F = 'JAVASCRIPT IS COOL'
let lowerF = F.toLowerCase()
console.log(lowerF);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr =  '  dirty string  '
let clear = dirtyStr.trim()
console.log(clear)



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let someString = 'Каждый охотник желает знать';
let arr= someString.split(' ')
document.write(arr)
console.log(arr)

let array = (someString) => {
 return someString.split(' ')
}
document.write(array('Каждый охотник желает знать'))


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
// кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

   // let str = 'Каждый охотник желает знать';
   // let delete_characters = str.substring(0, 7)
   // console.log( delete_characters)

  let str = 'Каждый охотник желает знать';
  let delete_characters = (str, index) => {
  return str.substring(0, index )
   }
  console.log(delete_characters(str,7))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

   // let str = "HTML JavaScript PHP";
   // let insert_dash =  str
   //                       .replaceAll(' ', '-')
   //                       .toUpperCase()
   // console.log(insert_dash)

   let insert_dash = (String) => {
      return String
                    .replaceAll(' ', '-')
                    .toUpperCase()
   }
   document.write(insert_dash('HTML JavaScript PHP'))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього
// регістру у верхній.

   let firstUpp = (text) => {
   if (!text) return text;
   return text[0].toUpperCase() + text.slice(1)
   };
   console.log(firstUpp('hello, my name is Petro'))
   document.write(firstUpp('hello, my name is Petro'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


  let capitalize = (string) => {
  return string.split(' ').map(word=> word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
  };
  console.log(capitalize('have a wonderful time'))
  document.write(capitalize('have a wonderful time'))






