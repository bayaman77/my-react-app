import React from 'react';

const PostList = () => {
    return (
        <div>
            {posts.map(post => (
      <p>{post.title}</p>
    ))}
        </div>
    );
};

export default PostList;