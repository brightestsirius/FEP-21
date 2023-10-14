// async/await

const API = `https://jsonplaceholder.typicode.com`;

// fetch(API+`/posts`)
//     .then(
//         response => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         posts => {
//             console.log(posts);

//             let lastPost = posts[posts.length-1];
//             return fetch(API+`/posts/${lastPost.id}`);
//         }
//     )
//     .then(
//         response => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         lastPost => {
//             console.log(lastPost);

//             let userId = lastPost.userId;
//             return fetch(API+`/users/${userId}`);
//         }
//     )
//     .then(
//         response => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         user => {
//             console.log(user);
//         }
//     )
//     .catch(err => console.log(`in catch: ${err}`));

// const statusResult = (value) => console.log(`in statusResult: ${value}`);


// async function getData(){
//     try{
//         let requestPosts = await fetch(API+`/posts`); // Promise<pending> || Response
//         statusResult(`1/3`);

//         // if(requestPosts.ok){
//         //     let posts = await requestPosts.json();
//         //     console.log(posts);
//         // } else{
//         //     throw new Error(requestPosts.status) ;
//         // }

//         if(!requestPosts.ok) throw new Error(requestPosts.status);

//         let posts = await requestPosts.json();
//         console.log(posts);

//         let lastPostId = posts[posts.length-1].id;

//         let requestLastPost = await fetch(API+`/posts/${lastPostId}`); // Response
//         statusResult(`2/3`);

//         if(!requestLastPost.ok) throw new Error(requestLastPost.status);
//         let lastPost = await requestLastPost.json();

//         console.log(lastPost);

//         let lastPostUserId = lastPost.userId;

//         let requestUser = await fetch(API+`/users/${lastPostUserId}`);
//         statusResult(`3/3`);

//         if(!requestUser.ok) throw new Error(requestUser.status);
//         let user = await requestUser.json();

//         console.log(user);

//     } catch(err){
//         console.log(err);
//     } finally{
//         console.log(`in finally`);
//     }
// }

// getData();

// const addPost = document.querySelector(`#addPost`);

// if(addPost){
//     addPost.addEventListener(`submit`, async e => {
//         e.preventDefault();

//         const title = e.target.querySelector(`input[data-name="title"]`).value;
        
//         let post = {title};
//         console.log(post);

//         try{
//             let sendPost = await fetch(
//                 API+`/posts`, 
//                 {
//                     method: `POST`,
//                     body: JSON.stringify(post),
//                     headers: {
//                         "Content-type": "application/json"
//                     }
//                 }
//             );

//             if(!sendPost.ok) throw new Error(sendPost.status);

//             let addedPost = await sendPost.json();
//             console.log(addedPost);
//         } catch(err){
//             console.log(err);
//         }

        
//     })
// }

// OPTIMIZATION

const JSONPLACEHOLDER_REST = {
    get: (path, id) => fetch(API+`/${path}${id ? `/${id}` : ``}`),
    put: (path, id, obj) => fetch(API+`/${path}/${id}`, {
        method: `PUT`,
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }),
    patch: (path, id, obj) => fetch(API+`/${path}/${id}`, {
        method: `PATCH`,
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }),
    post: (path, obj) => fetch(API+`/${path}`, {
        method: `POST`,
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }),
    delete: (path, id) => fetch(API+`/${path}/${id}`, {
        method: `DELETE`
    })
}

const exampleRest = async () => {

    try{

        // GET
        let requestTodos = await JSONPLACEHOLDER_REST.get(`todos`);
        if(!requestTodos.ok) throw new Error(requestTodos.status);
        let todos = await requestTodos.json();

        console.log(todos);

        // GET
        let requestTodo = await JSONPLACEHOLDER_REST.get(`todos`, 1);
        if(!requestTodo.ok) throw new Error(requestTodo.status);
        let todo = await requestTodo.json();

        console.log(todo);

        // PUT
        let putRequest = await JSONPLACEHOLDER_REST.put(`todos`, 1, {...todo, completed: !todo.completed})
        if(!putRequest.ok) throw new Error(putRequest.status);
        let putResponse = await putRequest.json();

        console.log(putResponse);

        // PATCH
        let patchRequest = await JSONPLACEHOLDER_REST.patch(`todos`, 1, {userId: 2});
        if(!patchRequest.ok) throw new Error(patchRequest.status);
        let patchResponse = await patchRequest.json();

        console.log(patchResponse);

        // POST
        let postRequest = await JSONPLACEHOLDER_REST.post(`todos`, {title: `New post`, userId: 13, completed: true});
        if(!postRequest.ok) throw new Error(postRequest.status);
        let postResponse = await postRequest.json();

        console.log(postResponse);

        // DELETE
        const deleteRequest = await JSONPLACEHOLDER_REST.delete(`todos`, 1);
        if(!deleteRequest.ok) throw new Error(deleteRequest.status);
        let deleteResponse = await deleteRequest.json();

        console.log(deleteResponse);

    } catch(err){
        console.log(err);
    }

}

exampleRest();