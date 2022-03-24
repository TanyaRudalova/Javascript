let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('data'))
console.log(user)

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
userDetailsContainer.innerText = `  
          Id:${user.id} ,
          Name: ${user.name},
          Username: ${user.username} ,  
          Address: 
             Street: ${user.address.street},
             Suite: ${user.address.suite} ,
             City: ${user.address.city} ,
          Zipcode: ${user.address.zipcode} 
          Geo : (
                 Lat: ${user.address.geo.lat},
                 Lng: ${user.address.geo.lng} 
                    )   
          Phone: ${user.phone},
        Website: ${user.website},
        Company:
            Name: ${user.company.name},
            CatchPhrase: ${user.company.catchPhrase},
            BS: ${user.company.bs}
 `;


let postsContainer = document.getElementsByClassName('posts')[0];
let postDetailsButton = document.getElementsByClassName('postDetailsButton')[0];
postDetailsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json() )
            .then(value => {
                for (const postItem of value) {
                    let postContainer = document.createElement('div')
                    postContainer.classList.add('post')
                    postContainer.innerText = postItem.title;
                    let postDetailsButton = document.createElement('button')
                    postDetailsButton.innerText = 'Post details'
                    postDetailsButton.onclick = function () {
                        location.href = `./post-details.html?data=${JSON.stringify(postItem)} `
                    };
                    postContainer.appendChild(postDetailsButton)
                    postsContainer.appendChild(postContainer)

                }
            })
}

