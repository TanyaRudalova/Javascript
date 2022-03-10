// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let addClass = document.getElementById('main_header')
     console.log(addClass)
addClass.classList.add('group')


// b) робить шириниу елементу ul 400px
let ulwidth = document.getElementsByTagName('ul')
console.log(ulwidth)
 ulwidth[0].style.width = '400px';
 ulwidth[0].style.border = '1px solid red';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListWidth = document.getElementsByClassName('linkList')
console.log(linkListWidth);
for (const element of linkListWidth) {
    element.style.width = '50%';
    element.style.border = '1px solid red';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let liText = document.getElementsByClassName('listElement2')
console.log(liText)
liText[0].innerHTML = '<a href = ""> <b>New text</b> </a>'

// e) отримує всі елементи li та змінює ім колір фону на сірий
let newColor  = document.getElementsByTagName('li')
console.log(newColor)
for (const element of newColor) {
    element.style.backgroundColor = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let newClass = document.getElementsByTagName('a')
console.log(newClass)
for (const elements of newClass) {
    elements.classList.add ('anchor')
    console.log(elements)
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів
let changeText = document.getElementsByTagName('a')
console.log(changeText);
for (let element of changeText) {
    console.log(element)
    if (element.innerText === 'link 3')  {
        element.style.fontSize = '120px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aElement = document.getElementsByTagName('a')
// console.log(aElement)
// for (let element of aElement) {
//     console.log(element)
//     let newClass = element.innerText
//     element.classList.add(`element_${newClass}`)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let newBackground = document.getElementsByClassName('sub-header')
for (const element of newBackground) {
element.style.color = prompt('Enter color : (red,  green, blue')
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment .
// Колір отримати з prompt()
let newColorText = document.getElementsByClassName('sub-header')
for (const element of newColorText) {
    console.log(element)
    if(element.innerText === 'content 2 segment') {
        element.style.color = prompt('Enter color of text : (red,  green, blue')
    }
}


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1')
console.log(content_1[0].innerText)
content_1[0].innerText = prompt('Enter new text')


// l) отримати елементи p та змінити їм padding на 20px
let paddingNew = document.getElementsByTagName('p')
for( const element of paddingNew ) {
    element.style.padding = '20px'
    element.style.border = '1px solid green'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2')
console.log(text2)
text2[0].innerText = 'dec - 2021'