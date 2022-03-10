// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let  contentById= document.getElementById('content');
console.log(contentById)

// -- отримує текст з блоку з id "rules"
let elementByRules = document.getElementById('rules')
console.log(elementByRules)

// -- замініть текст параграфа з id 'content' на будь-який інший
let changeContent= (contentById.innerHTML =  'Текст — середній елемент схеми комунікації, яку можна уявити у вигляді ' +
    'триелементної структури: автор (адресант) → текст → читач (адресат)'  )
console.log(changeContent)

// -- замініть текст параграфа з id 'rules' на будь-який інший
let changeRules = (elementByRules.innerHTML= 'Інформативність тексту — здатність тексту бути носієм завершеного ' +
    'повідомлення, передавати інформацію.' )
console.log(changeRules)

// -- змініть кожному елементу колір фону на червоний
let changeBackground = document.body.children
for ( const elements of changeBackground) {
    elements.style.backgroundColor = 'red'
}

// -- змініть кожному елементу колір тексту на синій
let changeColorText = document.body.children
for ( const elements of changeColorText ) {
    elements.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules')
console.log(rulesId.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let textColor = document.getElementsByClassName('fc_rules');
for (const element of textColor) {
    element.style.color = 'red'
}