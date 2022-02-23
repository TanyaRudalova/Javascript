// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function Users(id, name, username,email, street, suite, city, zipcode, lat, lng, phone, website,
               companyName, catchPhrase, bs) {

  this['id']= id;
  this['name'] = name;
  this['username'] = username;
  this['email'] = email;
  this['adress'] =  {
      street : `${street}`,
      suite : `${suite}`,
      zipcode : `${zipcode}`,
      geo : {
          lat : `${lat}`,
          lng : `${lng}`
      }
  };
  this['phone'] = phone;
  this['website'] = website;
  this['company'] = {
      companyName : `${companyName}`,
      catchPhrase : `${catchPhrase}`,
      bs: `${bs}`
  };
 }

let newUsers = new Users(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light' , 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159, 81.1496,
    1-770-736-8031, 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets'  )
console.log(newUsers)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function DescriptionOfTag (titleOfTag, action, titleOfAttr ,actionOfAttr, titleOfAttr2, actionOfAttr2 ) {
    this['titleOfTag'] = titleOfTag;
    this['action'] = action;
    this['attrs'] = [   {
        titleOfAttr : `${titleOfAttr}`,
        actionOfAttr : `${actionOfAttr}`,
    }, {  titleOfAttr2 : `${titleOfAttr2}`,
        actionOfAttr2 : `${actionOfAttr2}`,
    }]
}

let newTag = new DescriptionOfTag('<a>', 'Тег <a> является одним из важных элементов HTML ' +
    'и предназначен для создания ссылок', 'accesskey', 'Активация ссылки с помощью ' +
    'комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.'
     )
console.log(newTag)

let newTag1 = new DescriptionOfTag(' <div>', 'Элемент <div> является блочным элементом ' +
    'и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align',
    'Задает выравнивание содержимого тега <div>.', 'title',
    'Добавляет всплывающую подсказку к содержимому.')
console.log(newTag1)

let newTag2 = new DescriptionOfTag('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок ' +
    'первого уровня', 'align', 'Определяет выравнивание заголовка.')
console.log(newTag2)

let newTag3 = new DescriptionOfTag('<span>', 'Тег <span> предназначен для определения ' +
    'строчных элементов документа.', 'dir', 'Задает направление и отображение текста — ' +
    'слева направо или справа налево.', 'hidden', 'Скрывает содержимое элемента от просмотра.')
console.log(newTag3)

let newTag4 = new DescriptionOfTag( '<input>', 'Тег <input> является одним из разносторонних ' +
'элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
 'alt', 'Альтернативный текст для кнопки с изображением.', 'autocomplete',
    'Включает или отключает автозаполнение.')
console.log(newTag4)

let newTag5 = new DescriptionOfTag('<form>', 'Тег <form> устанавливает форму на веб-странице.',
    'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и ' +
    'обрабатывать данные.', 'action', 'Адрес программы или документа, который обрабатывает ' +
    'данные формы.')
console.log(newTag5)

let newTag6 = new DescriptionOfTag('<option>', 'Тег <option> определяет отдельные пункты списка, ' +
    'создаваемого с помощью контейнера <select>.', 'disabled', 'Заблокировать для доступа элемент ' +
    'списка.', 'label', 'Указание метки пункта списка.')
console.log(newTag6)

let newTag7 = new DescriptionOfTag(' <select>', 'Тег <select> позволяет создать элемент интерфейса ' +
    'в виде раскрывающегося списка, а также список с одним или множественным выбором.', 'multiple',
    'Позволяет одновременно выбирать сразу несколько элементов списка.', 'name',
    'Имя элемента для отправки на сервер или обращения через скрипты.')
console.log(newTag7)
