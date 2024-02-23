import React from 'react';
import { useDeletePostMutation } from "../app/service/dummyData";

const DeletePost = ({ postId, onDelete }) => {
  const [deletePost, { data, error, isLoading }] = useDeletePostMutation();

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeletePost = async () => {
    try {
      await deletePost(postId);
      // If the delete operation is successful, notify the parent component
      onDelete(postId);
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <div>
      {data?.title && <h1>{`${data.title} successfully deleted`}</h1>}

      <button onClick={handleDeletePost} disabled={isLoading}>
        Delete Post
      </button>
    </div>
  );
};

export default DeletePost;
