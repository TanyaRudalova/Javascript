// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let divOne = document.createElement('div');
divOne.innerText = 'Контейнер 1';
divOne.style.margin = '20px';
document.body.appendChild(divOne);

divTwo = document.createElement( 'div');
divTwo.innerText = 'Контейнер 2';
divTwo.style.margin = '20px';
document.body.appendChild(divTwo);

let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
divOne.appendChild(formOne);
let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');
divTwo.appendChild(formTwo);

let inputeOne = document.createElement('input');
inputeOne.setAttribute('name', 'inputeOne');
let inputeTwo = document.createElement('input');
inputeTwo.setAttribute('name', 'inputeTwo');
let inputeThree = document.createElement('input');
inputeThree.setAttribute('name', 'inputeThree');
let inputeFour = document.createElement('input');
inputeFour.setAttribute('name', 'inputeFour');

let button = document.createElement('button');
button.innerText = 'Send'

document.body.appendChild(button)

formOne.append(inputeOne, inputeTwo)
formTwo.append(inputeThree, inputeFour)

button.addEventListener('click', function () {
 console.log(document.forms.formOne.inputeOne.value)
 console.log(document.forms.formOne.inputeTwo.value)
 console.log(document.forms.formTwo.inputeThree.value)
 console.log(document.forms.formTwo.inputeFour.value)
  })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputOne = document.createElement('input')
let inputTwo = document.createElement('input')
let inputThree = document.createElement('input')
let buttonII = document.createElement('button')

buttonII.innerText  = 'Створити таблицю'
document.body.append(inputOne, inputTwo, inputThree, buttonII  )

buttonII.addEventListener('click', function () {
    let tr = inputOne.value
    let td= inputTwo.value
    let enterText = inputThree.value

function generationTable (tr, td, inner) {
   let table = document.createElement('table')
   let divTable = document.createElement('div')

   table.style.border = '1px solid red'
   divTable.appendChild(table)
   document.body.appendChild(divTable)

   for (let i=0; i<tr; i++) {
     let tr = document.createElement('tr')
     tr.style.border = '1px solid blue'

   for (let j=0; j<td; j++)  {
    let td = document.createElement('td')
    td.style.border = '1px solid green'
    td.innerText = `${inner}`
    table.appendChild(tr)
    tr.appendChild(td)
   }
   }
      }
 generationTable(tr, td, enterText)

})


// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let mates = [ 'дурак', 'ідіот', 'свиня']
let inputMate = document.createElement('input')
let buttonMate = document.createElement('button')
buttonMate.innerText = 'Перевірка'
document.body.append(inputMate, buttonMate)

buttonMate.addEventListener('click', function () {
    let valueInput = inputMate.value
    for (let mate of mates) {
        if (mate === valueInput) {
            alert ('Повторіть ')
            inputMate.value = ' '
            return
        }
    }
    if (valueInput) {
        alert('Молодець, ти чемний!');
        input.value = ''; // очищення строкипісля введення

    }
    })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let badWords = ['дурак', 'ідіот', 'свиня'];
let inputBadWords = document.createElement('input');
let buttonBadWords = document.createElement('button');
buttonBadWords.innerText = 'Перевірити речення';
document.body.append(inputBadWords, buttonBadWords);

buttonBadWords.addEventListener('click', function (){
    let valueBadWords = inputBadWords.value
    for (let badWord of badWords) {
        if (valueBadWords.toLowerCase().includes(badWord)) {
            alert('У реченні містяться погані слова')
            inputBadWords.value = ' '
            return
        }
        else {
            alert('Все ок')
            inputBadWords.value = ' '
        }
    }
    })
