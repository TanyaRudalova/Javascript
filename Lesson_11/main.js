// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.userForm.userName;
let age = document.forms.userForm.userAge;
let btn = document.getElementById('btn');
let key = 'key';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    }
    localStorage.setItem(key, JSON.stringify(user))
}
  btn.onclick = () => {
      save(name.value, age.value)
  };

  // -створити форму з інпутами для model,type та volume автівки.
//     при відпрaвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.carForm.model;  
let type =  document.forms.carForm.type; 
let volume = document.forms.carForm.volume; 
let btncar = document.getElementById('btncar');
let item = 'keyCar';

let saveCar = (modelCar, typeCar, volumeCar) => {

    let newarr = JSON.parse(localStorage.getItem(item)) || []
    newarr.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(item, JSON.stringify(newarr))
};
btncar.onclick = () => {
    saveCar(model.value, type.value, volume.value)
}