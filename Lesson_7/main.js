// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
 }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
  let newUser = [
  new User (45, 'Olya', 'Kozlova', '456@gmail.com', 964352312),
  new User (678, 'Petro', 'Ilnets', 'first@gmail.com', 671233212),
  new User (231, 'Oleksandr', 'Mydruk', 'oleksandr@gmail.com', 679043678),
  new User (123, 'Kateryna', 'Bila', 'katya@gmail.com', 674563214),
  new User (987, 'Tanya', 'Horbal', 'tanya@gmail.com', 678903456),
  new User (34, 'Mykola', 'Fertsak', 'mykola@gmail.com', 975678432),
  new User (546, 'Stepan', 'Stupka', 'stepan@gmail.com', 673421567),
  new User (786, 'Volodymyr', 'Kryvko', 'volodya@gmail.com', 673452178),
  new User (12, 'Rostyslav', 'Petrov', 'rostik@gmail.com', 674321890),
  new User (378, 'Mariya', 'Buchko', 'mariya@gmail.com', 6732156765)
  ]
console.log(newUser)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id
// (filter)
let filter = newUser.filter(newUser=> newUser.id%2 ===0)
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = newUser.sort((a,b)=> a.id-b.id)
console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname, email, phone, order
// (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let newClient = [
    new Client (678, 'Olya', 'Borova', 'olya@gmail.com', ['bread', 'eggs', 'meat']),
    new Client (234, 'Petro', 'Olekseev', 'petro@gmail.com', ['apple', 'sweets']),
    new Client (90, 'Oleksandr', 'Petrov', 'petro@gmail.com', ['chiken',
        'fruits', 'sweets', 'potato', 'cheese']),
    new Client (489, 'Borys', 'Sidelko', 'borys@gmail.com', [ 'fish', 'rice']),
    new Client (34, 'Oksana', 'Kozlova', 'oksana@gmail.com', ['chiken']),
    new Client (156, 'Kyrylo', 'Babkin', 'kyrylo@gmail.com', ['meat', 'tomatos',
        'cheese']),
    new Client (398, 'Tanya', 'Buchko', 'tanya@gmail.com', ['eggs']),
    new Client (456, 'Stepan', 'Stupka', 'stepan@gmail.com', ['chiken', 'fruits',
    'potatos', 'lemon', 'rice', 'water']),
    new Client (612, 'Oleksiy', 'Maslov', 'oleksiy@gmail.com', ['friuts']),
    new Client (98, 'Danylo', 'Mydruk', 'dnylo@gmail.com', ['meat', 'eggs'])
   ]
console.log(newClient)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// по зростанню. (sort)
let sortClients = newClient.sort((a,b)=> a.order.length - b.order.length)
console.log(sortClients)

