import React, { useState } from 'react';
import { useDeletePostMutation } from "../app/service/dummyData";

const DeletePost = ({ postId, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [deletePost, { data, error, isLoading }] = useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      await deletePost(postId);
      // If the delete operation is successful, notify the parent component
      onDelete(postId);
      handleCloseModal();
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Delete Post</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this post?</p>
            <button onClick={handleDeletePost} disabled={isLoading}>
              Yes, Delete
            </button>
            <button onClick={handleCloseModal} disabled={isLoading}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {data?.title && <h1>{`${data.title} successfully deleted`}</h1>}
      {error && <h1>Error: {error.message}</h1>}
    </div>
  );
};

export default DeletePost;
