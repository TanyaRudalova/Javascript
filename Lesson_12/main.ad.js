// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//      Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
.then( response => {
    return response.json();
})
.then(users =>{
    let wraper = document.createElement('div')
    wraper.classList.add('wraper')
    for(const user of users) {
        let userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML =`
         <h3> Id:${user.id} </h3>
         <h4> Name: ${user.name} </h4>
         <h5> Username: ${user.username} </h5>  
         <h6> Address: {
              Street: ${user.street},
              Suite: ${user.suite} ,
              City: ${user.city} ,
              Zipcode: ${user.zipcode} ,  
              Geo : { 
                 Lat: ${user.lat} ,
                 Lng: ${user.lng},
              }  
     }   </h6>  
        <h7> Phone: ${user.phone} </h7>  
        <h8> Website: ${user.website }</h8>   
        <h9> Company: { 
            Name: ${user.company.name},  
            CatchPhrase: ${user.company.catchPhrase}, 
            BS: ${user.company.bs}
        } </h9>
     `;
     let buttonUser = document.createElement('button')
     buttonUser.innerText =  'Click posts'
     buttonUser.onclick = () => {
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(posts =>{
            for(const post of posts) {
                if(user.id === post.userId) {
                    let postDiv = document.createElement('div')
                    postDiv.classList.add('postDiv')
                    postDiv.innerHTML = ` 
                     <h3> ID: ${post.id} </h3>
                     <h4> Title: ${post.title} </h4>
                     <h5> Body: ${post.body}  </h5>
                     `;
                    let buttonComment = document.createElement('button')
                    buttonComment.innerText= 'Click comment'
                    buttonComment.onclick =() => {
                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then(response => response.json())
                            .then(comments => {
                                for (const comment of comments) {

                                    if (post.userId === comment.postId) {
                                        let divCardComments = document.createElement('div');
                                        divCardComments.classList.add('cardComments');
                                        divCardComments.innerHTML = `
                                <h3>ID: ${comment.id}</h3>
                                <h4>Name: ${comment.name}</h4>
                                <h5>Email: ${comment.email}</h5>
                                <h6>Body: ${comment.body}</h6>
                                `;
                                        postDiv.appendChild(divCardComments)
                                    }
                                    buttonComment.disabled = true;
                                }
                            })
                    }
                    postDiv.appendChild(buttonComment)
                    userDiv.appendChild(postDiv)
                }
                buttonUser.disabled = true;
            }
         })
     }
    userDiv.appendChild(buttonUser)
    wraper.appendChild(userDiv)
    document.body.appendChild(wraper)
    }
 })

