import React, { useRef } from "react";
import "./style.sass";

export default function Form({liftingPost}) {
  const inputTitle = useRef();
  const checkboxCompleted = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let postTitle = inputTitle.current.value;
      let postCompleted = checkboxCompleted.current.checked;

      let request = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
          method: `POST`,
          body: JSON.stringify({ title: postTitle, completed: postCompleted }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

        liftingPost(response);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" ref={inputTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" ref={checkboxCompleted} />
      </label>
      <button>Add post</button>
    </form>
  );
}
