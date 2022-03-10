
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let array = []
for (const user of users) {
   for  (const userKey in user.address) {
       array.push(`${user.address[userKey]}`)
   }
}
console.log(array)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
for (const user of users) {
    let userDiv = document.createElement('div')

    let list = document.createElement('ul')

    let userName = document.createElement('li')
    userName.innerText = user.name

    let userAge = document.createElement('li')
    userAge.innerText = user.age

    let userStatus = document.createElement('li')
    userStatus.innerText = user.status

    let addressList = document.createElement('li')
    addressList.innerText = (`${user.address.city} ${user.address.country} ${user.address.street}  
        ${user.address.houseNumber}`)

   list.append(userName, userAge, userStatus, addressList )
   userDiv.appendChild(list)
   document.body.appendChild(userDiv)
 }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
for (const user2 of users) {
    let userDiv2 = document.createElement('div')

    let userName2 = document.createElement('div')
    userName2.innerText = user2.name

    let userAge2 = document.createElement('div')
    userAge2.innerText =user2.age

    let userStatus2 = document.createElement('div')
    userStatus2.innerText = user2.status

    let addressDiv2 = document.createElement('div')
    addressDiv2.innerText = (`${user2.address.city} ${user2.address.country} ${user2.address.street}  
        ${user2.address.houseNumber}`)

    userDiv2.append(userName2, userAge2, userStatus2, addressDiv2)
    document.body.appendChild(userDiv2)
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user3 of users) {
    let userDiv3 = document.createElement('div')

    let userName3 = document.createElement('div')
    userName3.innerText = user3.name

    let userAge3 = document.createElement('div')
    userAge3.innerText = user3.age

    let userStatus3 = document.createElement('div')
    userStatus3.innerText = user3.status

    let addressDiv3 = document.createElement('div')
    for (const addressDiv3Key in users.address) {
        let element = document.createElement('div')
        element.innerText = users.address[addressDiv3Key]
        addressDiv3.appendChild(element)
    }

    userDiv3.append(userName3, userAge3, userStatus3, addressDiv3)
    document.body.append(userDiv3)
}


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

for (const rule of rules) {
    let ruleDiv = document.createElement('div')

    let titleOfRule = document.createElement('div')
    titleOfRule.innerText = rule.title

    let bodyofRule = document.createElement('div')
    bodyofRule.innerText = rule.body

    ruleDiv.append(titleOfRule, bodyofRule)
    document.body.appendChild(ruleDiv)
}

//  - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
//  Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//  Cтворити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content
//  з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//  Скріпт повинен працювати навіть якщо кількість блоків з заголовком-->
//  та параграфом зміниться.-->

let content = document.getElementsByTagName('h2')
console.log(content)

let a = Array.from(content)
console.log(a)
let b = a.map(t => {return t.innerText})
console.log(b)

function someList (list) {
    document.write ( `<ul>`)
    for (let i = 0; i < list.length; i++) {
         document.write(`<li> ${list[i] } </li>`);
       }
    document.write ( `</ul>`)
}
someList(b)