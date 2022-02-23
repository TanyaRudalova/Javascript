// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car
function Car (model, producer, year, maxSpeed,engine)  {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
         if(typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };  
    this.changeYear = function (newValue) {
        this.year = newValue
    }; 
    this.addDriver = function (driver) {
     this.driver = driver
    };
}
let newCar = new Car('Tiguan', 'Wolkswagen', 2015, 190 , 2.4)
console.log(newCar)

newCar.drive()
newCar.info()
newCar.newMaxSpeed(90)
newCar.changeYear(2010)
newCar.addDriver('Petro')
console.log(newCar)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
         this.model = model;
         this.producer = producer;
         this.year = year;
         this.maxSpeed = maxSpeed;
         this.engine = engine;
         this.drive = function () {
           console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)
         };
         this.info = function () {
             for (const key in this) {
                 if(typeof this[key] !== 'function') console.log(`${key}- ${this[key]}`)
             }
         };
         this.newMaxSpeed = function (newSpeed) {
             this.maxSpeed = this.maxSpeed + newSpeed
         };
         this.newYear = function (newValue) {
             this.year = newValue
         };
         this.driver = function (driver) {
             this.driver= driver
         };
     }
  }
 let newCar2 = new Car2('KIA Sportage', 'KIA', 2015, 190, 2.3)
 console.log(newCar2 )
 newCar2.drive();
 newCar2.info();
 newCar2.newMaxSpeed(45);
 newCar2.newYear(2019)
 newCar2.driver('Oleh')
console.log(newCar2)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 class Cinderella {
     constructor(name, age, footsize) {
         this.name = name;
         this.age = age;
         this.footsize = footsize;
     }
  }
 let Cinderellas = [
  new Cinderella('Olya', 34, 39),
  new Cinderella('Oksana', 29, 38),
  new Cinderella('Mariya', 56, 40),
  new Cinderella('Ira', 21, 36),
  new Cinderella('Alina', 45, 41),
  new Cinderella('Uliana', 31, 35),
  new Cinderella('Tanya', 18, 38),
  new Cinderella('Katya', 33, 37),
  new Cinderella('Galyna', 49, 39),
  new Cinderella('Maryna', 19, 38)
 ];
 console.log(Cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 class Prince {
     constructor(name, age, findshoes) {
         this.name = name;
         this.age = age;
         this.findshoes = findshoes;
     }
 }
 let ThePrince= new Prince('Oleh', 30, 36)
 console.log(ThePrince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 let newCouple = (Cinderellas, ThePrince)=> {
     for (const value of Cinderellas) {
         if(value.footsize === ThePrince.findshoes) {
             return `Your cinderella is ${value.name}`
         }
     }
 }
 console.log(newCouple(Cinderellas, ThePrince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let couple = Cinderellas.find ((value)=> value.footsize === ThePrince.findshoes )
console.log(couple)