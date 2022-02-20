// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
  let n1 = 'Harry..Potter'
  let n2 = 'Ron---Whisley'
  let n3 = 'Hermione__Granger'
  let newName = (string, symbol)=> {
      let newArr = []
      if (string.includes(symbol)) {
          let a = string.split(symbol)
          a.forEach((item) => {
              if (item) newArr.push(item)
          })
          console.log(newArr.join(' '))
      } return newArr
  }
newName(n1, '.')
newName(n2, '-')
newName(n3, '_')


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

 let random = (length)=> {
     let arr = []
     for (let i = 0; i < length; i++) {
       arr.push(Math.floor(Math.random(length)*100))
     }
  return arr
}
 let result = random(10)
 console.log(result)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
  let sortArr1 = result.sort((a,b)=> a-b)
 console.log(sortArr1)
  let sortArr2 = result.sort((a,b)=> b-a)
 console.log(sortArr2)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
 let evenFilter = (length,numb)=> {
 let emptyarray = [];
     for (let i = 0; i <length; i++) {
     emptyarray.push(Math.floor(Math.random()*numb))
     }
 return emptyarray.filter(value => value%2 ===0 )
}
 console.log(evenFilter(10,100))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let mapArr = (length, numbr) => {
    let emptArr = [];
    for (let i = 0; i <length; i++) {
        emptArr.push(Math.floor(Math.random()*numbr))
    }
    return emptArr.map(value => value.toString())
}
console.log(mapArr(10,100))


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

 let sortNums = (arr, direction) => {
 if (direction === 'asc') return arr.sort( (a,b)=> a-b );
 if (direction === 'des') return arr.sort( (a,b)=> b-a);
 };
 console.log (sortNums([5,18,21,34,1, 99, 543],'asc') )
 console.log(sortNums([54,99,321,1,32,654,21], 'des') )

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortDescending = coursesAndDurationArray.sort((a,
 b)=> b.monthDuration - a.monthDuration )
console.log(sortDescending)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArray = coursesAndDurationArray.filter(coursesAndDurationArray=>coursesAndDurationArray.monthDuration> 5);
console.log(filterArray)

