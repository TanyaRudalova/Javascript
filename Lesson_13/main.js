// console.log('start');
// setTimeout(() => {
//     let counter = 0;
//     console.log('do1', counter);
//     setTimeout(() => {
//         counter++;
//         console.log('do2', counter);
//         setTimeout(() => {
//             counter++;
//             console.log('do', counter);
//             setTimeout(() => {
//                 counter++;
//                 console.log('do', counter);
//                 setTimeout(() => {
//                     counter++;
//                     console.log('do', counter);
//                     setTimeout(() => {
//                         counter++;
//                         console.log('do', counter);
//                         setTimeout(() => {
//                             counter++;
//                             console.log('do', counter);
//                         }, 3000)
//                     }, 3000)
//                 }, 3000)
//             }, 3000)
//         }, 3000)
//     }, 2500)
// }, 2000);
// console.log('end');

console.log('start');
setTimeout( () =>{
let counter = 0;
console.log('Дзвінок будильника', counter);
    setTimeout( () => {
    counter++;
    console.log('Підйом', counter);
       setTimeout( () => {
       counter++;
       console.log('Почистити зуби', counter);
         setTimeout( () => {
         counter++;
         console.log('Сніданок', counter);
            setTimeout( () => {
            counter++;
            console.log('Вдягнутись і вийти з дому', counter);
              setTimeout( () => {
              counter++;
              console.log('Робота', counter);
                 setTimeout( () => {
                 counter++;
                 console.log('Обідня перерва', counter);
                    setTimeout( () => {
                    counter++;
                    console.log('Повернутись додому', counter);
                        setTimeout( () => {
                        counter++;
                        console.log('Вечеря', counter);
                            setTimeout( () => {
                            counter++;
                            console.log('Лекція в okten або виконання д/з', counter);
                        },11000);
                    },10000);
                 },9000);
              }, 8000);
            },7000);
         },6000);
       },5000);
    },4000);
  }, 3000);
}, 2000);
console.log('end');



new Promise ( (resolve, reject) => {
    let counter = 0;
    setTimeout(() => {
        console.log('Дзвінок будильника', counter);
        counter++;
        resolve(counter);
    }, 1000)
})
     .then( (counter) => {
     console.log(counter);
     return new Promise ( (resolve, reject) => {
     setTimeout( () =>{
     console.log('Підйом', counter);
     counter++;
     resolve(counter);
     },2000)
     } )
     } )
         .then( (counter) => {
         return new Promise ( (resolve, reject) => {
         setTimeout( () => {
         console.log('Почистити зуби', counter);
         counter++;
         resolve(counter);
         },3000)
         } )
         } )
              .then( (counter) => {
              return new Promise ( (resolve, reject) => {
              setTimeout( ()=> {
              console.log('Сніданок', counter);
              counter++;
              resolve(counter);
              },4000 )
              } )
              } )
                 .then( (counter) =>{
                 return new Promise ( (resolve, reject) => {
                 setTimeout( () => {
                 console.log('Вдягнутись і вийти з дому', counter);
                 counter++;
                 resolve(counter);
                 },5000)
                 } )
                 } )
                    .then( (counter) => {
                    return new Promise ( (resolve, reject) => {
                    setTimeout( () => {
                    console.log('Робота', counter);
                    counter++;
                    resolve(counter);
                    },6000)
                    } )
                    } )
                        .then( (counter) => {
                        return new Promise ( (resolve, reject) => {
                        setTimeout( () => {
                        console.log('Обідня перерва', counter);
                        counter++;
                        resolve(counter);
                        },7000)
                        })
                        })
                             .then( (counter)=> {
                             return new Promise( (resolve, reject) => {
                             setTimeout( () => {
                             console.log('Повернутись додому', counter);
                             counter++;
                             resolve(counter);
                             },8000 )
                             })
                             })
                                 .then( (counter) => {
                                 return new Promise( (resolve, reject) => {
                                 setTimeout( () => {
                                 console.log('Вечеря', counter);
                                 counter++;
                                 resolve(counter);
                                 },9000)
                                 })
                                 })
                                     .then( (counter) => {
                                     return new Promise( (resolve, reject) => {
                                     setTimeout( () => {
                                     console.log('Лекція в okten або виконання д/з', counter);
                                     counter++;
                                     resolve(counter);
                                     }, 10000)
                                     })
                                     })

