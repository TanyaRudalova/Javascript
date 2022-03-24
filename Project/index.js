// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let usersContainer = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
 .then(value => value.json())
 .then( value => {
     for( const userItem of value) {
        let userContainer = document.createElement('div')
        userContainer.classList.add('user');
         let anchor = document.createElement('a')
         anchor.innerText = `${userItem.id} - ${userItem.name}`
         userContainer.appendChild(anchor)
         anchor.href = `./user-details.html?data=${JSON.stringify(userItem)}`
         usersContainer.appendChild(userContainer)
     }

 })

