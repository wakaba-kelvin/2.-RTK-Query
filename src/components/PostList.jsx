import React, { useState } from 'react';
import DeletePost from './DeletePost';

const PostList = () => {
  const [posts, setPosts] = useState()

  const handleDelete = (postId) => {
    // Update the state by removing the post with the specified postId
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {/* Pass the postId to the DeletePost component */}
          <DeletePost postId={post.id} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
