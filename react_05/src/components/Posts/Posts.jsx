import React, { useState, useEffect } from "react";

export default function Posts({post}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
          response = await request.json();

        setPosts(response.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(`in useEffect for props post`, post);
    
    if(Object.keys(post).length){
      setPosts((prevState) => [...prevState, post])
    }
  }, [post])

  const deletePost = async (id) => {
    try {
      let request = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          { method: `DELETE` }
        ),
        response = await request.json();

      setPosts((prevState) => prevState.filter((element) => element.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const completePost = async (item) => {
    try{
        let request = await fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
            method: `PATCH`,
            body: JSON.stringify({completed: !item.completed}),
            headers: {
                "Content-type": "application/json"
            }
        }),
            response = await request.json();

        setPosts((prevState) => prevState.map(element => {
            if(element.id === response.id) element = response;
            return element;
        }))
        
    } catch(err){
        console.log(err);
    }
    
  }

  return posts.length ? (
    <ul>
      {posts.map((item, index) => (
        <li key={index} style={{color: item.completed ? `green` : `red`}}>
          {item.title} <input type="checkbox" defaultChecked={item.completed} onChange={() => completePost(item)} />{" "}
          <button onClick={() => deletePost(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
