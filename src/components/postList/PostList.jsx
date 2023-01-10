import React from "react";
import PostItem from "../postItem/PostItem";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post, index) => (
        <PostItem post={post} number={index} key={post.id}/>
      ))}
    </div>
  );
};

export default PostList;
