import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { v4 as uuidv4 } from 'uuid';

const PostForm = ({addPostHandler}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChagngeHandler = (event) => {
    setTitle(event.target.value)
  }
  const bodyChagngeHandler = (event) => {
    setBody(event.target.value)
  }

  const createPostHandler = (event) => {
    event.preventDefault()
    const newPost = {
        id: uuidv4,
        title,
        body
    }
    addPostHandler(newPost) 
    setTitle('')
    setBody('')
  }

  return (
    <form>
      <MyInput
        onChange={titleChagngeHandler}
        value={title}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        onChange={bodyChagngeHandler}
        value={body}
        type="text"
        placeholder="Description of post"
      />
      <MyButton onClick={createPostHandler}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
