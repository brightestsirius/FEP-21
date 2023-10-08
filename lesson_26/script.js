// Promise
// 🟢🔴🥳⛔️

// let ifOk = false;

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         ifOk ? resolve(`TO 1 RESOLVE`) : reject(`TO 1 REJECT`);
//     }, 1000)
// })

// myPromise
//     .then(
//         (value) => {
//             console.log(`🟢 in 1 resolve`, value);
//             return `TO 2 RESOLVE`;
//         },
//         (value) => {
//             console.log(`🔴 in 1 reject`, value);
//             return Promise.reject(value);
//         },
//     )
//     .finally(
//         () => {
//             console.log(`🥳 in 1 finally`)
//         }
//     )
//     .then(
//         (value) => {
//             console.log(`🟢 in 2 resolve`, value);
//             return `TO 3 RESOLVE`;
//         }
//     )
//     .finally(
//         () => {
//             console.log(`🥳 in 2 finally`)
//         }
//     )
//     .catch(
//         (value) => {
//             console.log(`⛔️ in catch`, value);
//             return Promise.reject(`TO 3 REJECT`);
//         }
//     )
//     .finally(
//         () => {
//             console.log(`🥳 in 3 finally`)
//         }
//     )
//     .then(
//         (value) => {
//             console.log(`🟢 in 3 resolve`, value);
//         },
//         () => {
//             console.log(`🔴 in 3 reject`);
//         }
//     )
//     .finally(
//         () => {
//             console.log(`🥳 in 4 finally`)
//         }
//     )

// setTimeout(() => {
//     console.log(`first`);

//     setTimeout(() => {
//         console.log(`second`);

//         setTimeout(() => {
//             console.log(`third`)
//         }, 1500);

//     }, 2000);

// }, 1000);

// let timeoutPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(`after first timeout`);
//         resolve();
//     }, 1000)
// })

// timeoutPromise
//     .then(
//         () => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log(`after second timeout`);
//                     resolve();
//                 }, 2000)
//             })
//         }
//     )
//     .then(
//         () => {
//             return new Promise((resolve => {
//                 setTimeout(() => {
//                     console.log(`after third timeout`);
//                     resolve();
//                 }, 1500)
//             }))
//         }
//     )
//     .then(
//         () => {
//             console.log(`rendering`);
//         }
//     )

// fetch();

// const posts = fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log(posts);

// posts
//     .then(
//         (response) => {
//             console.log(response);

//             if(response.ok){
//                 return response.json();
//             } else{
//                 return Promise.reject(response.status);
//             }
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//         }
//     )
//     .catch((data) => {console.log(`in catch: ${data}`)})

// 100-199: info
// 200-299: ok
// 300-399: ok
// 400-499: error
// 500-599: error service

// let getPosts = fetch(`https://jsonplaceholder.typicode.com/posts`);

// getPosts
//     .then(
//         (response) => {
//             console.log(response);
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         (posts) => {
//             console.log(posts);

//             let lastPost = posts[posts.length-1];
//             console.log(lastPost);

//             return fetch(`https://jsonplaceholder.typicode.com/users/${lastPost.userId}`);
//         }
//     )
//     .then(
//         (response) => {
//             console.log(response);
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         (user) => {
//             console.log(user);
//         }
//     )
//     .catch((err) => {console.log(`in catch, ${err}`)})

// const API = `https://jsonplaceholder.typicode.com`;
// const fetchData = [];

// const posts = fetch(API+`/posts`);

// posts
//     .then(
//         (response) => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         (posts) => {
//             console.log(posts);
//             fetchData.push(posts[0]);
//             console.log(fetchData);
//         }
//     )
//     .then(
//         () => fetch(API+`/todos`)
//     )
//     .then(
//         (response) => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         (todos) => {
//             console.log(todos);
//             fetchData.push(todos[0]);
//             console.log(fetchData);
//         }
//     )
//     .then(
//         () => fetch(API+`/users`)
//     )
//     .then(
//         (response) => {
//             if(response.ok) return response.json();
//             else return Promise.reject(response.status);
//         }
//     )
//     .then(
//         (users) => {
//             console.log(users);
//             fetchData.push(users[0]);
//             console.log(fetchData);
//         }
//     )
//     .then(() => {
//         console.log(`in final then`);
//         console.log(fetchData);
//         // const ul = document.createElement(`ul`);

//         // fetchData
//         //     .forEach(item => {
//         //         const li = document.createElement(`li`);
//         //         li.innerHTML = item;
//         //         ul.append(li);
//         //     })

//         // document.body.append(ul);
//     })
//     .catch((status) => {
//         console.log(`in catch, ${status}`);
//     })


// Promise
//     .all(
//         [
//             fetch(API+`/posts`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/todos`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/users`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 })
//         ]
//     )
//     .then(
//         data => {
//             console.log(data);
//             return data.map(item => item[0]);
//         }
//     )
//     .then(data => console.log(data))
//     .catch(err => console.log(`in catch: ${err}`))


// Promise
//     .allSettled(
//         [
//             fetch(API+`/posts`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/toding`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/usering`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 })
//         ]
//     )
//     .then(
//         data => {
//             console.log(data);

//             let fulfilledFetches = data
//                 .filter(item => item.status === `fulfilled`);

//             if(fulfilledFetches.length){
//                 return fulfilledFetches.map(item => item.value);
//             } else{
//                 return Promise.reject(data.map(item => item.reason))
//             }
//         }
//     )
//     .then(data => console.log(data))
//     .catch(err => console.log(`in catch:`, err))

// Promise
//     .race(
//         [
//             fetch(API+`/posts`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/todos`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 }),
//             fetch(API+`/users`)
//                 .then(response => {
//                     if(response.ok) return response.json();
//                     else return Promise.reject(response.status);
//                 })
//         ]
//     )
//     .then(
//         data => console.log(data)
//     )
//     .catch(err => console.log(`in catch:`, err))

// CRUD

const API = `https://jsonplaceholder.typicode.com`;


const posts = fetch(API+`/posts`);

posts
    .then(
        (response) => {
            if(response.ok) return response.json();
            else return Promise.reject(response.status);
        }
    )
    .then(
        (posts) => {
            const postsSelect = document.createElement(`select`);
            postsSelect.addEventListener(`change`, event => {
                let selectedPostId = event.target.value;
                console.log(selectedPostId);

                fetch(API+`/posts/${selectedPostId}`)
                    .then(
                        (response) => {
                            if(response.ok) return response.json();
                            else return Promise.reject(response.status);
                        }
                    )
                    .then(
                        (post) => {
                            console.log(post);
                        }
                    )
                    .catch(err => console.log(`in catch, ${err}`));
            })

            posts
                .forEach(item => {
                    const option = document.createElement(`option`);
                    option.innerHTML = `Post #${item.id}`;
                    option.value = item.id;

                    postsSelect.append(option);
                })

            document.body.append(postsSelect);
        }
    )
    .catch((err) => {
        console.log(`in catch: ${err}`);
    })

// async/await