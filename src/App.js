import React, { useState } from "react";
import PostList from "./components/postList/PostList";

const DUMMY_POSTS = [
  {
    id: 1,
    title: "JavaScript",
    body: "Description",
  },
  {
    id: 2,
    title: "Next.js",
    body: "Description 2",
  },
  {
    id: 3,
    title: "React",
    body: "Description 3",
  },
]

const App = () => {
  const [posts, setPost] = useState(DUMMY_POSTS);
  return <div>
    <PostList/>
    </div>;
};

export default App;
